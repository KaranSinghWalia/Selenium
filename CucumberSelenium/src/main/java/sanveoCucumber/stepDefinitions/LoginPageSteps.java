package sanveoCucumber.stepDefinitions;

import com.sanveo.SanveoBase;;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.json.simple.parser.ParseException;
import sanveo.pages.LoginPage;
import sanveo.util.TestUtil;

import java.io.IOException;


public class LoginPageSteps extends SanveoBase {
	
	LoginPage loginPage = new LoginPage();





	@Given("^URL of the application should be open\\.$")
	public void url_of_the_application_should_be_open() throws Throwable {
		TestUtil.readJsonConfiguration("production", "username");
	}

	@When("^The user navigates to the login page\\.$")
	public void the_user_navigates_to_the_login_page() throws Throwable {
	}

	@Then("^The user enters his credentials username - \"([^\"]*)\" and Password - \"([^\"]*)\"$")
	public void the_user_enters_his_credentials_username_and_Password(String arg1, String arg2) throws IOException, ParseException {
		loginPage.LoginPage(arg1);
	}

	@Then("^The user should be logged in\\.$")
	public void the_user_should_be_logged_in() throws Throwable {

	}
}
