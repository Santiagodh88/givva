describe('Browser actions', () => {

    it('should override current date', () => {
        const date = new Date(2020, 3, 10).getTime() //returns a timesamtp
        cy.clock(date)
        cy.log(date)
    })

    it('should load url', () => {
        cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 })
        cy.url().should('include', 'login.html')
        cy.clearCookies({ log: true })
        cy.clearLocalStorage('your item', { log: true })
    })

    it('should type username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('Username')
    })

    it('should type password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('Password')
    })

    it('should click on Login', () => {
        cy.contains('Sign in').click()
    })

    it('should display error message', () => {
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain', 'Login and/or password are wrong.')
    })
})