import ERROR from '../../../../data/error.json'
import fetch from 'node-fetch';

const handler = async (req, res) => {
    // Return error if method is not POST
    if (req.method !== "POST") {
        return res.status(405).send({message: ERROR["405"]})
    }

    let body, access_token, grantType, redirect, clientId, clientSecret, statusCode;

    grantType = "authorization_code";
    redirect = process.env.NEXT_PUBLIC_REDDIT_REDIRECT_URI;
    clientId =  process.env.NEXT_PUBLIC_REDDIT_CLIENT_ID
    clientSecret = process.env.REDDIT_CLIENT_SECRET

    const authorizationHeader = "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

    // Parse data
    try {
        body = JSON.parse(req.body);
        access_token = body.access_token;
    } catch {
        return res.status(400).send({message: ERROR["400.1"]});
    }

    const data = await fetch("https://www.reddit.com/api/v1/access_token", {
        method: "POST",
        headers:{
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": authorizationHeader
        },
        body: `grant_type=authorization_code&code=${access_token}&redirect_uri=${redirect}`
     }).then(r => {
        if (r.status === 401) {
            statusCode = 500;
            return { message: ERROR["500"] }
        }
        return r.json()
     });

    res.status(statusCode ?? 200).send(data);
}

export default handler