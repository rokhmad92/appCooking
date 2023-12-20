import axios from 'axios';

// get api all doa
export const getImages = async () => {
  const res = await axios.get(
    'https://api.unsplash.com/photos/?client_id=-lXRZpWbOoV0iojgfyLMDiVpWftf_qEvq9a9b0e5SBc&per_page=4',
  );
  return res.data;
};
