$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.match({
  "location": "BuyFeaturesSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 304468600,
  "status": "passed"
});
formatter.match({
  "location": "BuyFeaturesSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 186054600,
  "error_message": "java.lang.IllegalArgumentException: Driver must be set\r\n\tat org.openqa.selenium.internal.Require.nonNull(Require.java:59)\r\n\tat org.openqa.selenium.interactions.Actions.\u003cinit\u003e(Actions.java:60)\r\n\tat car.guru.utility.Utility.mouseHoverToElement(Utility.java:251)\r\n\tat car.guru.pages.HomePage.setBuySellTab(HomePage.java:28)\r\n\tat car.guru.steps.BuyFeaturesSteps.iMouseHoverOnBuySellTab(BuyFeaturesSteps.java:16)\r\n\tat ✽.When I mouse hover on “buy+sell” tab(buy.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BuyFeaturesSteps.iClickSearchCarsLink()"
});
formatter.result({
  "status": "skipped"
});
});