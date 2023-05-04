// Página de inventário - Iserimos um;
// Nome de usuário e senha Corretos, procurando elemento, classe específica agora

class inventoryPage {
  elements = {
    titleSpan: () => cy.get(".title"),
  };
}

module.exports = new inventoryPage();
