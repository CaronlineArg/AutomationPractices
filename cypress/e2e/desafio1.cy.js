 /// <reference types="cypress" />
 describe("desafío 1: register and add item in to do list", () =>{
    const numeroN = Math.floor(Math.random() * 1000)
    it('Desafío 1 - registro', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        //crear un test que permita registrarse en la pagina!
        //Recorda usar npx cypress open para abrir la interfaz de usuario
        //Para seleccionar el genero utiliza el siguiente selector cy.get("[value='Male']") //Female // recuerden el force true
        cy.get('[id="user"]').clear()
        cy.get('input#user').type(`pushingit${numeroN}`)
       
        cy.get('input[id=pass]').type('123456!')
        cy.get('[id="radio-:r4:"]').click({ force: true })
        cy.get('[name="day"]').select(0)
        cy.get('select').eq(1).select('April')
        cy.get('select').last().select(30)
        cy.get('button#submitForm').click()
    });
    it('desafío 1 - to do list: add item and check it', () =>{
       
        
        cy.get('#todolistlink').contains('To Do List').click()
        cy.get('input[name=task]').type(`Hacer desafío`)
        cy.get('button#sendTask').contains('Send').click()
        cy.get('li[class=css-vn850v]').find('p').click()
        /*cy.get('input[name=task]').type(`Hacer desafío`)
        cy.get('button#sendTask').click()
        cy.get('input[name=task]').type(`Hacer desafío`)
        cy.get('button#sendTask').click()
        cy.get('input[name=task]').type(`Hacer desafío`)
        cy.get('button#sendTask').click()
        cy.get(':nth-child(2) > .css-vuy1kp > .chakra-button').last().click()
        cy.get('input[name=task]').type(`Hacer desafío`)
        cy.get('button#sendTask').click()
        cy.get('button#completed').click()
        cy.get('#all').click()
        cy.get('#active').click()
        cy.get('#removeAll').click()
        cy.get('#logout').click()*/
    
    
    });
});
