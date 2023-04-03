import { handleAPIRequest } from "@/lib/handleAPIRequest";
import UrlGenerator from "@/lib/UrlGenerator";
import ERROR from "../../../../../../data/error.json";

/**
 * Handles the incoming request and returns a response containing submission data.
 * @param {Request} req - The incoming request object.
 * @param {Response} res - The response object that will be sent back to the client.
 * @returns {Promise<void>}
 */
export default async function handler(req, res) {

  const subreddit = req.query.subreddit;
  let sort = req.query.sort;

  let data;

  const acceptableSort = [
    "new", "hot", "hour", "day", "week", "month", "year", "all"
  ]


  if (acceptableSort.includes(sort)) {
    const topSort = ["hour", "day", "week", "month", "year", "all"]

    let time = "all"
    if (topSort.includes(sort)) {
      time = sort;
      sort = "top"
    }
    const url = UrlGenerator(subreddit, sort, time);
    data = await handleAPIRequest(url);
  } else {
    data = {
      error: true,
      status: 400,
      data: {
        message: ERROR["400"]
      }
    }
  }



  res.status(data.status).json(data);
}
