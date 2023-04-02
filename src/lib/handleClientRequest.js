import ERROR from '../data/error.json';
import extractMediaPosts from './extractMediaPosts';


const handleClientRequest = async (url) => {

    // Initialize the error flag
    let error = false;

    // Make the fetch request and handle the response
    const response = await fetch(url)
        .then(res => {
            // Set the error flag if the response is not OK
            error = !res.ok;
            // Return the response as JSON
            return res.json()
        })
        .catch(() => {
            // Set the error flag and return an error object
            error = true;
            return {
                reason: "Not found",
                message: ERROR["404"],
                error: 404
            };
        });

    // Extract media posts if there is no error
    const posts = !error && extractMediaPosts(response)

    // Create the data object with error flag and data
    const data = {
        url,
        error,
        data: error ? response : posts
    }


    // Return the data object
    return data;
}


export {
    handleClientRequest
}