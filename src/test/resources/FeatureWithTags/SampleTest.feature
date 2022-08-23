Feature: Feature to demo Tags

  @smoke
  Scenario: Prueba1
    Given Vamos al link
    When ingresamos datos
    Then nos muestra resultados
    
  @regresion
  Scenario: Prueba2
    Given Vamos al link
    When ingresamos datos
    Then nos muestra resultados

  @regresion @smoke
  Scenario: Prueba3
    Given Vamos al link
    When ingresamos datos
    Then nos muestra resultados
    
  @important
  Scenario: Prueba4
    Given Vamos al link
    When ingresamos datos
    Then nos muestra resultados
