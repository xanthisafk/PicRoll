// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import reddit from '../../../../../lib/reddit_handler'

type Data = {}

type RedditException = {
  name: string,
  statusCode: number,
  message: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = await reddit();

  const { subreddit } = req.query;

  try {
    const posts = await client.getSubreddit(subreddit as string).getTop({ time: 'all', limit: 100 });
    const postsWithImages = posts.filter(post => post.preview && post.preview.images[0].variants && post.preview.images[0].variants.mp4 == null && post.preview.images[0].variants.gif == null);
    const formattedPosts = postsWithImages.map(post => ({
      title: post.title,
      imageUrl: post.preview.images[0].variants.gif ? post.preview.images[0].variants.gif.source.url : post.preview.images[0].variants.mp4 ? post.preview.images[0].variants.mp4.source.url : post.preview.images[0].source.url,
      width: post.preview.images[0].source.width,
      height: post.preview.images[0].source.height,
      permalink: `https://www.reddit.com${post.permalink}`,
    }));
    

    res.status(200).json({
      error: false,
      data: formattedPosts
    });
  } catch (error) {
    console.log(error)
    let errorCode: number = 500;
    let message: string = 'Internal server error (500)';
    if (error.statusCode === 404) {
      errorCode = 404;
      message = "subreddit does not exist"
    } else if (error.statusCode === 451) {
      errorCode = 451,
      message = "unavailable in this reigon"
    }
    
    res.status(errorCode).json({ error: true, message });
  }

}
