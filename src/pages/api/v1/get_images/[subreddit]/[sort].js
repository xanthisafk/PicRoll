import getSubmission from "../../../../../../lib/getSubmissions";
import getMediaSubmissions from "../../../../../../lib/getMediaSubmissions";

export default async  function handler(req, res) {
    const { subreddit, sort } = req.query;
    const data = await getSubmission(subreddit, sort);
    if (!data.error) {
        data.data = getMediaSubmissions(data.data)
    }

    res.status(data.status).json(data)
}
