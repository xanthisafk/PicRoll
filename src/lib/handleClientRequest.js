

const handleClientRequest = async (subreddit, sort, after, nsfw) => {
  const url = `/api/v1/get_images/${subreddit}/${sort ?? "hot"}/${after ?? ""}?nsfw=${nsfw === '0' ? "true" : "false"}`
  const data = await fetch(url)
    .then(res => res.json())
  return data;
}

export {
    handleClientRequest
}