import { knuthShuffle } from "./shuffle";

const extractMediaPosts = (listing, nsfw) => {
    // to make it easy on myself
    const data = listing.data;

    // this will be the array that will return
    const posts = new Array();

    // pagination
    const after = data.after

    const acceptableMedia = [
        "image"
    ]

    // filter data to only contain posts that have images.
    const filteredData = data.children.filter(
        child =>
            {
                let evaluate
                //((child.data.post_hint && acceptableMedia.includes(child.data.post_hint)) || child.data.hasOwnProperty("media_metadata")) && (nsfw ? 1 === 1 : child.data.over_18 === false)
                if ((child.data.post_hint && acceptableMedia.includes(child.data.post_hint)) || child.data.hasOwnProperty("media_metadata")) {
                    if (nsfw) {
                      evaluate = true;
                    } else {
                      evaluate = !child.data.over_18;
                    }
                  } else {
                    evaluate = false;
                  }
                  
                return evaluate
            }
        
    )

    filteredData.forEach(element => {
        const {
            title,
            ups,
            author,
            created_utc,
            domain,
            over_18,
            upvote_ratio
        } = element.data;

        const permalink = `https://www.reddit.com${element.data.permalink}`;

        const isGallery = element.data.hasOwnProperty("media_metadata");
        const post_hint = isGallery ? "gallery" : element.data.post_hint


        if (isGallery) {
            const media = element.data.media_metadata;

            for (let key in media) {
                const id = media[key].id;
                const ext = media[key].m.split("/")[1];
                const image = `https://i.redd.it/${id}.${ext}`;
                const post = {
                    title,
                    upvotes: ups,
                    upvote_ratio,
                    author,
                    permalink,
                    created: created_utc,
                    domain,
                    nsfw: over_18,
                    images: [image],
                    post_hint
                }
                posts.push(post)
                // images.push(`https://i.redd.it/${id}.${ext}`)
            }
        }
        else {
            
            const image = element.data.url_overridden_by_dest;
            const post = {
                title,
                upvotes: ups,
                upvote_ratio,
                author,
                permalink,
                created: created_utc,
                domain,
                nsfw: over_18,
                images: [image],
                post_hint
            }
            posts.push(post)
        }

        // const post = {
        //     title,
        //     upvotes: ups,
        //     upvote_ratio,
        //     author,
        //     permalink,
        //     created: created_utc,
        //     domain,
        //     nsfw: over_18,
        //     images,
        //     post_hint: element.data.hasOwnProperty("media_metadata") ? "gallery" : element.data.post_hint
        // }
        // posts.push(post)
    });

    

    const submissions = {
        after,
        posts: knuthShuffle(posts)
    }

    return submissions;
}

export default extractMediaPosts