import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

var smallestPrice = ''
var price = ''
Given("the website is launched", async () => {
    cy.visit('https://cms.demo.katalon.com/')
});

Given("I add four random items to my cart", async () => {
    //cy.get('.button product_type_simple').click()
    cy.xpath("(//a[@class='button product_type_simple add_to_cart_button ajax_add_to_cart'])[1]")
        .invoke('show').click()
    cy.wait(200)
    cy.xpath("(//a[@class='button product_type_simple add_to_cart_button ajax_add_to_cart'])[3]")
        .invoke('show').click()
    cy.wait(500)
    cy.scrollTo(0, 500)
    cy.xpath("(//a[text()='Add to cart'])[5]")
        .invoke('show').click()
    cy.wait(800)
    cy.scrollTo(0, 1000)
    cy.xpath("//a[@data-product_id='22']")
        .invoke('show').click()
    cy.wait(200)
});

When("I view my cart", async () => {
    cy.xpath("(//a[@href='https://cms.demo.katalon.com/cart/'])[1]").click()
});

When("I find total four items listed in my cart", async () => {

    cy.xpath("//td[@class='product-name']").should('have.length', 4)

});

When("I search for lowest price item", async () => {

    cy.xpath("//td[@class='product-price']//span[@class='woocommerce-Price-amount amount']")
        .each(($el) => {
            cy.wrap($el)
                .invoke('text')
                .then((priceText) => {
                    price = parseInt(priceText.trim().replace('$', ''), 10);

                    // You can log or assert each price as needed
                    cy.log('Price: ' + price);
                });
        })
        .then(() => {
            // Now you can find the smallest price among all the prices
            // This code block will run after all elements have been processed
            const prices = [];
            cy.xpath("//td[@class='product-price']//span[@class='woocommerce-Price-amount amount']")
                .invoke('text')
                .each((priceText) => {
                    //price = parseInt(priceText.trim().replace('$', ''), 10);
                    prices.push(price);

                })
                .then(() => {
                    smallestPrice = Math.min(...prices);
                    cy.log(`Smallest Price: $${smallestPrice}`);
                });
        });
});

When("I am able to remove the lowest price item from my cart", async () => {
    cy.xpath("(//tr[@class='woocommerce-cart-form__cart-item cart_item']//td[@class='product-price']//*[@class='woocommerce-Price-amount amount' and contains(text(),'" + smallestPrice + "')]/../../td[@class='product-remove']//a)[1]").click()
    cy.wait(400)
    cy.xpath("//td[@class='product-name']").should('have.length', 3)
});

When("I am able to verify three items in my cart", async () => {
    cy.wait(400)
    cy.xpath("//td[@class='product-name']").should('have.length', 3)
});
