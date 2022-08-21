Feature: Prueba de Funcionalidad de Login Successfull

 @smokeTest
  Scenario Outline: Verificando el acceso al login con credenciales validas
    Given Se abre el navegador web
    And El usuario va a la ventana Login
    When Ingresamos el <usuario> y <contrasenia>
    And click en el boton login 
    Then EL usuario navega por la pagina TestProject Example page
    Examples:
    |usuario|contrasenia|
    | Sergio | 12345 |
    | Martin | 12345 |
    