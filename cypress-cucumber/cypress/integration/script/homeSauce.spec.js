// Validação da página

// Especificando a rota
import homeSaucePage from "../../plugins/pages/homeSaucePage";
import inventoryPage from "../../plugins/pages/inventoryPage";

describe("POM Implementacao", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });
  // Cenário - Login na página de produtos
  it("Deve fazer login na página de inventário", () => {
    homeSaucePage.typeUsername("standard_user");
    homeSaucePage.typePassword("secret_sauce");
    homeSaucePage.clickLogin();

    inventoryPage.elements.titleSpan().should("have.text", "Products");
  });

  // Cenário - Exibir mensagem de bloqueio
  it("Deve exibir a mensagem de usuário bloqueado", () => {
    homeSaucePage.typeUsername("locked_out_user");
    homeSaucePage.typePassword("secret_sauce");
    homeSaucePage.clickLogin();

    homeSaucePage.elements
      .errorMessage()
      .should(
        "have.text",
        "Epic sadface: Sorry, this user has been locked out."
      );
  });

  // Exibe mensagem com nome de usuário incorreto
  it("Deve exibir a mensagem de usuário incorreto", () => {
    homeSaucePage.typeUsername("rodriPassword");
    homeSaucePage.typePassword("secret_sauce");
    homeSaucePage.clickLogin();

    homeSaucePage.elements
      .errorMessage()
      .should(
        "have.text",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });

  // Exibe mensagem com senha de usuário incorreta
  it("Deve exibir a mensagem de senha incorreta", () => {
    homeSaucePage.typeUsername("standard_user");
    homeSaucePage.typePassword("secret_12");
    homeSaucePage.clickLogin();

    homeSaucePage.elements
      .errorMessage()
      .should(
        "have.text",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });
});
