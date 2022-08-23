package StepsHooks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class HooksTest {

	WebDriver driver = null;
	
	@Before
	public void browserSetup() {
		System.setProperty("webdriver.chrome.driver", "./src/test/resources/drivers/chrome/chromedriver_104.0.5112.81.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	@After
	public void tearDown() throws InterruptedException {
		Thread.sleep(3000);
		driver.close();
		driver.quit();
	}

	@Given("el usuario se dirige al inicio de Sesion")
	public void el_usuario_se_dirige_al_inicio_de_Sesion() {
		driver.navigate().to("https://example.testproject.io/web/");
	}

	@When("Ingresa sus credenciales validas")
	public void ingresa_sus_credenciales_validas() {


	}

	@And("hace click al boton de login")
	public void hace_click_al_boton_de_login() {


	}

	@Then("ingresa a la parte privada de la pagina")
	public void ingresa_a_la_parte_privada_de_la_pagina() {


	}

}
