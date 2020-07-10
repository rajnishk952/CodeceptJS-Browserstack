Feature('Search');

Scenario('Check Local is running', (I) => {
  I.amOnPage('http://localhost:8000/');
  I.seeInTitle('Local Server');
});