import axios from 'axios';
export const uploadToCloudinary = async (image) => {
  if (!isImageValid(image)) throw new Error('Please select a valid image!');

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

  const form = new FormData();
  form.append('file', image);
  form.append('upload_preset', uploadPreset);

  try {
    const response = await axios.post(url, form);
    if (response.status !== 200) {
      throw new Error('Failed to upload image!');
    }
    return response.data.url;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to upload image!');
  }
};

function isImageValid(image) {
  const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  return validImageTypes.includes(image.type);
}
