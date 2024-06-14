@regression @smoke
Feature: Sign Up user

  @inventoryFilters
  Scenario Outline: Validate that the category filters work as intended
    Given the user is in the inventory page
    When the user clicks on the category '<category>'
    Then only the products of the category '<category>' are listed

    Examples:
    | category  |
    | Phones    |
    | Laptops   |
    | Monitors  |

  @inventoryProductSelection
  Scenario: Validate that the product selected is correct
    Given the user is in the inventory page
    When the user selects a product
    Then the user is in the page of the selected product