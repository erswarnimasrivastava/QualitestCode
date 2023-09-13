Feature: UI - cart test cases for dummy web site

    Background: User has launched the application
        Given the website is launched


    Scenario: Verify user adds item to the cart and able to verify actions on item
        Given I add four random items to my cart
        When I view my cart
        Then I find total four items listed in my cart
        When I search for lowest price item
        And I am able to remove the lowest price item from my cart
        Then I am able to verify three items in my cart