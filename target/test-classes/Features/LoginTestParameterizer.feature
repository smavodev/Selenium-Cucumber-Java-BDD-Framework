Feature: Prueba de Funcionalidad de Login

  @smokeTest
  Scenario Outline: Verificando el acceso al login con las credenciales
    Given Abrimos el navegador Firefox
    And El usurio se dirige a la ventana Login
    When El usuario ingresa el <username> y <password>
    And hace click en el boton login
    Then EL usuario navega por la pagina
    Examples:
    |username|password|
    | Sergio | 12345 |
    | Martin | 12345 |
    