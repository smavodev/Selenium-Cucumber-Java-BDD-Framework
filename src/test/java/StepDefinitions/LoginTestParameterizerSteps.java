package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
// import org.openqa.selenium.firefox.FirefoxDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginTestParameterizerSteps {

	WebDriver driver = null;
	
	@Given("Abrimos el navegador Firefox") 
	public void abrimos_el_navegador_Firefox() {
		//System.setProperty("webdriver.gecko.driver", "./src/test/resources/drivers/firefox/geckodriver_0.31.0.exe");
		System.setProperty("webdriver.chrome.driver", "./src/test/resources/drivers/chrome/chromedriver_104.0.5112.81.exe");
		//driver = new FirefoxDriver();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@And("El usurio se dirige a la ventana Login") 
	public void el_usurio_se_dirige_a_la_ventana_Login() {
		driver.navigate().to("https://example.testproject.io/web/");
	}

	@When("^El usuario ingresa (.*) y (.*)$")
	public void el_usuario_ingresa_el_username_y_password(String username, String password) throws InterruptedException {
		driver.findElement(By.id("name")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);
		Thread.sleep(3000);
	}

	@And("hace click en el boton login")
	public void hace_click_en_el_boton_login() {
		driver.findElement(By.id("login")).click();
	}

	@Then("EL usuario navega por la pagina")
	public void el_usuario_navega_por_la_pagina() throws InterruptedException {
		driver.findElement(By.id("logout")).isDisplayed();
		Thread.sleep(3000);
		driver.close();
		driver.quit();
	}

}
