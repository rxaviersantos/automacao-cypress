<h1 align="center"> Automação de teste com Cypress e Cucumber </h1>

<p align="center">
Repositório destinado ao desenvolvimento de teste
</p>

<p align="center">
  automatizado utilizando o framework Cypress<br/>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green.svg">

</p>

# Teste de login

Este repositório contém scripts para testar cenários comuns usando o Cypress: 

- Inserir o nome e senha de usuário correto, o sistema direciona para o site de inventário.
- Iserir um usuário bloqueado e senha correta, sistema exibir a mensagem  " Desculpe, este usuário foi bloqueado".
- Inserir o nome de usuário incorreto, sistema exibir a mensagem " O nome de usuário e a senha não correspondem a nenhum usuário neste serviço".
- Validação ao fazer login com sucesso, procurar um exemplo de produto e certificar que ele salve o produto.
- Validar se o sistema retorna a mensagem "Epic sadface: Username and password do not match any user in this service" quando o usuário insere nome ou senha incorreta.

## Iniciando project 

```bash
npm init
```
## Rodando os testes

Para rodar os testes, use o seguinte comando

```bash
  npm run test
```
## Cenário para teste

[saucedemo.com](https://www.saucedemo.com/)

<p align="center">
  <img alt="projeto tipo de botões" src="https://user-images.githubusercontent.com/85380530/236064391-b7c9915b-8668-4f23-b03d-7e70637a2786.png" " height="620px" width="820px">
</p>

## Configurações

Ao rodar o `script` de teste ocorrer algum erro, será necessário configurar em sua base `cypress.config.js` a configuração [Web Security](https://docs.cypress.io/guides/guides/web-security)

```json
{
  "chromeWebSecurity": false
}
```

Para executar o `cypress-cucumber-preprocessor` corretamente, será necessário criar a configuração para plug-in, adicionando ao arquivo `package.json` [cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor)

```json
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}
```

## Instalando a versão do Cypress utilizada neste projeto

```bash
npm i cypress@9.1.0
```
## Instalando dependência Cucumber 

```bash
npm install --save-dev cypress cypress-cucumber-preprocessor
```

## Abrindo o cypress a partir da raiz do projeto 

```bash
npx cypress open
```


## Stack utilizada

**Back-end:** Node e Javascript


## Documentação

[cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)

[Cucumber](https://cucumber.io/docs/guides/overview/)

[nodejs](https://nodejs.org/en)

[Javascript](https://www.javascript.com/)

--------------
## Rodando localmente

Clone o projeto

```bash
  git clone https://link-para-o-projeto
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run test
```




<p align="center">
 Olá, sinta-se à vontade para mostrar apoio e dar a este repo<img src="https://img.icons8.com/fluency/20/null/star.png"/>estrela! Significa muito, obrigado :) 
</p>
