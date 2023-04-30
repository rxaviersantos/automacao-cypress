import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("A user opens the login page", () => {
  cy.visit("/");
});

When("A user enter the username {string}", (username) => {
  cy.get("#user-name").type(username);
});

And("A user enter the password {string}", (password) => {
  cy.get("#password").type(password);
});

And("A user clicks on the login button", () => {
  cy.get("#login-button").click();
});

Then("A user will be logged in", () => {
  cy.url().should("contains", "/inventory.html");
});
