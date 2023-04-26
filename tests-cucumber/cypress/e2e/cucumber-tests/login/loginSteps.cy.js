import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open login page', () => {
	cy.visit('http://zero.webappsecurity.com/login.html')
})

When('I subimit login', () => {
	// fill username
	cy.get('#user_login').type('username')
	// fill password
	cy.get('#ser_password').type('password')
	// subimit form
	cy.get('input[name="submit"]').click
})

Then('I should see homepage', () => {
	// get some element after login
	cy.visit('#account_summary_tab').should('be.visible')
})
