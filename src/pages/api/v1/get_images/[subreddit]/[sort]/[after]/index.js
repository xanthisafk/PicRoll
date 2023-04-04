import { handleAPIRequest } from "@/lib/handleAPIRequest";
import UrlGenerator from "@/lib/UrlGenerator";
import ERROR from "../../../../../../../data/error.json";

/**
 * Handles the incoming request and returns a response containing submission data after the given submission.
 * @param {Request} req - The incoming request object.
 * @param {Response} res - The response object that will be sent back to the client.
 * @returns {Promise<void>}
 */
export default async function handler(req, res) {

  const subreddit = req.query.subreddit;
  const after = req.query.after;
  let sort = req.query.sort;
  const nsfw = req.query.nsfw && req.query.nsfw === "true";

  const acceptableSort = [
    "new", "hot", "hour", "day", "week", "month", "year", "all"
  ]

  let data;

  if (acceptableSort.includes(sort) && after.startsWith("t3_")) {
    const topSort = ["hour", "day", "week", "month", "year", "all"]

    let time = "all"
    if (topSort.includes(sort)) {
      time = sort;
      sort = "top"
    }
    const url = UrlGenerator(subreddit, sort, time, undefined, after);
    data = await handleAPIRequest(url, nsfw);
  } else {
    if (!acceptableSort.includes(sort)) {
      data = {
        error: true,
        status: 400,
        data: {
          message: ERROR["400"]
        }
      }
    } else {
      data = {
        error: true,
        status: 400,
        data: {
          message: ERROR["400.after"]
        }
      }
    }

  }

  res.status(data.status).json(data);
}
