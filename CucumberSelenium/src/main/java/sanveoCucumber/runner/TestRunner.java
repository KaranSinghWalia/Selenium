package sanveoCucumber.runner;

import com.vimalselvam.cucumber.listener.Reporter;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import java.io.File;

@RunWith(Cucumber.class)
@CucumberOptions(
			features = "D:\\various\\eclipse-workspace\\CucumberSelenium\\src\\main\\java\\sanveoCucumber\\features\\LoginPage.feature",
			glue = {"sanveoCucumber/stepDefinitions", "sanveoCucumber/stepDefinitions/hooks"}, //the path of the step definition files
			plugin = {"pretty","html:test-output", "com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:Reports/ExtentReport.html", "json:test-output/json_output/cucumber.json", "junit:test-output/junit_xml/cucumber.xml"}, //to generate different types of reporting
			monochrome = true, //display the console output in a proper readable format
			dryRun = false //to check the mapping is proper between feature file and step def file
			)

public class TestRunner //extends AbstractTestNGCucumberTests {
{
	@AfterClass
	public static void setup()
	{
		Reporter.loadXMLConfig(new File("src/test/resource/extent-config.xml"));
		Reporter.setSystemInfo("Test User", System.getProperty("user.name"));
		Reporter.setSystemInfo("User Name", "Karan");
		Reporter.setSystemInfo("Application Name", "Test App ");
		Reporter.setSystemInfo("Operating System Type", System.getProperty("os.name").toString());
		Reporter.setSystemInfo("Environment", "Production");
		Reporter.setSystemInfo("Browser", "Chrome");
		Reporter.setTestRunnerOutput("Test Execution Cucumber Report");

	}

}
