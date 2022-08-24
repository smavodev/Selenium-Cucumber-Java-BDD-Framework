
Feature: Ejemplo aplicado a Background

Background: 
Given Proceso numero1
Then Proceso numero3

  @testing
  Scenario: Ejemplo1
#    Given Proceso numero1
    When Proceso numero2
#    Then Proceso numero3

  @testing
  Scenario: Ejemplo2
#    Given Proceso numero4
    When Proceso numero5
#    Then Proceso numero6

  @testing
  Scenario: Ejemplo3
#    Given Proceso numero7
    When Proceso numero8
#    Then Proceso numero9

##     Examples: 
##      | name  | value | status  |
##      | name1 |     5 | success |
##      | name2 |     7 | Fail    |
