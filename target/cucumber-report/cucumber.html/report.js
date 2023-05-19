$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5066535300,
  "status": "passed"
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
  "duration": 79152900,
  "status": "passed"
});
formatter.match({
  "location": "BuyFeaturesSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 468150100,
  "status": "passed"
});
formatter.match({
  "location": "BuyFeaturesSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 311471000,
  "status": "passed"
});
formatter.after({
  "duration": 651567800,
  "status": "passed"
});
});