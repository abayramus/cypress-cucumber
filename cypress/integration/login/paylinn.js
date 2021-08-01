import { Given,And } from "cypress-cucumber-preprocessor/steps";

Given('user in on the application page', () => {
    cy.visit('https://qa-environment.crystalkeyhotels.com/');
    cy.contains('Log in').click()
  })

  And('user enters username and password', () => {
    
    //get() is used to find element.
    //Find username and type 'manager'
    //type is used to type in input box
    cy.get('#UserName').type('manager')
    // driver.findElement(By.cssLocator('#UserName')).sendKeys('manager')

    //Find password and type 'Manager2!'
    cy.get('#Password').type('Manager2!')
  })

  And('clicks on click button', () => {
    cy.get('#btnSubmit').click()
  })