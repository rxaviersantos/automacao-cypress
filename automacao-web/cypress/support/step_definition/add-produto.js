const cypressConfig = require("../../../cypress.config");

<require types="cypress" />;
/*global Given, When, Then, And */

Given("Estou logado no site da Amazon", () => {
  cy.visit("http://amazon.com.br");
});

When("Adicionar multiplos produtos no carrinho de compras ", () => {});

Then("O preço total do carrinho é a soma dos itens adicionados ", () => {});
