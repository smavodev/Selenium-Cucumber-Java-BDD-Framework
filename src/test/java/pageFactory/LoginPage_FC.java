package pageFactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage_FC {

	@FindBy(id="name")
	WebElement txt_username;
	
	@FindBy(id="password")
	WebElement txt_password;
	
	@FindBy(id="login")
	WebElement btn_login;
	
	WebDriver driver;
	
	public LoginPage_FC(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		// PageFactory.initElements(driver, LoginPage_FC.class);
	}
	
	public void Username(String user) {
		txt_username.sendKeys(user);
	}
	
	public void Password(String passwd) {
		txt_password.sendKeys(passwd);
	}
	
	public void ClickOnLogin() {
		btn_login.click();
	}
	
}
