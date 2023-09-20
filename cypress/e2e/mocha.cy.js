//describe()= suite de pruebas
//it()= test
//los test tienen que ser independientes porque sino el fallo se arrastra
//describe es un metodo primer suite es un parametro, en donde se pone el nombre del suit, el segundo parametro es una función anónima
//.skip ejecuta todos excepto el roto. se puede usar en describe y en it
//.only ejecuta solo el test que dice only. sirve para trabajar en arreglar en un solo test y no tener que ejecutar todos . se puede usar en describe y en it
describe(' Primer suite',()=>{
    const nombre="caro";
    //no se puede acceder desde fuera del describe a la variable creada dentro del describe
    //no poner un test dentro de otro
    it('primer test',()=>{
        cy.log('primer test')
    })

    it('segundo test',()=>{
        cy.log('segundo test')
    })
})

//los tests deben estar dentro de la carpeta end to end
