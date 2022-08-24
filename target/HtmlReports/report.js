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
});cation": "StepsBackground.Background.proceso_numero5()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Proceso numero1",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsBackground.Background.proceso_numero1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Proceso numero3",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsBackground.Background.proceso_numero3()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ejemplo3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@testing"
    }
  ]
});
formatter.step({
  "name": "Proceso numero8",
  "keyword": "When "
});
formatter.match({
  "location": "StepsBackground.Background.proceso_numero8()"
});
formatter.result({
  "status": "passed"
});
});ce_click_en_el_boton()"
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
  "name": "El usuario ingresa Eduardo y 12345",
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
  "name": "El usuario ingresa Diego y 12345",
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
formatter.match({
  "location": "StepDefinitions.LoginTest_FC.abrimos_el_navegador_web()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nos dirigimos al Login del sistema",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginTest_FC.nos_dirigimos_al_Login_del_sistema()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Accedemos con el Yadira y 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginTest_FC.accedemos_con_el_user_y_contra(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hacemos click en el boton login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginTest_FC.hacemos_click_en_el_boton_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usuario navega en la pagina de registro",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginTest_FC.el_usuario_navega_en_la_pagina_de_registro()"
});
formatter.result({
  "status": "passed"
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
formatter.match({
  "location": "StepDefinitions.LoginTest_FC.abrimos_el_navegador_web()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nos dirigimos al Login del sistema",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginTest_FC.nos_dirigimos_al_Login_del_sistema()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Accedemos con el Santiago y 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginTest_FC.accedemos_con_el_user_y_contra(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hacemos click en el boton login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginTest_FC.hacemos_click_en_el_boton_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usuario navega en la pagina de registro",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginTest_FC.el_usuario_navega_en_la_pagina_de_registro()"
});
formatter.result({
  "status": "passed"
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
formatter.match({
  "location": "StepDefinitions.LoginTest_POM.se_abre_el_navegador_web()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usuario va a la ventana Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginTest_POM.el_usurio_va_a_la_ventana_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresamos el Sergio y 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginTest_POM.Ingresamos_el_usuario_y_contrasenia(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click en el boton login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginTest_POM.click_en_el_boton_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "EL usuario navega por la pagina TestProject Example page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginTest_POM.el_usuario_navega_por_la_pagina_TestProject_Example_page()"
});
formatter.result({
  "status": "passed"
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
formatter.match({
  "location": "StepDefinitions.LoginTest_POM.se_abre_el_navegador_web()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usuario va a la ventana Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginTest_POM.el_usurio_va_a_la_ventana_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresamos el Martin y 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginTest_POM.Ingresamos_el_usuario_y_contrasenia(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click en el boton login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginTest_POM.click_en_el_boton_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "EL usuario navega por la pagina TestProject Example page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginTest_POM.el_usuario_navega_por_la_pagina_TestProject_Example_page()"
});
formatter.result({
  "status": "passed"
});
});