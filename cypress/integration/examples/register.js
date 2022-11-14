/// <reference types='cypress' />

describe('Create a user account', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it("Register", () => {
        cy.contains('register').click()
        cy.get('#firstname').type('Karungi')
        cy.get('#lastname').type('Lydia')
        cy.get('#Email').type('karungilydia43@gmail.com')
        cy.get('#password').type('simple@41')


        cy.wait(1000)
        cy.get('#EMAIL_REG_FORM_SUBMIT').click()
    })

})