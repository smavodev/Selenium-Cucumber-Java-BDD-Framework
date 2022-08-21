Feature: Test Login Functionality

@smokeTest
  Scenario: Accediendo al login con credenciales validas
    Given Abrimos el navegador Chrome
    And El usurio ve a la ventana Login
    When Se ingresa el usuario y contrasena
    And hace click en el boton
    Then EL usuario navega por la pagina principal
