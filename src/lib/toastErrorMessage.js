/**
  * Function to display an error toast message
  * @param {object} options - The options for the error toast message.
  * @param {string} options.message - The error message to be displayed.
  * @param {number} options.duration - The duration of the toast message.
  * @param {boolean} options.isClosable - Whether the toast message is closable or not.
  * @returns {void}
  */
const toastErrorMessage = ({ message, duration = 9000, isClosable = true }, toast) => {
    toast({
      status: "error",
      title: message,
      duration,
      isClosable
    })
}

export {
    toastErrorMessage
}