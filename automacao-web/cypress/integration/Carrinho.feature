Feature: Compra de Produto com Demanda Reprimida

  Scenario: Comprar produto sem estoque
    Given: Acesso a pagina da amazon 
      And: busco um play 5
    When: existe o produto em estoque
    Then: adiciono o produto ao carrinho
      And: fecho o pedido
