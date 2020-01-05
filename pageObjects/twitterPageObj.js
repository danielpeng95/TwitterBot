module.exports = {
    url: 'https://twitter.com',
    commands: [{

    }],

    elements: { //xPath Selector
        email: {selector: '//input[@type="text"]', locateStrategy: 'xpath'},
        password: {selector: '//input[@type="password"]', locateStrategy: 'xpath'},
        submit: {selector: '//input[@type="submit"]', locateStrategy: 'xpath'},
        retweet: {selector: '(//div[@class="css-1dbjc4n r-xoduu5 r-1udh08x"])[2]', locateStrategy: 'xpath'},
        post: {selector: '(//div[@aria-haspopup="false"])[1]', locateStrategy: 'xpath'},
    }
}
