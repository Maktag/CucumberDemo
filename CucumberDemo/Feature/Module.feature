#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios 
#<> (placeholder)
#""
## (Comments)

Feature: Facebook Login Functionality
	I want to use this template for my feature file(Optional)

Scenario Outline: Login with Valid Username & Password
Given I am on login screen of Facebook
When I enter <username> & <password>
And I click on Login button
Then I should redirect to home
Examples:
    | username  |password |
    | name1 |  5   |