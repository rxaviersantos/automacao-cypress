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
});
