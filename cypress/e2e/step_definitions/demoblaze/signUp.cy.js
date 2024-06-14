import inventoryPage from "../../../pages/InventoryPage";
import signUpPage from "../../../pages/SignUpPage";
import loginPage from "../../../pages/LoginPage";
import {When} from "@badeball/cypress-cucumber-preprocessor";

let loginUsername = "pabloUser";
const loginPassword = "pabloPass";

const adminUser = "admin";
const adminPass = "admin";

When("the user clicks on the sign up button", () => {
    inventoryPage.clickSignUpButton();
})

When("the user enters valid credentials", () => {
    const randomNum = Math.floor(Math.random() * 100000);
    loginUsername += randomNum

    signUpPage.typeSignUpUsername(loginUsername)
        .typeSignUpPassword(loginPassword);
})

When("the user clicks on the sign up modal button", () => {
    signUpPage.clickSignUpModalButton();
})

When("the user enters the log in credentials", () => {
    loginPage.typeLoginUsername(loginUsername)
        .typeLoginPassword(loginPassword);
})

When("the user types a password", () => {
    signUpPage.typeSignUpPassword("12345");
})

When("the user types a username", () => {
    signUpPage.typeSignUpUsername("pruebademoblaze16856011245123");
})

When("the user enters the admin credentials in the sign up modal", () => {
    signUpPage.typeSignUpUsername(adminUser)
    .typeSignUpPassword(adminPass);
})
