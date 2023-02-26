Feature: Project Feb

  Scenario: Login Scenario1
    Given Launch an application
      | SNo | Username    |
      |   1 | Manick      |
      |   2 | Priyanka    |
      |   3 | RamzanBegum |
    When Enter login credentials
    Then I validate the outcomes
