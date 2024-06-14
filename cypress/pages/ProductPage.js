class ProductPage {

    elements = {
        addToCartProduct: () => cy.get('a[class^="btn"]'),
        productDescription: () => cy.get('div#more-information')
    }

    clickAddToCartProduct() {
        this.elements.addToCartProduct().click();
    }

}

module.exports = new ProductPage();
