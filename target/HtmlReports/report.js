$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/GoogleSerach.feature");
formatter.feature({
  "name": "feature to test google search functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate google search is working",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps.user_is_on_google_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "use enters a text in search box",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps.use_enters_a_text_in_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hits enter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps.hits_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to search results",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps.user_is_navigated_to_search_results()"
});
formatter.result({
  "status": "passed"
});
});