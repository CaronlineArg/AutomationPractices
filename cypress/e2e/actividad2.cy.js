 /// <reference types="cypress" />
 describe("Actividad complementaria", () =>{
    const numeroN = Math.floor(Math.random() * 1000)
    it('Actividad complementeria 1 - registro', () =>{
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
    it('Actividad complementeria 1 - login', () =>{
       
        cy.visit('https://pushing-front.vercel.app/');
        //login
        cy.get('span').contains('Iniciá sesión').dblclick()
        cy.get('input').first().type(`pushingit`)
       
        cy.get('input').last().type('123456!')
        cy.get('button#submitForm').click()
    
    });
});

//Si tenes ganas de seguir practicando te propongo que con lo aprendido en clase te registres al sistema con los siguientes datos 
// usuario: 'pushingit'
// contraseña '123456!'
//Para ir al login tienen que hacer doble click en el elemento 'incia sesion'
