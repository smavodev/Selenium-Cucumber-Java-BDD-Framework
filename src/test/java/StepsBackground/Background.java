package StepsBackground;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Background {
		
	@Given("Proceso numero1")
	public void proceso_numero1() {
	  System.out.println("Proceso numero1");
	}

	@Then("Proceso numero3")
	public void proceso_numero3() {
		 System.out.println("Proceso numero3");
	}

	@When("Proceso numero2")
	public void proceso_numero2() {
		 System.out.println("Proceso numero2");
	}

	@When("Proceso numero5")
	public void proceso_numero5() {
		 System.out.println("Proceso numero5");
	}
	
	@When("Proceso numero8")
	public void proceso_numero8() {
		System.out.println("Proceso numero8");
	}

}
