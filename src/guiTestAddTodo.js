const { remote } = require('webdriverio');
const assert = require('assert');

let browser;

;(async () =>{
        browser = await remote({
            capabilities: { browserName: 'chrome'}
        })

        await browser.navigateTo('http://localhost:3000')

        const clickBtn = await browser.$('.btn.btn-secondary')
        await clickBtn.click()

        const inputTodo = await browser.$('.form-control')
        await inputTodo.setValue('This is a test for adding a todo ')

        const pressBtn = await browser.$('.btn.btn-xs.btn-success')
        await pressBtn.click()
        
        console.log("Todo added");
        
        return browser.deleteSession();

    } ) ().catch((err) => {
        console.error(err);
        return browser.deleteSession();
    })
