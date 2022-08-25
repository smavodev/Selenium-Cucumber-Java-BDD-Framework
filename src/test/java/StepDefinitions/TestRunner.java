package StepDefinitions;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features",  
		glue={"StepDefinitions"},
		monochrome = true,
		// plugin = {"pretty","html:target/HtmlReports", "json:target/JsonReports/report.json", "junit:target/JUnitReports/report.xml"}, 
		plugin = {"pretty","json:target/cucumber.json"}, 
		tags="@smokeTest", 
		strict = true)

public class TestRunner {

}
