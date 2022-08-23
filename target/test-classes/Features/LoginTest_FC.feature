Feature: Prueba de Funcionalidad de Login Successfull

  @smokeTest
  Scenario Outline: Acceso al login con credenciales validas
    Given Abrimos el navegador web
    And Nos dirigimos al Login del sistema
    When Accedemos con el <user> y <passwd>
    And Hacemos click en el boton login
    Then El usuario navega en la pagina de registro

    Examples: 
      | user     | passwd |
      | Yadira   |  12345 |
      | Santiago |  12345 |
