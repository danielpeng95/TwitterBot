var Twitter
module.exports = {
    before: browser => {
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
            .pause(3000)
            .waitForElementVisible('@retweet', 10000)
            .click('@retweet')
            .pause(3000)
            .waitForElementVisible('@post', 10000)
            .click('@post')
            .pause(3000)
            .waitForElementVisible('@profile', 10000)
            .click('@profile')
            .pause(5000)
    },

    'Like Tweets': browser => {
        Twitter
            .api.url('https://twitter.com/home')
        Twitter
            .pause(3000)
            .waitForElementVisible('@like', 10000)
            .click('@like')
            .pause(3000)
            .waitForElementVisible('@profile', 10000)
            .click('@profile')
            .pause(5000)
    },
}