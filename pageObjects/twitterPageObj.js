module.exports = {
    url: 'https://twitter.com',
    commands: [{

    }],

    elements: {
        email: {selector: '//input[@type="text"]', locateStrategy: 'xpath'},
        password: {selector: '//input[@type="password"]', locateStrategy: 'xpath'},
        submit: {selector: '//input[@type="submit"]', locateStrategy: 'xpath'},
        retweet: {selector: '(//div[@class="css-1dbjc4n r-xoduu5 r-1udh08x"])[1]', locateStrategy: 'xpath'},
        like: {selector: '(//div[@class="css-1dbjc4n r-xoduu5 r-1udh08x"])[3]', locateStrategy: 'xpath'},
        post: {selector: '(//div[@aria-haspopup="false"])[1]', locateStrategy: 'xpath'},
        profile: {selector: '(//div[@class="css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-1sp51qo r-o7ynqc r-6416eg"])[7]', locateStrategy: 'xpath'},
    }
}
