class CartPage {

    elements = {
        products: () => cy.get('.success'),
        priceOfProducts: () => cy.get('.success :nth-child(3)'),
        cartTotalPrice: () => cy.get('#totalp'),
        placeOrderButton: () => cy.get('.btn-success'),
        modalNameInput: () => cy.get('#name'),
        modalCountryInput: () => cy.get('#country'),
        modalCityInput: () => cy.get('#city'),
        modalCardInput: () => cy.get('#card'),
        modalMonthInput: () => cy.get('#month'),
        modalYearInput: () => cy.get('#year'),
        purchaseModalButton: () => cy.get('.btn-primary[onclick^="purchase"]'),
        purchaseInfoAmount: () => cy.get('p.lead'),
        purchaseOkButton: () => cy.get('.sa-confirm-button-container button')
    }

    getProducts() {
        return this.elements.products();
    }

    getPriceOfProducts() {
        return this.elements.priceOfProducts();
    }

    clickPlaceOrderButton() {
        this.elements.placeOrderButton().click();
        return this;
    }

    typeModalName(name) {
        this.elements.modalNameInput().type(name, {delay: 0});
        return this;
    }

    typeModalCountry(country) {
        this.elements.modalCountryInput().type(country, {delay: 0});
        return this;
    }

    typeModalCity(city) {
        this.elements.modalCityInput().type(city, {delay: 0});
        return this;
    }

    typeModalCard(card) {
        this.elements.modalCardInput().type(card, {delay: 0});
        return this;
    }

    typeModalMonth(month) {
        this.elements.modalMonthInput().type(month, {delay: 0});
        return this;
    }

    typeModalYear(year) {
        this.elements.modalYearInput().type(year, {delay: 0});
        return this;
    }

    clickPurchaseModalButton() {
        this.elements.purchaseModalButton().click();
        return this;
    }

    clickPurchaseOkButton() {
        this.elements.purchaseOkButton().click();
    }

}

module.exports = new CartPage();
