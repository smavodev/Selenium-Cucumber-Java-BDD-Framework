package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class loginPage {
	
	protected WebDriver driver;
	
	private By txt_username = By.id("name");
	private By txt_password = By.id("password");
	private By btn_login = By.id("login");
	private By btn_logout = By.id("logout");
	
	public loginPage(WebDriver driver) {
		this.driver = driver;
		// if (!driver.getTitle().equals("TestProject Demo")) {
		// 	throw new IllegalStateException("This is not Login Page. The Current page is"+driver.getCurrentUrl());
		// }
	}

	public void enterUsername(String usuario) {
		driver.findElement(txt_username).sendKeys(usuario);
	}
	
	public void enterPassword(String contrasenia) {
		driver.findElement(txt_password).sendKeys(contrasenia);
	}
	
	public void enterLogin() {
		driver.findElement(btn_login).click();
	}
	
	public void checkLogoutIsDisplayed() {
		driver.findElement(btn_logout).isDisplayed();
	}
	
	
//	public void loginValidUser(String username, String password) {
//		driver.findElement(txt_username).sendKeys(username);
//		driver.findElement(txt_password).sendKeys(password);
//		driver.findElement(btn_login).click();
//		driver.findElement(btn_logout).isDisplayed();
//	}
	
}
