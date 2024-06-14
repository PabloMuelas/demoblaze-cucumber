class SignUpPage {

    elements = {
        signUpUsernameInput: () => cy.get('#sign-username'),
        signUpPasswordInput: () => cy.get('#sign-password'),
        signUpModalButton: () => cy.get('#signInModal .btn-primary')
    }

    typeSignUpUsername(username) {
        this.elements.signUpUsernameInput().type(username, {delay: 0});
        return this;
    }

    typeSignUpPassword(password) {
        this.elements.signUpPasswordInput().type(password, {delay: 0});
        return this;
    }

    clickSignUpModalButton() {
        this.elements.signUpModalButton().click();
    }
}

module.exports = new SignUpPage();
