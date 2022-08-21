$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/LoginTest.feature");
formatter.feature({
  "name": "Test Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verificando de login con credenciales validas",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "name": "Abrimos el navegador Chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginTestSteps.abrimos_el_navegador_Chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usurio ve a la ventana Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginTestSteps.el_usurio_ve_a_la_ventana_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Se ingresa el usuario y contrasena",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginTestSteps.se_ingresa_el_usuario_y_contrase_a()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hace click en el boton",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginTestSteps.hace_click_en_el_boton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "EL usuario navega por la pagina principal",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginTestSteps.el_usuario_navega_por_la_pagina_principal()"
});
formatter.result({
  "status": "passed"
});
});