import axios from 'axios';
////////////////////////////////////////////////////////////////////////////

// export function getImagesByQuery(query) {
//   const URL = 'https://pixabay.com/api/';
//   const API_KEY = '51390030-b864bce351d7615980478c23b';

//   return axios
//     .get(URL, {
//       params: {
//         key: API_KEY,
//         q: query,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//         per_page: 9,
//       },
//     })
//     .then(res => res.data)
//     .catch(error => {
//       throw error;
//     });
// }
////////////////////////////////////////////////////////////////////////////
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImagesByQuery = (searchedQuery, page, perPage) => {
  const options = {
    params: {
      key: '51390030-b864bce351d7615980478c23b',
      q: searchedQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: perPage,
      page: page,
    },
  };
  return axios.get('', options);
};

export const getRandomImage = () => {
  const options = {
    params: {
      key: '51390030-b864bce351d7615980478c23b',
      q: 'random',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 9,
    },
  };
  return axios.get('', options);
};
