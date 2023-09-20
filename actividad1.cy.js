 /// <reference types="cypress" />
 describe("Actividad complementaria", () =>{
    const numeroN = Math.floor(Math.random() * 1000)
    it('Actividad complementeria 1', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        //crear un test que permita registrarse en la pagina!
        //Recorda usar npx cypress open para abrir la interfaz de usuario
        //Para seleccionar el genero utiliza el siguiente selector cy.get("[value='Male']") //Female // recuerden el force true
        cy.get('#user').clear()
        cy.get('#user').type(`pushingit${numeroN}`)
       
        cy.get('#pass').type('123456!')
        cy.get(':nth-child(1) > .chakra-radio__control').click({ force: true })
        cy.get('#day').select(0)
        cy.get('#month').select('April')
        cy.get('#year').select(30)
        cy.get('#submitForm').click()
     
    
    
    });
});

//Si tenes ganas de seguir practicando te propongo que con lo aprendido en clase te registres al sistema con los siguientes datos 
// usuario: 'pushingit'
// contraseña '123456!'
//Para ir al login tienen que hacer doble click en el elemento 'incia sesion'
