$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Hooks/HooksTest.feature");
formatter.feature({
  "name": "Check login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Acceso a la web",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@important"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "el usuario se dirige al inicio de Sesion",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsHooks.HooksTest.el_usuario_se_dirige_al_inicio_de_Sesion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresa sus credenciales validas",
  "keyword": "When "
});
formatter.match({
  "location": "StepsHooks.HooksTest.ingresa_sus_credenciales_validas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hace click al boton de login",
  "keyword": "And "
});
formatter.match({
  "location": "StepsHooks.HooksTest.hace_click_al_boton_de_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ingresa a la parte privada de la pagina",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsHooks.HooksTest.ingresa_a_la_parte_privada_de_la_pagina()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});