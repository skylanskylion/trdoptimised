import {AppPage} from "./app.po";
import { saveAs } from 'file-saver/FileSaver';
import {browser, by, element, error, protractor} from "protractor";


describe('The Right Doctor Test Report Specials page ', function() {
    const EC = protractor.ExpectedConditions;
    let page: AppPage;
    let ind: string = '1';
    browser.waitForAngularEnabled(false);
    let categoryArray: string[] = [];
    let slugsArray: string[] = [];
    let eventsArray: string[] = [];

    beforeEach(() => {
        page = new AppPage();
    });

    it('Specials page links tested ', () => {
        /* page.navigateTo();*/
        browser.get('https://therightdoctors.com/specials');
        browser.driver.manage().window().maximize();
        browser.sleep(3000);
        //find all links
        let linkCount = element.all(by.css('.testevents'));
        //here you click each of the links:


        linkCount.each(function (elem, index) {
            elem.getAttribute('href').then(function (link) {
                if (link != null) {
                    // if (index < 1)
                        eventsArray.push(link);

                }
            });
        });

    });


    it('Category page links tested ', () => {
        /* page.navigateTo();*/

        eventsArray.forEach(function (item) {
            browser.get(item);
            browser.driver.manage().window().maximize();
            browser.sleep(3000);
            // browser.wait(EC.visibilityOf());

            //find all links
            let linkCount = element.all(by.css('.testcategories'));
            //here you click each of the links:

            linkCount.each(function (elem, index) {
                elem.getAttribute('href').then(function (link) {
                    if (link != null) {
                        // if (index < 1)
                            categoryArray.push(link);
                    }

                });
            });
        });
    });


    it('Slugs page links tested ', () => {

        categoryArray.forEach(function (item) {
            browser.get(item);

            browser.driver.manage().window().maximize();
            browser.sleep(3000);

            //find all links
            let linkCount = element.all(by.css('.testslugs'));
            //here you click each of the links:


            linkCount.each(function (elem, index) {
                elem.getAttribute('href').then(function (link) {

                    if (link != null) {

                        console.log(link);
                        // if (index < 2)
                            slugsArray.push(link);

                    }
                });
            });
        });
    });

    it(' : Slug tested ', () => {

        slugsArray.forEach(function (item) {
            browser.get(item).then(() => {
                // browser.get('https://therightdoctors.com/stemi-india-lucknow-2018/the-interview/stemi-india-tv-dr-ajit-mullasari-lack-of-funding-and-infrastructure-big-reason-for-stemi-deaths-in-india').then(() => {
                browser.sleep(4000);
                console.log(item);
                element(by.css('.video_hd1_drname')).getText().then(function (value) {
                    // expect(item+'headline test').toEqual(item+'headline test');
                    expect(value).not.toEqual('', "  Doctor name headlinetest in : " + item);
                    expect(value).toMatch('^(\\b[A-Z]\\S*\\s*)+$', "  Doctor name in headline, first letter capital test in : " + item);

                }).catch(error => expect('').not.toEqual('', "  Doctor name headline not found in : " + item));


                element(by.css('.video_hd1_description_headline')).getText().then(function (value) {
                    // expect(item+'headline test').toEqual(item+'headline test');
                    expect(value).not.toEqual('', "  Description headlinetest in : " + item);

                }).catch(error => expect('').not.toEqual('', "  Description headline not found in : " + item));


                element(by.css('.views_single')).getText().then(function (value) {
                    /*expect(value).toEqual('image  test');*/
                    var tcount = parseInt(value, 10);
                    // expect(item+' views test').toEqual(item+' views test');
                    expect(tcount).toBeGreaterThan(200, "No. of views are lesser in : " + item);

                }).catch(error => expect(1).toBeGreaterThan(200, "No. of views not found in : " + item));

                element(by.css('.guestimage')).getAttribute('src').then(function (value) {
                    /*expect(value).toEqual('image  test');*/
                    // expect(item+'image  test').toEqual(item+'image  test');
                    expect(value).not.toEqual('', "  Guest image missing in : " + item);

                }).catch(error => expect('').not.toEqual('', "  Guest image not found in : " + item));


                element(by.css('.guest_drname')).getText().then(function (value) {
                    // expect(item+'headline test').toEqual(item+'headline test');
                    expect(value).not.toEqual('', "  Guest doctor name missing in : " + item);

                }).catch(error => expect('').not.toEqual('', "  Guest doctor name not found in : " + item));

                element(by.css('.guest_designation_single')).getText().then(function (value) {
                    // expect(item+'headline test').toEqual(item+'headline test');
                    expect(value).not.toEqual('', "  Guest designation missing in : " + item);

                }).catch(error => expect('').not.toEqual('', "  Guest designation not found in : " + item));

                element(by.css('.guest_hospital_single')).getText().then(function (value) {
                    // expect(item+'headline test').toEqual(item+'headline test');
                    expect(value).not.toEqual('', "  Guest hospital test in : " + item);

                }).catch(error => expect('').not.toEqual('', "  Guest hospital not found in : " + item));


            }).catch((err) => console.log('browser opening link err' + err));


            // browser.sleep(10000);
        });

    });
});


