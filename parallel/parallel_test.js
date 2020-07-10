Feature('Search');

Scenario('Search for Browserstack', (I) => {
  I.amOnPage('https://www.google.com/');
  I.fillField('Search', 'Browserstack');
  I.pressKey("Enter");
  I.see('Browserstack');
});