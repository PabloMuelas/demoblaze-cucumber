import inventoryPage from "../../pages/InventoryPage";
import loginPage from "../../pages/LoginPage";
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('the user navigates to DemoBlaze', () => {
    cy.visit('/')
})

When("the user clicks on the log in button", () => {
    inventoryPage.clickLogInButton();
})

When("the user clicks on the log in modal button", () => {
    loginPage.clickLoginModalButton();
})

Then("the sign up and login button disappear", () => {
    inventoryPage.elements.signUpButton().should('not.be.visible');
    inventoryPage.elements.logInButton().should('not.be.visible');
})

Then('the url should contain {string}', function(urlContained) {
    cy.url().should('contain', urlContained)
})

Then('the message {string} appears on the screen', (message) => {
    cy.on('window:alert',(alertMessage)=>{
        expect(alertMessage).to.contains(message);
    })
})
