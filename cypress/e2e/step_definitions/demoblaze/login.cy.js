import inventoryPage from "../../../pages/InventoryPage";
import loginPage from "../../../pages/LoginPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

 When("the user enters the admin credentials in the log in modal", () => {
    loginPage.typeLoginUsername("admin")
        .typeLoginPassword("admin");
 })

 When("the user types a password in the log in modal", () => {
    loginPage.typeLoginPassword("admin");
 })
 
 When("the user types a username in the log in modal", () => {
    loginPage.typeLoginUsername("admin");
 })
 
 When("the user types {string} in the field Username in the log in modal", (username) => {
    loginPage.typeLoginUsername(username);
 })
 
 When("the user types {string} in the field Password in the log in modal", (password) => {
    loginPage.typeLoginPassword(password);
 })
 
 Given("the user is logged in", () => {
   inventoryPage.clickLogInButton();

    loginPage.typeLoginUsername("admin")
        .typeLoginPassword("admin")
        .clickLoginModalButton();
 })

 When("the user clicks on the log out button", () => {
   inventoryPage.clickLogoutButton();
 })

 Then("the log in button is visible", () => {
   inventoryPage.elements.logInButton().should('be.visible');
})
