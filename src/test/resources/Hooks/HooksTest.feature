
Feature: Check login Functionality

  @important
  Scenario: Acceso a la web
    Given el usuario se dirige al inicio de Sesion
    When Ingresa sus credenciales validas
    And hace click al boton de login 
    Then ingresa a la parte privada de la pagina

