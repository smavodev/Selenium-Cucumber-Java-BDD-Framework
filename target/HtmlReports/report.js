$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureWithTags/SampleTest.feature");
formatter.feature({
  "name": "Feature to demo Tags",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Prueba3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regresion"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Vamos al link",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.SampleTestTags.vamos_al_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ingresamos datos",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.SampleTestTags.ingresamos_datos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nos muestra resultados",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SampleTestTags.nos_muestra_resultados()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Prueba4",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@important"
    }
  ]
});
formatter.step({
  "name": "Vamos al link",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.SampleTestTags.vamos_al_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ingresamos datos",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.SampleTestTags.ingresamos_datos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nos muestra resultados",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SampleTestTags.nos_muestra_resultados()"
});
formatter.result({
  "status": "passed"
});
});