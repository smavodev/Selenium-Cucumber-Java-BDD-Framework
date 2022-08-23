package StepDefinitions;

// import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
// import org.openqa.selenium.firefox.FirefoxDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.loginPage;



public class LoginTest_POM {

	WebDriver driver = null;
	
	loginPage login;
	
	@Given("Se abre el navegador web")
	public void se_abre_el_navegador_web() {
		//System.setProperty("webdriver.gecko.driver", "./src/test/resources/drivers/firefox/geckodriver_0.31.0.exe");
		System.setProperty("webdriver.chrome.driver", "./src/test/resources/drivers/chrome/chromedriver_104.0.5112.81.exe");
		//driver = new FirefoxDriver();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@And("El usuario va a la ventana Login")
	public void el_usurio_va_a_la_ventana_Login() {
		driver.navigate().to("https://example.testproject.io/web/");
	}

	@When("^Ingresamos el (.*) y (.*)$")
	public void Ingresamos_el_usuario_y_contrasenia(String usuario, String contrasenia) throws InterruptedException {
		
		login = new loginPage(driver);
		login.enterUsername(usuario);
		login.enterPassword(contrasenia);
		// driver.findElement(By.id("name")).sendKeys(usuario);
		// driver.findElement(By.id("password")).sendKeys(contrasenia);
		Thread.sleep(3000);
		
	}

	@And("click en el boton login")
	public void click_en_el_boton_login() {
		login.enterLogin();
		// driver.findElement(By.id("login")).click();
	}

	@Then("EL usuario navega por la pagina TestProject Example page")
	public void el_usuario_navega_por_la_pagina_TestProject_Example_page() throws InterruptedException {
		login.checkLogoutIsDisplayed();
		// driver.findElement(By.id("logout")).isDisplayed();
		Thread.sleep(3000);
		driver.close();
		driver.quit();
	}

}
