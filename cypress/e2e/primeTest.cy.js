describe('test',()=>{
    it('registrarse satisfactoriamente',()=>{
        cy.get('#user').type('ṕushingitx')
        cy.get('#user').clear()
        cy.get('#user').type('ṕushingitx')
        cy.get('#pass').type('123456!')
        cy.get('#day').select('0')
        cy.get('#month').select('April')
        cy.get('#year').select(30)
        cy.get('#submit').click()
    })

    //al seleccionar puede haber un elemento arriba del que queremos elegir, entonces no se puede elegir
    //force true hace que se marque el check
})
   
