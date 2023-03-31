
/**
 * Filters an array of Reddit submission objects to return only those with media (images or gifs).
 * @param {Array} submissions - An array of Reddit submission objects.
 * @returns {Array} - An array of filtered Reddit submission objects, each with a title, media url, type, permalink, and upvote ratio.
 */
const getMediaSubmissions = submissions => {
    const mediaSubmissions = submissions.filter(submission => {
      if (
        submission.post_hint === "image"
        // ||submission.post_hint === "hosted:video"
        // ||  submission.post_hint === "rich:video"
      ) {
        return true;
      }
      return false;
    });
    return mediaSubmissions.map(submission => ({
      title: submission.title,
      url: submission.post_hint === "rich:video"
        ? submission.media.oembed.html
        : submission.url_overridden_by_dest,
      type: submission.post_hint === "rich:video"
        ? "rich" 
        : "image",
      permalink: `https://www.reddit.com${submission.permalink}`,
      upvoteRatio: submission.upvote_ratio,
      createdAt: submission.created_utc,
      author: submission.author.name,
      upvotes: submission.ups
    }));
};

export default getMediaSubmissions;