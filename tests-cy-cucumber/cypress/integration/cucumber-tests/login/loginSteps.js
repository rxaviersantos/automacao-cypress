import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open login page', () => {
	cy.visit('http://zero.webappsecurity.com/login.html')
})

When('I subimit login', () => {
	// Preencher nome de usuário
	cy.get('#user_login').type('username')
	// Preencher senha
	cy.get('#user_password').type('password')
	// Enviar formulário
	cy.get('input[name="submit"]').click()
})

Then('I should see homepage', () => {
	// Obter algum elemento após o login
	cy.visit('#account_summary_tab').should('be.visible')
})
