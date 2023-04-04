import ERROR from '../../../../data/error.json'
import fetch from 'node-fetch';

/**
 * This is an asynchronous function that handles a POST request and returns a response.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A Promise that resolves to the response object.
 */
const handler = async (req, res) => {
  // Check if the method is POST
  if (req.method !== "POST") {
      return res.status(405).send(ERROR[405]);
  }

  // Initialize variables
  let body, refresh_token, grantType, redirect, clientId, clientSecret, data, statusCode;

  grantType = "refresh_token";
  redirect = process.env.NEXT_PUBLIC_REDDIT_REDIRECT_URI;
  clientId =  process.env.NEXT_PUBLIC_REDDIT_CLIENT_ID;
  clientSecret = process.env.REDDIT_CLIENT_SECRET;

  // Create the authorization header
  const authorizationHeader = "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  // Parse the request body
  try {
      body = JSON.parse(req.body);
      refresh_token = body.refresh_token;
  } catch {
      return res.status(400).send({message: ERROR["400.1"]});
  }

  // Send a request to get the access token
  data = await fetch("https://www.reddit.com/api/v1/access_token", {
      method: "POST",
      headers:{
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": authorizationHeader
      },
      body: `grant_type=${grantType}&refresh_token=${refresh_token}`
  }).then(r => {
      if (r.status === 401) {
          statusCode = 500
          return {message: ERROR["500"]}
      }
      return r.json();
  });

  // Send the response
  return res.status(statusCode ?? 200).send(data);
};


export default handler