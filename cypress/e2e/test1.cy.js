describe('My First Test', () => {
    it('finds the content "type"', () => {
        cy.visit('/')

        cy.get('.btn').click()
        cy.get('#add-task').type('Kiss Flo')
        cy.get('#add-date-time').type('Now')
        cy.get('.submit-button').click()
    })
})