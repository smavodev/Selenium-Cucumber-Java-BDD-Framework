Feature: Prueba de Funcionalidad de Login

  @smokeTest
  Scenario Outline: Verificando el acceso al login con las credenciales
    Given Abrimos el navegador Firefox
    And El usurio se dirige a la ventana Login
    When El usuario ingresa <username> y <password>
    And hace click en el boton login
    Then EL usuario navega por la pagina

    Examples: 
      | username | password |
      | Eduardo  |    12345 |
      | Diego    |    12345 |
