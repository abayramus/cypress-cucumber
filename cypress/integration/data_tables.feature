Feature: search for multiple data
#  create ff
#  generate step defs
#  write the java code
#  London, Paris, Vienna, Berlin, Madrid
@managerid
 Scenario: searching the worlds capital
    Given user in on the application page
    And user login with below data
    |username   |pasword|
    |manager    |Manager1!  |
    And clicks on login button
    Then verify default page is displayed
@manager2id
     Scenario: searching the worlds capital
    Given user in on the application page
    And user login with below data
    |username   |pasword|
    |manager2    |Manager2!  |
    And clicks on login button
    Then verify default page is displayed