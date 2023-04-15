import saveBlob from "./saveBlob";

/**
 * Downloads an image from the specified URL and saves it to the user's device.
 * @param {string} url - The URL of the image to download.
 * @param {Function} setter - A state setter function to set a loading state while the image is being downloaded.
 * @param {Function} toast - A toast function to display a success message after the image is downloaded.
 * @returns {Promise<void>}
 */
const downloadImage = async (url, setter, toast) => {
  setter(() => true);

  const name = url.split("/");
  let error = false;
  const blob = await fetch(`/api/v1/download/${encodeURIComponent(url)}`)
    .then(res => {
      if (!res.ok) {
        error = true;
        return res.json()
      }
      return res.blob();
    })

  if (!error) {saveBlob(blob, name[name.length - 1]);}

  toast({
    title: error ? "Could not download image": "Image downloaded!",
    status: error ? "error" : "success",
    description: error
      ? "Can not download file bigger than 4MB. Please right click or long press the image to download." 
      : "",
    duration: error ? 9000 : 3000,
    isClosable: true
  });

  setTimeout(() => setter(() => false), 3000);
};

export default downloadImage;
