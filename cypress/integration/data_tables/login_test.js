import { Given,And,Then } from "cypress-cucumber-preprocessor/steps";

Given('user in on the application page', () => {
    cy.visit('https://qa-environment.resortsline.com/Account/Logon')
    
  })


  And('user login with below data', (dataTable) => {
      //entering username
      cy
      .get('#UserName')
      .type(dataTable.rawTable[1][0])

      cy.get('#Password')
      .type(dataTable.rawTable[1][1])
      cy.wait(3000)
  })

  And('clicks on login button', () => {
    cy.get('#btnSubmit')
    .click()
  })

  And('verify default page is displayed', () => {
    cy.get('.username')
    .should('contain.text','manager')
  })