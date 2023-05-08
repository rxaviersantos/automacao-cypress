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
    cy.get("input").first().type(username);
    cy.get("input").eq(1).type(password);
    cy.get("input").last().click();
  });
});
