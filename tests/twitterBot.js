var Twitter
module.exports = {
    beforeEach: browser => {
        Twitter = browser.page.twitterPageObj()
        Twitter.navigate()
        .maximizeWindow()
    },
    after: browser => {
        Twitter.end()
    },
    'Retweet': browser => {
        Twitter
            .waitForElementVisible('@email', 10000)
            .setValue('@email', 'softwareqa10@yahoo.com')
            .setValue('@password', 'SoftQA1995')
            .click('@submit')
            // .waitForElementVisible('@like', 10000)
            // .click('@like')
            .waitForElementVisible('@retweet', 10000)
            .click('@retweet')
            .waitForElementVisible('@post', 10000)
            .click('@post')
            .waitForElementVisible('@profile', 10000)
            .click('@profile')
            .pause(5000)
    }
}