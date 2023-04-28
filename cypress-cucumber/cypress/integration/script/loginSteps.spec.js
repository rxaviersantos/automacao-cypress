describe("Login Tes", function () {
  it("Success Login", () => {
    cy.visit("/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    // Verificando se está no diretótio correto
    cy.url().should("contains", "/inventory.html");
  });
});
