import fetch from "node-fetch";

const checkFileSize = async (url) => {
  const response = await fetch(url, {
    method: 'HEAD'
  });
  const contentLength = response.headers.get('content-length');
  const fileSizeInBytes = parseInt(contentLength, 10);
  const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);


  return fileSizeInMegabytes > 4;
}

export { checkFileSize }