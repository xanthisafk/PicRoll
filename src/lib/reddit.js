import Snoowrap from "snoowrap";

/**
 * Creates a Snoowrap Reddit API client with the credentials from the environment variables.
 * @returns {Snoowrap} - A Snoowrap Reddit API client instance.
 */
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

    return snoo;
}

export default redditClient;