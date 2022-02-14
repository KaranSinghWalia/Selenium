package sanveoCucumber.stepDefinitions;

import com.sanveo.SanveoBase;
import com.vimalselvam.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import sanveo.util.TestUtil;

import java.io.IOException;

public class hooks extends SanveoBase {
    @Before
    public void setup() {
        initialization();
    }

    @After(order = 1)
    public void afterScenario(Scenario scenario) throws IOException {
        String screenshotName = scenario.getName().replace("_", " ");
        if(scenario.isFailed()) {
            Reporter.addScreenCaptureFromPath(TestUtil.takeScreenshotAtEndOfTest(screenshotName));
        }
    }

    @After(order = 0)
    public void AfterSteps() {
        driver.quit();
    }
}
