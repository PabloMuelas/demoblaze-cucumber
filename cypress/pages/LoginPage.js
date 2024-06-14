class LoginPage {

    elements = {
        loginUsernameInput: () => cy.get('#loginusername'),
        loginPasswordInput: () => cy.get('#loginpassword'),
        loginModalButton: () => cy.get('#logInModal .btn-primary'),
    }

    typeLoginUsername(username) {
        this.elements.loginUsernameInput().type(username, {delay: 0});
        return this;
    }

    typeLoginPassword(password) {
        this.elements.loginPasswordInput().type(password, {delay: 0});
        return this;
    }

    clickLoginModalButton() {
        this.elements.loginModalButton().click();
    }
}

module.exports = new LoginPage();
