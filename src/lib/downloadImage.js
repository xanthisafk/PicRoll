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
  await fetch(`/api/v1/download/${encodeURIComponent(url)}`)
    .then(res => res.blob())
    .then(blob => {
      saveBlob(blob, name[name.length - 1]);
    });

  toast({
    title: "Image downloaded.",
    status: "success",
    duration: 3000,
    isClosable: true
  });

  setTimeout(() => setter(() => false), 3000);
};

export default downloadImage;
