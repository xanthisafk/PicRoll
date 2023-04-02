/**
 * Extracts the subreddit name from a given URL string using regex.
 *
 * @param {string} url - The URL string to extract the subreddit name from.
 * @returns {string} - The extracted subreddit name.
 */
const extractSubredditName = (url) => {
  let subredditName = url;

  // extract the subreddit name from the URL using regex
  // test: https://regex101.com/r/05z7Ue/1
  const regex = /\b(?<=\/?r\/)(..*?\b)/g;


  const matches = regex.exec(url);

  // get the subreddit name from the matches array
  subredditName = matches?.[0] ?? url;

  return subredditName;
}

export default extractSubredditName;
