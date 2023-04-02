

const handleClientRequest = async (subreddit, sort) => {
  const data = await fetch(`/api/v1/get_images/${subreddit}/${sort}`)
    .then(res => res.json())

  return data;
}

export {
    handleClientRequest
}