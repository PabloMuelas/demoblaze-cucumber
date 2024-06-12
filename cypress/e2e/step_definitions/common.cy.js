import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('the user navigates to DemoBlaze', function() {
    cy.visit('/')
})

Then('the url should contain {string}', function(urlContained) {
    cy.url().should('contain', urlContained)
})
