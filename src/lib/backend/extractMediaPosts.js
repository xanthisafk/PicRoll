import { knuthShuffle } from "./shuffle";

const extractMediaPosts = (listing, nsfw) => {
    // to make it easy on myself
    const data = listing.data;

    // this will be the array that will return
    const posts = new Array();

    // pagination
    const after = data.after

    const acceptableMedia = [
        "image",
        "gif"
        // "rich:video",
        // "hosted:video",
    ]

    // filter data to only contain posts that have images.
    const filteredData = data.children.filter(
        child =>
            /* 
                This code checks if a given Reddit post meets certain criteria to be considered acceptable for display.
                It checks if the post hint is an acceptable media type (as defined by the acceptableMedia array)
                or if the post has media metadata. It also checks if the post is not a self-post (i.e., a text-only post)
                and not a video. Additionally, if the nsfw variable is set to true (i.e., the user has enabled NSFW content),
                then the post is allowed even if it is marked as NSFW.
                If nsfw is false, the post is only allowed if it is not marked as NSFW (i.e., the over_18 property is false).
             */
            (acceptableMedia.includes(child.data.post_hint) || child.data.hasOwnProperty("media_metadata"))
            && !child.data.is_self
            && !child.data.is_video
            && nsfw ? true : !child.data.over_18
        
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