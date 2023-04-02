import { knuthShuffle } from './shuffle'

const extractMediaPosts = (listing) => {
    // to make it easy on myself
    const data = listing.data

    // this will be the array that will return
    const posts = new Array();

    // pagination
    const after = data.after

    const acceptableMedia = [
        "image",
        // "rich:video",
        // "hosted:video",
    ]

    // filter data to only contain posts that have images.
    const filteredData = data.children.filter(
        child =>
            // if submission is part of acceptableMedia or has the property of `media_metadata`
            // we must check this because reddit does not give a post hint for
            // gallery submissions. we also check that the submission isn't self or video
            // we do not plan to implement video for now.
            (acceptableMedia.includes(child.data.post_hint) || child.data.hasOwnProperty("media_metadata"))
            && !child.data.is_self
            && !child.data.is_video
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
        const images = new Array();

        const isGallery = element.data.hasOwnProperty("media_metadata");
        const post_hint = isGallery ? "gallery" : element.data.post_hint

        // const posts = new Array()

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