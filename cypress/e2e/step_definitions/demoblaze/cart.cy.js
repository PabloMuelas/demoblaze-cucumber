import inventoryPage from "../../../pages/InventoryPage";
import loginPage from "../../../pages/LoginPage";
import productPage from "../../../pages/ProductPage";
import cartPage from "../../../pages/CartPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let purchaseTotalAmount;

Given("the user is logged in and is on the home page", () => {
    cy.visit('/');
    
    inventoryPage.clickLogInButton()

    loginPage.typeLoginUsername("admin")
        .typeLoginPassword("admin")
        .clickLoginModalButton();
})

When("the user clicks on the first product shown in the page", () => {
    inventoryPage.clickFirstInventoryPageProduct();
})

When("the user clicks on the add to cart button", () => {
    productPage.clickAddToCartProduct();
})

When("the user clicks on the home button", () => {
    inventoryPage.clickInventoryPage();
})

When("the user clicks on the last product shown in the page", () => {
    inventoryPage.clickLastInventoryPageProduct();
})

When("the user clicks on the cart button", () => {
    inventoryPage.clickCartPage();
})

Then("the total price is the same that the sum of both products", () => {
    cartPage.getProducts().its('length').should('eq', 2);

    let priceList = [];
    
    cartPage.getPriceOfProducts().each((price) => {
        priceList.push(parseFloat(price.text()));
    }).then(() => {
        let sum = 0;
        for (let i = 0; i < priceList.length; i++) {
            sum += parseFloat(priceList[i]);
        }

        cartPage.elements.cartTotalPrice().invoke('text').then((text) => {
            let totalValue = parseFloat(text);

            expect(sum).to.equal(totalValue)
            purchaseTotalAmount = totalValue;
        });
    });
})

When("the user clicks on the place order button", () => {
    cartPage.clickPlaceOrderButton();
})

When("the user fills the form with valid information", () => {
    cartPage.typeModalName("Pablo")
        .typeModalCountry("Spain")
        .typeModalCity("Murcia")
        .typeModalCard("123")
        .typeModalMonth("June")
        .typeModalYear("2024");
})

When("the user clicks on the purchase button", () => {
    cartPage.clickPurchaseModalButton();
})

Then("the purchase is completed and the total amount is correct", () => {
    cartPage.elements.purchaseInfoAmount().invoke('text').then((text) => {
        let amountMatch = text.match(/Amount:\s(\d+)/);
        let amount = parseFloat(amountMatch[1]);

        expect(purchaseTotalAmount).to.equal(amount);
    })
})

When("the user clicks on the ok button", () => {
    cartPage.clickPurchaseOkButton();
})

Then("the user is redirected to the home page", () => {
    cy.visit('/');
    cy.url().should('eq', "https://demoblaze.com/");
})

Then("the user is in the cart page and there are no products in the cart", () => {
    cy.url().should('eq', "https://demoblaze.com/cart.html");
    cartPage.getProducts().should('not.exist');
})
