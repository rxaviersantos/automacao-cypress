import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("Um usuário abre a página de login", () => {
  cy.visit("/");
});

When("Um usuário insere o nome de usuário {string}", (username) => {
  cy.get("#user-name").type(username);
});

And("Um usuário digita o password {string}", (password) => {
  cy.get("#password").type(password);
});

And("Um usuário clica no botão de login", () => {
  cy.get("#login-button").click();
});

Then("Um usuário será logado", () => {
  cy.url().should("contains", "/inventory.html");
});

Then("Um usuário receberá uma mensagem com falha", () => {
  cy.get("h3").should(
    "have.text",
    "Epic sadface: Sorry, this user has been locked out."
  );
});
