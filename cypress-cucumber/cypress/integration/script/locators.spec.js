let username = "standard_user";
let password = "secret_sauce";

describe("Locators in Cypress", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  // Cenário - Obter elementos da web
  it("GET Method", () => {
    cy.get("#user-name").type(username);
    cy.get("input#password").type(password);
    cy.get('[data-test="login-button"]').click();
  });

  // Cenário - Utilizando métodos
  it("EQ|FIRST|LAST Method", () => {
    // Acessando primeira posição da matriz
    cy.get("input").first().type(username);
    // Acessando segunda posição da matriz
    cy.get("input").eq(1).type(password);
    // Acessando ultima posição da matriz
    cy.get("input").last().click();
  });

  // Cenário - FILTER
  it("FILTER Method", () => {
    cy.get("input").filter('[type="text"]').type(username);
    cy.get("input").filter('[type="password"]').type(password);
    cy.get("input").filter('[type="submit"]').click();
  });

  // Cenário - FIND
  it("FIND Method", () => {
    cy.get("form").find("input").eq(0).type(username);
    cy.get("form").find("input").eq(1).type(password);
    cy.get("form").find("input").eq(2).click();
  });

  // Cenário - PARENT
  it("PARENT Method", () => {
    cy.get("form").parent().should("have.class", "login-box");
  });
});
