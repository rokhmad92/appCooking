import axios from 'axios';

export const getImagesHeader = async () => {
  const res = await axios.get(
    'https://api.unsplash.com/photos/?client_id=-lXRZpWbOoV0iojgfyLMDiVpWftf_qEvq9a9b0e5SBc&per_page=4',
  );
  return res.data;
};

export const getImages = async () => {
  const res = await axios.get(
    'https://api.unsplash.com/photos/?client_id=-lXRZpWbOoV0iojgfyLMDiVpWftf_qEvq9a9b0e5SBc&per_page=8',
  );
  return res.data;
};
