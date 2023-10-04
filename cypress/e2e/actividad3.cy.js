describe("Actividad complementaria 3", () =>{
	// instalar la dependencia cypress-xpath
  // remplazar todos los selectores 'cssSelectors' por expresiones xpath
  // recorda usar el metodo cy.xpath y agregar la dependencia en el archivo e2e.
    it('Actividad complementaria 3', () =>{
        cy.visit('');
        cy.xpath('//*[@id="registertoggle"]').dblclick();
        cy.get('#user').type(`pushingit`);
        cy.get('#pass').type('123456!');
        cy.get('#submitForm').click();
        cy.wait(5000);
        cy.xpath('/html/body/div[1]/div/div[2]/div[1]/p/a').click();
        cy.get("[id^='sen']").type("tarea 1")
        cy.xpath('//*[@id="task"]/following-sibling::button').click()
        cy.xpath("//p[starts-with(text(),'tarea')]").click()
    });
});


//Si queres practicar mas podes rehacer el desafio 1 cambiando todos los selectores que usaste por expresiones xpath!!!!

//https://drive.google.com/drive/u/1/folders/1HLb8ZVjPq207-iu3HGo9ugy4c3qOgB0S