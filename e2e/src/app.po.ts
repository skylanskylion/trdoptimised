import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {

    return browser.get('https://wcce2017.therightdoctors.com');

  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
