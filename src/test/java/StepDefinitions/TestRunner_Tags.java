package StepDefinitions;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/FeatureWithTags",  
		glue={"StepDefinitions"},
		monochrome = true,
		plugin = {"pretty","html:target/HtmlReports", "json:target/JsonReports/report.json", "junit:target/JUnitReports/report.xml"}, 
		tags="@regresion and @smoke or @important", 
		strict = true)

public class TestRunner_Tags {

}
