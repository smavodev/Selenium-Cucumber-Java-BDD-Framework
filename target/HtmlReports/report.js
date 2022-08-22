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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "use enters a text in search box",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "hits enter",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is navigated to search results",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/resources/Features/LoginTest.feature");
formatter.feature({
  "name": "Test Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Accediendo al login con credenciales validas",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "El usurio ve a la ventana Login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Se ingresa el usuario y contrasena",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "hace click en el boton",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "EL usuario navega por la pagina principal",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "El usuario ingresa \u003cusername\u003e y \u003cpassword\u003e",
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
        "Eduardo",
        "12345"
      ]
    },
    {
      "cells": [
        "Diego",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "El usurio se dirige a la ventana Login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "El usuario ingresa Eduardo y 12345",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "hace click en el boton login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "EL usuario navega por la pagina",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "El usurio se dirige a la ventana Login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "El usuario ingresa Diego y 12345",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "hace click en el boton login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "EL usuario navega por la pagina",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/resources/Features/LoginTest_FC.feature");
formatter.feature({
  "name": "Prueba de Funcionalidad de Login Successfull",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Acceso al login con credenciales validas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "name": "Abrimos el navegador web",
  "keyword": "Given "
});
formatter.step({
  "name": "Nos dirigimos al Login del sistema",
  "keyword": "And "
});
formatter.step({
  "name": "Accedemos con el \u003cuser\u003e y \u003cpasswd\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Hacemos click en el boton login",
  "keyword": "And "
});
formatter.step({
  "name": "El usuario navega en la pagina de registro",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "passwd"
      ]
    },
    {
      "cells": [
        "Yadira",
        "12345"
      ]
    },
    {
      "cells": [
        "Santiago",
        "12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Acceso al login con credenciales validas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "name": "Abrimos el navegador web",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Nos dirigimos al Login del sistema",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Accedemos con el Yadira y 12345",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Hacemos click en el boton login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "El usuario navega en la pagina de registro",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Acceso al login con credenciales validas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "name": "Abrimos el navegador web",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Nos dirigimos al Login del sistema",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Accedemos con el Santiago y 12345",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Hacemos click en el boton login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "El usuario navega en la pagina de registro",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/resources/Features/LoginTest_POM.feature");
formatter.feature({
  "name": "Prueba de Funcionalidad de Login Successfull",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verificando el acceso al login con credenciales validas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "name": "Se abre el navegador web",
  "keyword": "Given "
});
formatter.step({
  "name": "El usuario va a la ventana Login",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresamos el \u003cusuario\u003e y \u003ccontrasenia\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "click en el boton login",
  "keyword": "And "
});
formatter.step({
  "name": "EL usuario navega por la pagina TestProject Example page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "usuario",
        "contrasenia"
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
  "name": "Verificando el acceso al login con credenciales validas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "name": "Se abre el navegador web",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "El usuario va a la ventana Login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Ingresamos el Sergio y 12345",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click en el boton login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "EL usuario navega por la pagina TestProject Example page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Verificando el acceso al login con credenciales validas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "name": "Se abre el navegador web",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "El usuario va a la ventana Login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Ingresamos el Martin y 12345",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click en el boton login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "EL usuario navega por la pagina TestProject Example page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});