import inventoryPage from "../../../pages/InventoryPage";
import productPage from "../../../pages/ProductPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const numberOfPhones = 7
const numberOfLaptops = 6
const numberOfMonitors = 2

Given("the user is in the inventory page", () => {
    cy.visit('/');
})

When("the user clicks on the category {string}", (category) => {
    switch (category) {
        case "Phones":
            inventoryPage.clickPhoneCategory();
            break;
        case "Laptops":
            inventoryPage.clickLaptopCategory();
            break;
        default:
            inventoryPage.clickMonitorCategory();
            break;
    }
})

Then("only the products of the category {string} are listed", (category) => {
    switch (category) {
        case "Phones":
            inventoryPage.getInventoryPageProducts().should('have.lengthOf', numberOfPhones)
            break;
        case "Laptops":
            inventoryPage.getInventoryPageProducts().should('have.lengthOf', numberOfLaptops)
            break;
        default:
            inventoryPage.getInventoryPageProducts().should('have.lengthOf', numberOfMonitors)
            break;
    }
})

When("the user selects a product", () => {
    inventoryPage.clickFirstInventoryPageProduct();
})

Then("the user is in the page of the selected product", () => {
    productPage.elements.productDescription().should('be.visible');
})
