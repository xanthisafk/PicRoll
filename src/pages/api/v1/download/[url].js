import { checkFileSize } from '@/lib/backend/checkFileSize';
import ERROR from '../../../../data/error.json'
import fetch from 'node-fetch';

/**
 * Handles a request to download an image from the specified URL.
 * @param {Request} req - The incoming request object.
 * @param {Response} res - The outgoing response object.
 * @returns {Promise<void>}
 */
export default async function handler(req, res) {
  const imageUrl = req.query.url;

  // Get file size
 const isBiggerThan4 = await checkFileSize(imageUrl);

 if (isBiggerThan4) {
  return res.status(413).json({
    error: true,
    message: ERROR[413],
    statusCode: 413
  });
 }
  // Fetch the image data from the URL
  const imageResponse = await fetch(imageUrl);

  // Get the image data as a buffer
  const imageData = Buffer.from(await imageResponse.arrayBuffer());

  // Set the response headers to force a download
  res.setHeader('Content-Type', 'image/jpeg');
  res.setHeader('Content-Disposition', 'attachment; filename=image.jpg');
  
  // Send the image data as the response
  res.end(imageData);
}
