import Snoowrap from "snoowrap";

const redditClient = () => {
    const {
        REDDIT_USERNAME,
        REDDIT_PASSWORD,
        REDDIT_USER_AGENT,
        REDDIT_CLIENT_ID,
        REDDIT_CLIENT_SECRET,
    } = process.env;

    const snoo = new Snoowrap({
        userAgent: REDDIT_USER_AGENT,
        clientId: REDDIT_CLIENT_ID,
        clientSecret: REDDIT_CLIENT_SECRET,
        username: REDDIT_USERNAME,
        password: REDDIT_PASSWORD
    });
}

export default redditClient;