describe('Browser actions', () => {
    it('should load url', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 })
        cy.url().should('include', 'index.html')
    })

    it('should click on Travel category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })

    it('should display correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 11)
    })
})


describe('Browser actions', () => {
    it('should load url', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 })
        cy.url().should('include', 'index.html')
        cy.log('Website loaded!')
    })

    it('should click on Poetry category', () => {
        cy.get('a').contains('Poetry').click()
        cy.get('h1').contains('Poetry')
    })

    it('should click on Olio book', () => {
        cy.get('a').contains('Olio').click()
        cy.get('h1').contains('Olio')
    })

    it('should display correct price for Olio book', () => {
        cy.get('.price_color').contains('£23.88')
    })
})