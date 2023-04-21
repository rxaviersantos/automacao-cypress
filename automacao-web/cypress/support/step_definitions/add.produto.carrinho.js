/// <reference types="cypress" />
/* global Given, When, Then, And*/

// const Cypress = require("cypress");
Given("Estou logado na amazon ", () => {
  cy.visit("https://amazon.com.br");
});

When("Adicionar multiplos produtos ao carrinho ", () => {});

Then(
  "O preço final do meu carrinho é a soma dos items adicionados  ",
  () => {}
);
