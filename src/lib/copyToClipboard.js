/**
* Copies the specified data to the clipboard and displays a success toast notification.
* @param {string} data - The data to be copied to the clipboard.
* @param {function} setter - A function to set a boolean state value.
* @param {function} toast - The toast function from Chakra UI to display a notification.
* @returns {void}
*/
const copyToClipboard = (data, setter, toast) => {
    navigator.clipboard.writeText(data);
    setter(() => true);
    toast({
        title: "Image URL copied.",
        status: "success",
        duration: 3000,
        isClosable: true
    })
    setTimeout(() => setter(() => false), 3000);
}

export default copyToClipboard;