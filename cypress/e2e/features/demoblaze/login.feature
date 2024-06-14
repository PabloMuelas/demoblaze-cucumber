@regression @smoke
Feature: Login user

  Background:
    Given the user navigates to DemoBlaze
  
  @loginAdmin
  Scenario: Login with the admin account
    When the user clicks on the log in button
    And the user enters the admin credentials in the log in modal
    And the user clicks on the log in modal button
    Then the sign up and login button disappear

  @loginErrorUsername
  Scenario: Validate that the user can't sign up without typing a username
    When the user clicks on the log in button
    And the user types a password in the log in modal
    And the user clicks on the log in modal button
    Then the message "Please fill out Username and Password" appears on the screen

  @loginErrorPassword
  Scenario: Validate that the user can't sign up without typing a password
    When the user clicks on the log in button
    And the user types a username in the log in modal
    And the user clicks on the log in modal button
    Then the message "Please fill out Username and Password" appears on the screen

  @loginErrorNoCred
  Scenario: Validate that the user can't sign up without typing any credentials
    When the user clicks on the log in button
    And the user clicks on the log in modal button
    Then the message "Please fill out Username and Password" appears on the screen
  
  @loginErrorNoUserExist
  Scenario: Validate that a non existent user can't log in
    When the user clicks on the log in button
    And the user types "nonExistentUserHere" in the field Username in the log in modal
    And the user types "pass" in the field Password in the log in modal
    And the user clicks on the log in modal button
    Then the message "User does not exist." appears on the screen

  @loginUserLogout
  Scenario: Validate that a user can log out
    Given the user is logged in
    When the user clicks on the log out button
    Then the log in button is visible
