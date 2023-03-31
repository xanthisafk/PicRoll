import redditClient from "./reddit";
import error from '../data/error.json'

const buildErrorMessage = (message, statusCode) => {
    return {
        error: true,
        data: {
            message
        },
        status: statusCode
    }
}


/**
*   Asynchronously gets subreddit submission data based on subreddit name and sort type.
*   @param {string} subreddit - The name of the subreddit to get submissions from.
*   @param {string} sortType - The type of sorting to use for the subreddit submissions (e.g. 'hot', 'new', 'today', 'week', 'month', 'all').
*   @returns {Promise<{ error: boolean, data: {}, status: number }>} - An object containing the error status, submission data, and response status code.
*/
const getSubmission = async (subreddit, sortType) => {

    const options = {
        limit: 100,
        time: sortType
    }

    let response = {
        error: false,
        data: {},
        status: 200,
    };

    const reddit = redditClient();
    const sub = await reddit.getSubreddit(subreddit);
    

    try {
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
            response = buildErrorMessage(error[400], 400)
            break;
    }
} catch (ex) {
    if (ex.error.reason === "banned") {
        response = buildErrorMessage(error["banned"], 404);
    }

    else {
        response = buildErrorMessage(error["500"], 500);
    }
}

    if (response.data?.length === 0) {
        response = buildErrorMessage(error[404], 404);
    }

    return response;
}

export default getSubmission;