/**
 * Saves a Blob object as a file with the given file name by generating a temporary URL and creating a download link.
 *
 * @param {Blob} blob - The Blob object to be saved.
 * @param {string} fileName - The name to give the downloaded file.
 * @returns {void}
 */
const saveBlob = (blob, fileName) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  
  export default saveBlob;
  