package StepDefinitions;

// import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageFactory.HomePage_PF;
import pageFactory.LoginPage_FC;



public class LoginTest_FC {

	WebDriver driver = null;
	LoginPage_FC login;
	HomePage_PF home;

	@Given("Abrimos el navegador web")
	public void abrimos_el_navegador_web() {
		//System.setProperty("webdriver.gecko.driver", "./src/test/resources/drivers/firefox/geckodriver_0.31.0.exe");
		System.setProperty("webdriver.chrome.driver", "./src/test/resources/drivers/chrome/chromedriver_104.0.5112.81.exe");
		//driver = new FirefoxDriver();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@And("Nos dirigimos al Login del sistema")
	public void nos_dirigimos_al_Login_del_sistema()  {
		driver.navigate().to("https://example.testproject.io/web/");
	}

	@When("^Accedemos con el (.*) y (.*)$")
	public void accedemos_con_el_user_y_contra(String user, String passwd) throws InterruptedException {

		login = new LoginPage_FC(driver);

		login.Username(user);
		login.Password(passwd);
		Thread.sleep(3000);
	}

	@And("Hacemos click en el boton login")
	public void hacemos_click_en_el_boton_login() {
		login.ClickOnLogin();
	}

	@Then("El usuario navega en la pagina de registro")
	public void el_usuario_navega_en_la_pagina_de_registro() throws InterruptedException {

		home = new  HomePage_PF(driver);
		home.LogoutIsDisplayed();
		Thread.sleep(3000);
		driver.close();
		driver.quit();
	}

}
