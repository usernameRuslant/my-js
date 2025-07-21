import iziToast from 'izitoast';
import {
  clearGallery,
  hideLoader,
  showLoader,
  renderGallery,
  refreshLightbox,
} from './render-functions';
import { getImagesByQuery, getRandomImage } from './pixabay-api';
import { refs } from './refs';
//////////////////
const renderRandomPhoto = async () => {
  try {
    const response = await getRandomImage('');

    const markup = renderGallery(response.data.hits);
    refs.gallery.innerHTML = markup;

    refreshLightbox();
  } catch (error) {
    iziToast.error({ message: 'что пошло не так' });
  } finally {
    hideLoader();
  }
};

//////////////
renderRandomPhoto(); // отображаем случайное фото при каждом сабмите

export const onSubmitSearchImg = async e => {
  try {
    e.preventDefault();
    showLoader();
    clearGallery();

    const query = e.target.elements['search-text'].value.trim();

    if (query === '') {
      iziToast.info({ message: 'Введите поисковый запрос!' });
      return;
    }

    const { data } = await getImagesByQuery(query);

    if (!data.hits.length) {
      iziToast.error({ message: 'Нет результатов по вашему запросу' });
      return;
    }

    const markup = renderGallery(data.hits);
    refs.gallery.innerHTML = markup;

    refreshLightbox();
  } catch (error) {
    iziToast.error({ message: 'что пошло не так' });
    clearGallery();
  } finally {
    hideLoader();
  }
};
/////////////////////////////////////
