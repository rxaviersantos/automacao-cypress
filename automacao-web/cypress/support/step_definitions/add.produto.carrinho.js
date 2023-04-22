/// <reference types="cypress" />
/* global Given, When, Then, And*/
let usuarioAmazon = Cypress.env("usuario.amazon");
let senhaAmazon = Cypress.env("senha.amazon");

// const Cypress = require("cypress");
Given("Acesso a pagina da amazon  ", () => {
  cy.visit("https://amazon.com.br");
});

And("busco um play 5", () => {
  cy.get("#twotabsearchtextbox").click();
  cy.type("plastation 5 console{enter}");
});
When("Adicionar multiplos produtos ao carrinho ", () => {});

Then(
  "O preço final do meu carrinho é a soma dos items adicionados  ",
  () => {}
);
