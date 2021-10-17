// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('shipping', (data) => {

    cy.get('#checkout_email_or_phone').type(data.email)
    cy.get('#checkout_shipping_address_first_name').type(data.firstName)
    cy.get('#checkout_shipping_address_last_name').type(data.lastName)
    cy.get('#checkout_shipping_address_address1').type(data.address)
    cy.get('#checkout_shipping_address_city').type(data.city)
    cy.get('#checkout_shipping_address_province').select(data.state)
    cy.get('#checkout_shipping_address_zip').type(data.pincode)
    cy.get('#checkout_shipping_address_phone').type(data.phoneNumber)
    cy.get('#checkout_remember_me').click()

})
