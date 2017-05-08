package com.demo.cucumber.CucumberDemo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class StepDefinition 
	{
	
		@Given("^I am on login screen of Facebook$")
		public void I_am_on_login_screen_of_Facebook()
			{
				System.out.println("I am on login screen of Facebook");		
			}
		
		@When("^I enter name(\\d+) & (\\d+)$")
		public void i_enter_name(int arg1, int arg2) 
			{
				System.out.println("I enter name(\\d+) & (\\d+)");
			}

		@When("^I click on Login button$")
		public void i_click_on_Login_button()
			{
				System.out.println("I click on Login button");
			}

		@Then("^I should redirect to home$")
		public void i_should_redirect_to_home() 
			{
				System.out.println("I should redirect to home");
			}

		
	}
