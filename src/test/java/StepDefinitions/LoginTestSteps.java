package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginTestSteps {
	
	WebDriver driver = null;

	@Given("Abrimos el navegador Chrome") 
	public void abrimos_el_navegador_Chrome() {
		System.setProperty("webdriver.chrome.driver", "./src/test/resources/drivers/chrome/chromedriver_104.0.5112.81.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@And("El usurio ve a la ventana Login")
	public void el_usurio_ve_a_la_ventana_Login() {
		driver.navigate().to("https://example.testproject.io/web/");
	}

	@When("^Se ingresa el usuario y contrasena$")
	public void se_ingresa_el_usuario_y_contrasena() {
		driver.findElement(By.id("name")).sendKeys("Sergio");
		driver.findElement(By.id("password")).sendKeys("12345");
	}
	
	@When("hace click en el boton")
	public void hace_click_en_el_boton() {
		driver.findElement(By.id("login")).click();
	}

	@Then("EL usuario navega por la pagina principal")
	public void el_usuario_navega_por_la_pagina_principal() throws InterruptedException {
		driver.findElement(By.id("logout")).isDisplayed();
		Thread.sleep(3000);
		driver.close();
		driver.quit();
	}

}
