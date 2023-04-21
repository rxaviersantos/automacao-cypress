Feature: Carrinho

  Scenario: Adicionar multiplos produtos ao carrinho - Verificar preço final
    Given: Estou logado na amazon 
    When: Adicionar multiplos produtos ao carrinho 
    Then: O preço final do meu carrinho é a soma dos items adicionados 
