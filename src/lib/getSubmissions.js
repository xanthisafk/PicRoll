import redditClient from "./reddit";
import error from '../data/error.json';

/**
 * Builds an error message object.
 * @param {string} message - The error message to include in the object.
 * @param {number} statusCode - The HTTP status code to include in the object.
 * @returns {Object} An error message object containing the message and status code.
 */
const buildErrorMessage = (message, statusCode) => {
  return {
    error: true,
    data: {
      message
    },
    status: statusCode
  };
};

/**
 * Retrieves the submission data for a given subreddit and sort type.
 * @param {string} subreddit - The name of the subreddit to retrieve data from.
 * @param {string} sortType - The type of sort (e.g. hot, new, top).
 * @returns {Promise<{error: boolean, data: object, status: number}>} - An object containing the response data, error status, and HTTP status code.
 */
const getSubmission = async (subreddit, sortType) => {

  // Try to extract each image into its own components
  // That might help with modal problem

  const options = {
    limit: 100,
    time: sortType
  };

  let response = {
    error: false,
    data: {},
    status: 200
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
      case 'all':
        response.data = await sub.getTop(options);
        break;
      default:
        response = buildErrorMessage(error[400], 400);
        break;
    }
  } catch (ex) {
    if (ex.error.reason === 'banned') {
      response = buildErrorMessage(error['banned'], 404);
    } else {
      response = buildErrorMessage(error['500'], 500);
    }
  }

  if (response.data?.length === 0) {
    response = buildErrorMessage(error[404], 404);
  }

  return response;
};

export default getSubmission;
