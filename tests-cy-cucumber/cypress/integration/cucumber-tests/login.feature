Feature: Login to Application

  As a valid user 
  I want to log in into Application

  Scenario: Valid Login
    Given I open login page 
     When I subimit login 
     Then I should see homepage

