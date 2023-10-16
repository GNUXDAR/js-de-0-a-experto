describe('Login Test', () => {
    it('user can not acces to protected routed when is not logged in', ()=> {
        cy.visit('/')
        cy.url().should('eq', 'http://172.17.0.2:8080/login')
    })

    it('user with wrong credentials can not pass', () => {
        cy.visit('http://172.17.0.2:8080/login')
        cy.get('#email').type('demo@demo.com')
        cy.get('#password').type('2023')
        cy.get('button').click()
        cy.contains('code', 'wrong email or password')
        cy.visit('/')
        cy.url().should('eq', 'http://172.17.0.2:8080/login')
    })

    it('user can successfully login', () => {
        cy.visit('http://172.17.0.2:8080/login')
        cy.get('#email').type('gnuxdar@admin.com')
        cy.get('#password').type('1234567')
        cy.get('button').click()
        cy.url().should('eq', 'http://172.17.0.2:8080/')
    })
})