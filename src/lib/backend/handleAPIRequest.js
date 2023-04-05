import fetch from 'node-fetch';
import ERROR from '../../data/error.json';
import extractMediaPosts from './extractMediaPosts';


const handleAPIRequest = async (url, nsfw = true) => {

    // Initialize the error flag
    let error = false;
    let statusCode = 200;

    // Make the fetch request and handle the response
    const response = await fetch(url)
        .then(res => {
            // Set the error flag if the response is not OK
            error = !res.ok;

            // Change Error Code
            statusCode = res.status;

            // Return the response as JSON
            return res.json()
        })
        .then(json => {
            if (
                json.data?.after === null
                && json.data?.before === null
                && json.data?.dist === 0
            ) {
                error = true;
                statusCode = 404;
            }
            else if (json.reason === "banned") {
                statusCode = 422
            }
            return json
        })
        .catch(e => {
            // Set the error flag and return an error object
            error = true;
            statusCode = 404;
        });

        let reply = {};
        if (error) {
            reply = {
                message: ERROR[statusCode],
            }
        } else {
            reply = !error && extractMediaPosts(response, nsfw)
        }

    // Create the data object with error flag and data
    const data = {
        error,
        data: reply,
        status: statusCode
    }

    // Return the data object
    return data;
}


export {
    handleAPIRequest
}