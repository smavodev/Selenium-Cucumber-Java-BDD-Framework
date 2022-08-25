
# Selenium Cucumber Java BDD Framework - Setup

## Dependencies: Cucumber Java | Cucumber JUnit | JUnit | Selenium Java 

- https://mvnrepository.com/artifact/io.cucumber/cucumber-java/5.7.0
- https://mvnrepository.com/artifact/junit/junit/4.13
- https://mvnrepository.com/artifact/io.cucumber/cucumber-junit/5.7.0

## Semantic Commit Messages: 
- https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716

## Git Log console 
```
git log --pretty=oneline --abbrev-commit --graph --color
git log --all --decorate --oneline --graph
git log --graph --abbrev-commit --decorate --date=relative --all
```

========================================================================================================

# 1 Setup

- Step 1 - Create a new maven project
- Step 2 - Add maven dependencies Cucumber Java | Cucumber JUnit | JUnit | Selenium Java.
- Step 3 - Create a folder Features under src/test/resources
- Step 4 - Under features folder create a new feature file login.feature
- Step 5 - Download cucumber plugin from Eclipse Marketplace
- Step 6 - Create feature file and add contents
- Step 7 - Try to run the feature file
- Step 8 - Add Step Definitions / Glue Code under src/test/java package
- Step 9 - Create a Runner class
- Step 10 - Create Add Cucumber Options for generating reports - **HTML | JSON | JUNIT/XML**    
- Step 11 - Run and verify results

========================================================================================================
  
# 2 Fisrt Selenium Test

- Step 1 - Add Selenium Java maven dependency
- Step 2 - Create a feature file and add Scenario and Steps
- Step 3 - Create Step Definition/Glue Code for the steps
- Step 4 - Download browser driver files 
- Step 5 - Add Selenium WebDriver code
- Step 6 - Run Feature file and check the execution
 
- https://mvnrepository.com/artifact/org.seleniumhq.selenium/selenium-java
- https://chromedriver.chromium.org/downloads

========================================================================================================

## 3 Sample Login Test

- Step 1 - Check the scenario/navigation
- Step 2 - Create a feature file and add Scenario and Steps
- Step 3 - Create Step Definition/Glue Code for the steps
- Step 4 - Add Selenium WebDriver code
- Step 5 - Run Feature file and check the execution

========================================================================================================

## 4 Parameterization & Data Driven Testing

- Step 1 - In the feature file select the values that need to be parameterized
- Step 2 - Put the values within conical brackets or double quotes (Parameterization)
- Step 3 - Change Scenario to Scenario Outline
- Step 4 - Add Examples section
- Step 5 - Add data for the parameters in the Examples section
- Step 6 - Update step definition to get values from feature file Examples section
- Step 7 - Run and verify

========================================================================================================

## 5 Page Object Model 

- Step 1 - Create a class for each page
- Step 2 - Create locators of all objects to be used in that page
- Step 3 - Create methods or actions to be performed on the objects
- Step 4 - Refer in the test scripts
- Step 5 - Run and validate

========================================================================================================

## 6 Page Factory

- Step 1 - Create a class for each page
- Step 2 - Create locators of all objects to be used in that page using **@FindBy**
- Step 3 - Create methods or actions to be performed on the objects
- Step 4 - Create constructor to get driver instance and initialize Elements using method initElements
- Step 5 - Update Test Scripts to refer methods from PageFactory class
- Step 6 - Run and validate

========================================================================================================

## 7 Tags

- Step 1 - Create a new or use an existing Feature File
- Step 2 - Mark the feature and scenarios with Tags : @TagName
- Step 3 - Create new or use an existing TestRunner class
- Step 4 - Add the tags in CucumberOptions section
 -Step 5 - Run test runner class with different combination of tags

========================================================================================================

## 8 Hooks - How to use HOOKS

- Step 1 - Create a new or use an existing Feature File
- Step 2 - Create the steps for the scenario in the feature file
- Step 3 - Create setup and teardown methods and mark with annotation **@Before | @After | @BeforeSteps | @AfterSteps |**
- Step 4 - Create new or use an existing TestRunner class
- Step 5 - Run the TestRunner class and check execution

========================================================================================================

## 9 Background

- Step 1 - Create a new or use an existing Feature File
- Step 2 - Create the steps for the scenario in the feature file
- Step 3 - Create new or use an existing TestRunner class
- Step 4 - Run the test runner file
- Step 5 - Create a background section and add common steps
- Step 6 - Run the test runner file and check execution of the background

========================================================================================================

## 10 - How to run from CommandLine

- Step 1 - Right-click on the project and select Run As - Maven test
- Step 2 - Check the console logs
- Step 3 - Troubleshoot and correct the errors
- Step 4 - Open CMD prompt
- Step 5 - Check MAVEN is installed   mvn -version
- Step 6 - CD to the project location
- Step 7 -  Run command  mvn test


**Overriding Cucumber Options from Command Line:**

```
mvn test
mvn test -Dcucumber.options=”Your Options”
mvn test -Dcucumber.options=”--help”

```

**Run specific feature :**

```
mvn test -Dcucumber.options="src/test/resources/Features/LoginTest.feature" 
```

**Run specific scenario :**

```
mvn test -Dcucumber.options="feature file path:7"
mvn test -Dcucumber.options="src\test\resources\Features\GoogleSerach.feature:4"
```
 
**Run with Tags :** 

```
mvn test -Dcucumber.options="--tags @smokeTest"
```


**Reports :**

```
mvn test -Dcucumber.options=”--plugin html:target/HtmlReports”
```

**Running with multiple parameters**
**Can run with multiple parameters from command line**

```
mvn test -Dcucumber.options="----"  -Dcucumber.options="----" 
```

**example**

```
mvn test 
-Dcucumber.options="src/test/resources/login.feature"  -Dcucumber.options="--tags @Smoke" 
```

========================================================================================================

## 11 - How To Create HTML Reports

- Step 1 : Add the maven cucumber reporting dependency in pom.xml
- Step 2 : Add the build plugins in pom.xml
- Step 3 : Clean project
- Step 4 : From command line run - mvn test
- Step 5 : From command line run - mvn verify
- Step 6 : Check report generated

**References:**
**Maven Repository** - https://mvnrepository.com/artifact/net.masterthought/cucumber-reporting
**GitHub** - https://github.com/damianszczepanik/maven-cucumber-reporting
**StackOverflow** - https://stackoverflow.com/questions/51257224/maven-cucumber-reporting-plugin-is-not-generating-the-report-nothing-happens


- running mvn clean test will generate the Cucumber report file

target/cucumber.json
- running mvn verify -DskipTests will generate the cucumber-report-html based on the cucumber.json

target/cucumber-report-html/cucumber-html-reports/src-test-resource-features-demo-feature.html
target/cucumber-report-html/cucumber-html-reports/...

- running mvn clean verify will do all together
