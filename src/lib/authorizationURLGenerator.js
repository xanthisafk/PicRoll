import { uuidGenerator } from "./uuidGenerator";

const authorizationURLGenerator = () => {
    const client_id = process.env.NEXT_PUBLIC_REDDIT_CLIENT_ID;
    const state = encodeURI(uuidGenerator());
    const duration = "permanent";
    const redirect_uri = encodeURI(process.env.NEXT_PUBLIC_REDDIT_REDIRECT_URI);
    const scope = encodeURI(process.env.NEXT_PUBLIC_REDDIT_SCOPE);

    const generatedURL = `https://www.reddit.com/api/v1/authorize.compact?client_id=${client_id}&response_type=code&state=${state}&duration=${duration}&redirect_uri=${redirect_uri}&scope=${scope}`

    return {
        generatedURL,
        state
    }
}

export { authorizationURLGenerator }