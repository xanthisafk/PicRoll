import redditClient from "./reddit";
import error from '../data/error.json'


/**
*   Asynchronously gets subreddit submission data based on subreddit name and sort type.
*   @param {string} subreddit - The name of the subreddit to get submissions from.
*   @param {string} sortType - The type of sorting to use for the subreddit submissions (e.g. 'hot', 'new', 'today', 'week', 'month', 'all').
*   @returns {Promise<{ error: boolean, data: {}, status: number }>} - An object containing the error status, submission data, and response status code.
*/
const getSubmission = async (subreddit, sortType) => {

    const options = {
        limit: 50,
        time: sortType
    }

    let response = {
        error: false,
        data: {},
        status: 200,
    };

    const reddit = redditClient();
    const sub = await reddit.getSubreddit(subreddit);

    switch (sortType) {

        case 'hot':
            response.data = await sub.getHot(options);
            break;

        case 'new':
            response.data = await sub.getNew(options);
            break;

        case 'today':
        case 'week':
        case 'month':
        case 'week':
        case 'all':
            response.data = await sub.getTop(options);
            break;

        default:
            response = { error: true, message: error["400"], status: 400 }
            break;
    }

    if (!response.data?.length) {
        response = {
            error: true,
            message: error["404"],
            status: 404
        }
    }

    return response;
}

export default getSubmission;