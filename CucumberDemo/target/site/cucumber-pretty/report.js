$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/Module.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    }
  ],
  "line": 19,
  "name": "Facebook Login Functionality",
  "description": "I want to use this template for my feature file(Optional)",
  "id": "facebook-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Login with Valid Username \u0026 Password",
  "description": "",
  "id": "facebook-login-functionality;login-with-valid-username-\u0026-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I am on login screen of Facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I enter \u003cusername\u003e \u0026 \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should redirect to home",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "facebook-login-functionality;login-with-valid-username-\u0026-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 28,
      "id": "facebook-login-functionality;login-with-valid-username-\u0026-password;;1"
    },
    {
      "cells": [
        "name1",
        "5"
      ],
      "line": 29,
      "id": "facebook-login-functionality;login-with-valid-username-\u0026-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Login with Valid Username \u0026 Password",
  "description": "",
  "id": "facebook-login-functionality;login-with-valid-username-\u0026-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I am on login screen of Facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I enter name1 \u0026 5",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should redirect to home",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.I_am_on_login_screen_of_Facebook()"
});
formatter.result({
  "duration": 126616556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    },
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDefinition.i_enter_name(int,int)"
});
formatter.result({
  "duration": 3473541,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_Login_button()"
});
formatter.result({
  "duration": 166708,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_redirect_to_home()"
});
formatter.result({
  "duration": 106032,
  "status": "passed"
});
});