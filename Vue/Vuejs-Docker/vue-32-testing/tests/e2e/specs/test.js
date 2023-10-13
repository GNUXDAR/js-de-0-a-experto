// https://docs.cypress.io/api/table-of-contents

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App')
  })
  it('User increment counter', () => {
    cy.visit('/')
    cy.get('#counter-info').contains(0)
    cy.contains('button', 'Increment').click()
    cy.get('#counter-info').contains(1)
  })
})

/*
cy.visit('/') //visita una URL
cy.url() //obtiene la URL en la que nos encontramos
cy.contains("label", "Content") //Comprueba si la pagina contiene el elemento descrito
cy.should('contains', 'hello cypress')  //comprobación de proposito general sobre el elemento aplicado
cy.should('hace.css', 'color', '#ff0000') //Comprobacion de proposito general sobre el elemento aplicado
cy.request('POST', 'uri', {}) //para realizar peticiones
cy.get('.class') //Obtener un elemento en funcion a su clase
cy.get('#id') //Obetner un elemento en duncion a su id
cy.get('[data-test-id="myId"]') //Obtener un elemento en funcion a su argumento
cy.click() //Accion: click
cy.type() //Accion; escribir
*/

