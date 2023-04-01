/**
 * Extracts the subreddit name from a given URL string using regex.
 *
 * @param {string} url - The URL string to extract the subreddit name from.
 * @returns {string} - The extracted subreddit name.
 */
const extractSubredditName = (url) => {
    let subredditName = url;
  
    if (/(http|https|www.reddit.com)/.test(url)) {
      // extract the subreddit name from the URL using regex
      const regex = /^(?:https?:\/\/)?(?:www\.)?reddit\.com\/r\/(\w+)\/?$|^r\/(\w+)$/i;
      const matches = regex.exec(url);
      // get the subreddit name from the matches array
      subredditName = matches[1] || matches[2];
    }
  
    if (url.startsWith("r/") || url.startsWith("/r/")) {
      subredditName = url.split("r/")[1]
    }
  
    return subredditName;
  }
  
  export default extractSubredditName;
  