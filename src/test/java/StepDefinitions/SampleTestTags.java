package StepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SampleTestTags {

	@Given("Vamos al link")
	public void vamos_al_link() {
		System.out.println("Vamos al link");
	}

	@When("ingresamos datos")
	public void ingresamos_datos() {
		System.out.println("Ingresamos datos");
	}

	@Then("nos muestra resultados")
	public void nos_muestra_resultados() {
		System.out.println("Nos muestra los resultados");
	}
	
}
