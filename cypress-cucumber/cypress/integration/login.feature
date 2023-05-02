  Feature: Funcionalidade de login

    Feature Este recurso é necessário para que um usuário faça login

    Scenario: Login de sucesso
    Given Um usuário abre a página de login
     When Um usuário insere o nome de usuário "standard_user"
     And Um usuário digita o password "secret_sauce"
     And Um usuário clica no botão de login
     Then Um usuário será logado

    Scenario: Falha no login
    Given Um usuário abre a página de login
     When Um usuário insere o nome de usuário "locked_out_user"
     And Um usuário digita o password "secret_sauce"
     And Um usuário clica no botão de login
     Then Um usuário receberá uma mensagem com falha

