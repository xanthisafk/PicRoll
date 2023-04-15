
const UrlGenerator = ( subreddit, sort, time, limit = 25, after = "") => {
    return `https://www.reddit.com/r/${subreddit}/${sort}.json?t=${time}&limit=${limit}&after=${after}`
}

export default UrlGenerator;