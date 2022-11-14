/// <reference types='cypress' />

describe('Add item to cart', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it('search and add item to card', () => {
        cy.get('#gh-ac').type('watches')
        cy.wait(2000)
        cy.get('#gh-btn').click()

        //Find the elements and select one
        cy.get('.s-item__image-section').should('have.length', 61)
        cy.get('.s-item__image-section').eq(1).click()

        //select color
        cy.get('#msku-sel-1').click()
    })
})