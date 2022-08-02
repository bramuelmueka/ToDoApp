const { remote } = require('webdriverio');
const assert = require('assert');

let browser;

;(async () =>{
        browser = await remote({
            capabilities: { browserName: 'chrome'}
        })

        await browser.navigateTo('http://localhost:3000')

        const pressBtn = await browser.$('.btn.btn-secondary')
        await pressBtn.click()
        
        console.log("Link clicked");

        const pageUrl = await browser.getUrl();

        assert(pageUrl === 'http://localhost:3000/TodoApp');

        console.log("Link routing. Page navigated successfully");
        
        await browser.deleteSession();

    } ) ().catch((err) => {
        console.error(err);
        return browser.deleteSession();
    })
