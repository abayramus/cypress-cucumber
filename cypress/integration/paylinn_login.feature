Feature: Login Functionality

  Scenario: TC01_login
    Given user in on the application page
    And clicks on login link
    And user enters username and password
    And clicks on login button
    Then verify default page is displayed