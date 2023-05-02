  Feature: Login Feature 

    Feature This feature is required for a user to log in

    Scenario: Sucess Login
    Given A user opens the login page
     When A user enter the username "standard_user"
     And A user enter the password "secret_sauce"
     And A user clicks on the login button 
     Then A user will be logged in 

    Scenario: Failed login
    Given A user opens the login page
     When A user enter the username "locked_out_user"
     And A user enter the password "secret_sauce"
     And A user clicks on the login button 
     Then A user will be receiving a failed message

