var Twitter
module.exports = {
    beforeEach: browser => {
        Twitter = browser.page.twitterPageObj()
        Twitter.navigate()
    },
    after: browser => {
        Twitter.end()
    },
    'Retweet': browser => {
        Twitter
            .waitForElementVisible('@email')
            .setValue('@email', 'softwareqa10@yahoo.com')
            .setValue('@password', 'SoftQA1995')
            .click('@submit')
            .waitForElementVisible('@retweet', 10000)
            .click('@retweet')
            .click('@post')
    }
}