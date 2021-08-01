import { Given,And,Then } from "cypress-cucumber-preprocessor/steps";

Given('user in on the application page', () => {
    cy.visit('https://paylinn.com/')
    
  })

  And('clicks on login link', () => {
    cy.contains('Sign In').click()
  })

  And('user enters username and password', () => {
      //entering username
      cy
      .get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
      .type('User')

      cy
      .get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
      .type('user')
  })

  And('clicks on login button', () => {
    cy
    .get('.MuiButton-label')
    .click()
  })

  And('verify default page is displayed', () => {
    cy
    .get('.header__nav > :nth-child(1) > .header__lineOne')
    .should('contain.text','Welcome')
  })