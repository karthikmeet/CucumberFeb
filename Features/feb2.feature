Feature: Project Feb

  Scenario Outline: Login Scenario1
    Given Launch an application
    When Enter username as "<username>" and password as "<password>"
    Then I validate the outcomes

    Examples: 
      | username | password |
      | JayaRam  | pwd      |
