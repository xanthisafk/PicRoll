type Sort = "hot" | "new" | "top" | "controversial"
type Time = "all" | "month" | "week" | "day" | "hour"

const UrlGenerator = (
    subreddit: string,
    sort: Sort,
    time: Time,
    limit: number = 25,
    after: string = ""
) => {
    return `https://www.reddit.com/r/${subreddit}/${sort}.json?t=${time}&limit=${limit}&after=${after}`
}

export default UrlGenerator;