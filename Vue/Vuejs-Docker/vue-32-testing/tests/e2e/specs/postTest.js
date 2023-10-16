describe('Post test feature', () => {
    beforeEach( () => {
        cy.visit('http://172.17.0.2:8080/login')
        cy.get('#email').type('gnuxdar@admin.com')
        cy.get('#password').type('1234567')
        cy.get('button').click()
        cy.url().should('eq', 'http://172.17.0.2:8080/')
    }),
    it('Logged user can acces to page posts and views post list', () => {
        cy.contains('h1', 'Post List')
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })

    it('user can acces to view post detail', () => {
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
        cy.url('eq', 'http://172.17.0.2:8080/detail/1')
        cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')
    })

    it('Logged user can go back detail post view', () => {
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
        cy.url('eq', 'http://172.17.0.2:8080/detail/1')
        cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')
        cy.get('link').click()
        cy.url().should('eq', 'http://172.17.0.2:8080/')
        cy.contains('h1', 'Post List')

    })
})