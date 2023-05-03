<h1 align="center"> Automação de teste com Cypress e Cucumber </h1>

<p align="center">
Repositório destinado ao desenvolvimento de teste automatizado utilizando o framework Cypress<br/>
</p>
<p align="center">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green.svg">

</p>

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

## Configurações

<<<<<<< HEAD
Ao rodar o `script` de teste, ocorrer algum erro, será necessário configurar em sua base `cypress.config.js` a configuração [Web Security](https://docs.cypress.io/guides/guides/web-security)
=======
Ao rodar o `script` de teste ocorrer algum erro, será necessário configurar em sua base `cypress.config.js` a configuração [Web Security](https://docs.cypress.io/guides/guides/web-security)
>>>>>>> 2f80bad063a4310c82dc9ba6fc473bbdd44113e6

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

