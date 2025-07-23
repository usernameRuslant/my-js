import axios from 'axios';

export const getPost = async (page, perPage) => {
  const options = {
    params: {
      _start: (page - 1) * perPage,
      _limit: perPage,
    },
  };
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/',
    options
  );
  return response.data;
};
