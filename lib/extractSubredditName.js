/**
 * Extracts the subreddit name from a given URL string using regex.
 *
 * @param {string} url - The URL string to extract the subreddit name from.
 * @returns {string} - The extracted subreddit name.
 */
const extractSubredditName = (url) => {

    // extract the subreddit name from the URL using regex
    const regex = /\/r\/(\w+)\//;
    const matches = regex.exec(url);

    // get the subreddit name from the matches array
    const subredditName = matches[1];

    console.log(subredditName);
    return subredditName;

}

export default extractSubredditName;
