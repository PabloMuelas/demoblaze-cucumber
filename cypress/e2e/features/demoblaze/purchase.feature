@regression
Feature: Sign Up user

  @e2e
  Scenario: Validate that the user can complete a purchase with 2 products
    Given the user is logged in and is on the home page
    When the user clicks on the first product shown in the page
    And the user clicks on the add to cart button
    Then the message "Product added." appears on the screen
    When the user clicks on the home button
    And the user clicks on the last product shown in the page
    And the user clicks on the add to cart button
    Then the message "Product added." appears on the screen
    And the user clicks on the cart button
    Then the total price is the same that the sum of both products
    When the user clicks on the place order button
    And the user fills the form with valid information
    And the user clicks on the purchase button
    Then the purchase is completed and the total amount is correct
    When the user clicks on the ok button
    Then the user is redirected to the home page
    When the user clicks on the cart button
    Then the user is in the cart page and there are no products in the cart
