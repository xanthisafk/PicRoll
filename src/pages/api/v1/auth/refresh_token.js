import ERROR from '../../../../data/error.json'
import fetch from 'node-fetch';

const handler = async (req, res) => {
    if (req.method !== "post") {
        return res.status(405).send(ERROR[405]);
    }

    let body, refresh_token, grantType, redirect, clientId, clientSecret;

    grantType = "refresh_token";
    redirect = process.env.NEXT_PUBLIC_REDDIT_REDIRECT_URI;
    clientId = NEXT_PUBLIC_REDDIT_CLIENT_ID;
    clientSecret = process.env.REDDIT_CLIENT_SECRET;

    // Parse data
    try {
        body = JSON.parse(req.body);
        refresh_token = body.refresh_token;
    } catch {
        return res.status(400).send({message: ERROR["400.1"]});
    }

    const data = fetch("https://www.reddit.com/api/v1/access_token", {
        method: "post",
        headers:{
            Authorization: `Basic ${clientId}:${clientSecret}`
        },
        body: `grant_type=${grantType}&refresh_token=${refresh_token}`
    }).then(res => {
        if (res.status === 401) {
            res.status(500).send({message: ERROR["500"]})
        }
        return res.json();
    });

    res.satus(200).send(data);
}