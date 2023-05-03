import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const homeSaucePage = require("../../plugins/pages/homeSaucePage");

Given("Um usuário abre a página de login", () => {
  cy.visit("/");
});

When("Um usuário insere o nome de usuário {string}", (username) => {
  homeSaucePage.typeUsername(username);
});

And("Um usuário digita o password {string}", (password) => {
  homeSaucePage.typePassword(password);
});

And("Um usuário clica no botão de login", () => {
  homeSaucePage.clickLogin();
});

Then("Um usuário será logado", () => {
  cy.url().should("contains", "/inventory.html");
});
// Verificando se o h3 está retornando a msg correta
Then("Um usuário receberá uma mensagem com falha", () => {
  homeSaucePage.elements
    .errorMessage()
    .should("have.text", "Epic sadface: Sorry, this user has been locked out.");
});
