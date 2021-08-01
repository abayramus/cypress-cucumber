import { Given,And,Then } from "cypress-cucumber-preprocessor/steps";

Given('user is on the google page', () => {
    cy.visit('https://www.google.com/')
    
  })

  And('user search for {string}', (capitals) => {
    cy.get('.RNNXgb').type(capitals)
    cy.get('.FPdoLc > center > .gNO89b').click({ force: true })
  })

  And('verify the result has {string}', (capitals) => {
      //entering username
      cy
      .title()
      .should('include',capitals)

  
  })
