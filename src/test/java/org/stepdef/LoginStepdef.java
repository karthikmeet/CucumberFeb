package org.stepdef;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.pagerepo.LoginPageRepo;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class LoginStepdef {
	@Given("Launch an application")
	public void launch_an_application(DataTable table) {
		Hook.driver.get("https://www.facebook.com/");
		// AS MAPS
		List<Map<String, String>> asMaps = table.asMaps();
		System.out.println(asMaps);
		System.out.println(asMaps.get(1).get("SNo"));
		System.out.println(asMaps.get(1).get("Username"));
	}

	@When("Enter login credentials")
	public void enter_login_credentials() {
		LoginPageRepo repo = new LoginPageRepo();
		Hook.type(repo.getUsername(), "Guru");
		Hook.type(repo.getPassword(), "Pwd");
		// Assert.assertTrue(false);
	}

	@And("statement1")
	public void and() {
		System.out.println("AND statement");
	}

	@But("statement2")
	public void but() {
		System.out.println("BUT statement");
	}

	@When("Enter username as {string} and password as {string}")
	public void xxxxxxxxxxxxxx(String username, String password) {
		LoginPageRepo repo = new LoginPageRepo();
		Hook.type(repo.getUsername(), username);
		Hook.type(repo.getPassword(), password);
	}

	@Then("I validate the outcomes")
	public void i_validate_the_outcomes() {
		System.out.println("Test successful");
	}
}

//	ASLIST		
//List<String> asList = table.asList();
//System.out.println(asList.get(0));
//System.out.println(asList.get(1));
//System.out.println(asList.get(2));

// ASLISTS
//List<List<String>> asLists = table.asLists();
//
//System.out.println(asLists.get(0));
//
//System.out.println(asLists.get(0).get(0));
//System.out.println(asLists.get(0).get(1));
//System.out.println(asLists.get(0).get(2));

// ASMAP
//Map<String,String> asMap = table.asMap(String.class, String.class);
//System.out.println(asMap);