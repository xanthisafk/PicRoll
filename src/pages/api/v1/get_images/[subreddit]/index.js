import { handleAPIRequest } from "@/lib/handleAPIRequest";
import UrlGenerator from "@/lib/UrlGenerator";

/**
 * Handles the incoming request and returns a response containing submission data.
 * @param {Request} req - The incoming request object.
 * @param {Response} res - The response object that will be sent back to the client.
 * @returns {Promise<void>}
 */
export default async function handler(req, res) {

  const subreddit = req.query.subreddit;
  const nsfw = req.query.nsfw && req.query.nsfw === "true";

  const url = UrlGenerator(subreddit, "hot", "all");
  const data = await handleAPIRequest(url, nsfw);

  res.status(data.status).json(data);
}
