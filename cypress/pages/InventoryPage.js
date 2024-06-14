class InventoryPage{
    
    elements = {
        inventoryPageLink: () => cy.get('a.nav-link[href="index.html"]'),
        logInButton: () => cy.get('#login2'),
        signUpButton: () => cy.get('#signin2'),
        logoutButton: () => cy.get('#logout2'),
        inventoryPageProducts: () => cy.get('div[class^="col-lg-4"]'),
        cartPageLink: () => cy.get('#cartur'),
        phoneCategory: () => cy.get('a[onclick*="phone"]'),
        laptopCategory: () => cy.get('a[onclick*="notebook"]'),
        monitorCategory: () => cy.get('a[onclick*="monitor"]')
    }

    clickInventoryPage() {
        this.elements.inventoryPageLink().click();
    }

    clickLogInButton() {
        this.elements.logInButton().click();
        return this;
    }

    clickSignUpButton() {
        this.elements.signUpButton().click();
        return this;
    }

    clickLogoutButton() {
        this.elements.logoutButton().click();
    }

    getInventoryPageProducts() {
        return this.elements.inventoryPageProducts();
    }

    getFirstInventoryPageProduct() {
        return this.elements.inventoryPageProducts().first();
    }

    getLastInventoryPageProduct() {
        return this.elements.inventoryPageProducts().last();
    }

    clickFirstInventoryPageProduct() {
        this.getFirstInventoryPageProduct().find('.hrefch').click();
    }

    clickLastInventoryPageProduct() {
        this.getLastInventoryPageProduct().find('.hrefch').click();
    }

    clickCartPage() {
        this.elements.cartPageLink().click();
    }

    clickPhoneCategory() {
        this.elements.phoneCategory().click();
    }

    clickLaptopCategory() {
        this.elements.laptopCategory().click();
    }

    clickMonitorCategory() {
        this.elements.monitorCategory().click();
    }
}

module.exports = new InventoryPage();
