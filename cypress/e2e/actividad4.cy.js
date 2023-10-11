
/// <reference types="cypress" />

describe('Actividad complementaria 4', () => {
    let loginData;

    beforeEach(() => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
    });

  
    before(() => {
        cy.fixture("fixture").then(data => {
            loginData = data;
        });
    });
    it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
        cy.get('#user').type(loginData.username);
        cy.get('#pass').type(loginData.password);
        cy.get('#submitForm').click();
        cy.get('#errorMessage').should('have.text', loginData.mensajeError);
    
});
});