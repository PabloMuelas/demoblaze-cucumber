@regression
Feature: Sign Up user

  Background:
    Given the user navigates to DemoBlaze

  @signUpNew
  Scenario: Create a new user and login with the account
    When the user clicks on the sign up button
    And the user enters valid credentials
    And the user clicks on the sign up modal button
    Then the message "Sign up successful." appears on the screen
    When the user clicks on the log in button
    And the user enters the log in credentials
    And the user clicks on the log in modal button
    Then the sign up and login button disappear

  @signUpErrorUsername
  Scenario: Validate that the user can't sign up without typing a username
    When the user clicks on the sign up button
    And the user types a password
    And the user clicks on the sign up modal button
    Then the message "Please fill out Username and Password" appears on the screen

  @signUpErrorPassword
  Scenario: Validate that the user can't sign up without typing a password
    When the user clicks on the sign up button
    And the user types a username
    And the user clicks on the sign up modal button
    Then the message "Please fill out Username and Password" appears on the screen

  @signUpErrorNoCred
  Scenario: Validate that the user can't sign up without typing any credentials
    When the user clicks on the sign up button
    And the user clicks on the sign up modal button
    Then the message "Please fill out Username and Password" appears on the screen
  
  @signUpErrorUserExists
  Scenario: Validate that a user can't sign up with an already created user
    When the user clicks on the sign up button
    And the user enters the admin credentials in the sign up modal
    And the user clicks on the sign up modal button
    Then the message "This user already exist." appears on the screen
  