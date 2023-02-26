$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/feb.feature");
formatter.feature({
  "name": "Project Feb",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch an application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepdef.launch_an_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter login credential",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.i_validate_the_outcomes()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login Scenario1",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch an application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepdef.launch_an_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter login credential",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.i_validate_the_outcomes()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("Features/feb2.feature");
formatter.feature({
  "name": "Project Feb",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login Scenario1",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch an application",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter username as \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Reethu",
        "pwd"
      ]
    },
    {
      "cells": [
        "Priyanka",
        "pwd"
      ]
    },
    {
      "cells": [
        "JayaRam",
        "pwd"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Scenario1",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch an application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepdef.launch_an_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username as \"Reethu\" and password as \"pwd\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepdef.xxxxxxxxxxxxxx(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.i_validate_the_outcomes()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Scenario1",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch an application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepdef.launch_an_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username as \"Priyanka\" and password as \"pwd\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepdef.xxxxxxxxxxxxxx(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.i_validate_the_outcomes()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Scenario1",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch an application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepdef.launch_an_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username as \"JayaRam\" and password as \"pwd\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepdef.xxxxxxxxxxxxxx(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.i_validate_the_outcomes()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});