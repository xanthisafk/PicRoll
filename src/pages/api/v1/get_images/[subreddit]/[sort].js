import getSubmission from "../../../../../lib/getSubmissions";
import getMediaSubmissions from "../../../../../lib/getMediaSubmissions";

/**
 * Handles the incoming request and returns a response containing submission data.
 * @param {import('express').Request} req - The incoming request object.
 * @param {import('express').Response} res - The response object that will be sent back to the client.
 * @returns {Promise<void>}
 */
export default async function handler(req, res) {
  const { subreddit, sort } = req.query;
  const data = await getSubmission(subreddit, sort);

  if (!data.error) {
    data.data = getMediaSubmissions(data.data);
  }

  res.status(data.status).json(data);
}
