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
  "location": "StepDefinitions.LoginTestSteps.se_ingresa_el_usuario_y_contrasena()"
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
formatter.uri("file:src/test/resources/Features/LoginTestParameterizer.feature");
formatter.feature({
  "name": "Prueba de Funcionalidad de Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verificando el acceso al login con las credenciales",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "name": "Abrimos el navegador Firefox",
  "keyword": "Given "
});
formatter.step({
  "name": "El usurio se dirige a la ventana Login",
  "keyword": "And "
});
formatter.step({
  "name": "El usuario ingresa el \u003cusername\u003e y \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "hace click en el boton login",
  "keyword": "And "
});
formatter.step({
  "name": "EL usuario navega por la pagina",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Sergio",
        "12345"
      ]
    },
    {
      "cells": [
        "Martin",
        "12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verificando el acceso al login con las credenciales",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "name": "Abrimos el navegador Firefox",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginTestParameterizerSteps.abrimos_el_navegador_Firefox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usurio se dirige a la ventana Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginTestParameterizerSteps.el_usurio_se_dirige_a_la_ventana_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usuario ingresa el Sergio y 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginTestParameterizerSteps.el_usuario_ingresa_el_username_y_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hace click en el boton login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginTestParameterizerSteps.hace_click_en_el_boton_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "EL usuario navega por la pagina",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginTestParameterizerSteps.el_usuario_navega_por_la_pagina()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verificando el acceso al login con las credenciales",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "name": "Abrimos el navegador Firefox",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginTestParameterizerSteps.abrimos_el_navegador_Firefox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usurio se dirige a la ventana Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginTestParameterizerSteps.el_usurio_se_dirige_a_la_ventana_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usuario ingresa el Martin y 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginTestParameterizerSteps.el_usuario_ingresa_el_username_y_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hace click en el boton login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginTestParameterizerSteps.hace_click_en_el_boton_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "EL usuario navega por la pagina",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginTestParameterizerSteps.el_usuario_navega_por_la_pagina()"
});
formatter.result({
  "status": "passed"
});
});