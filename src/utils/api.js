import axios from 'axios';

const imageAPI = axios.create({
  baseURL: 'https://res.cloudinary.com',
});

export const loadImagesByTag = (tag) => {
  return imageAPI
    .get(`/nickmonaco/image/list/${tag}.json`)
    .then((res) => res.data.resources);
};
