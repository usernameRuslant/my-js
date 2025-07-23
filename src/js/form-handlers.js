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
let page = 1;
let totalHits = null;
let perPage = 9;

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
    page = 1; // сбрасываем страницу на 1 при новом поиске
    clearGallery();

    const query = e.target.elements['search-text'].value.trim();

    if (query === '') {
      iziToast.info({ message: 'Введите поисковый запрос!' });
      return;
    }

    const { data } = await getImagesByQuery(query, page, perPage);

    if (!data.hits.length) {
      iziToast.error({ message: 'Нет результатов по вашему запросу' });
      return;
    }

    const markup = renderGallery(data.hits);
    refs.gallery.innerHTML = markup;

    refreshLightbox();

    if (data.totalHits > perPage) {
      refs.loadmorebtn.classList.remove('is-hidden');
    } else {
      refs.loadmorebtn.classList.add('is-hidden');
    }
  } catch (error) {
    iziToast.error({ message: 'что пошло не так' });
    clearGallery();
  } finally {
    hideLoader();
  }
};
/////////////////////////////////////
export const onClickOnbuttonLoadMore = async () => {
  page += 1;
  showLoader();
  try {
    const query = refs.form.elements['search-text'].value.trim();
    const { data } = await getImagesByQuery(query, page, perPage);

    // if (!data.hits.length) {
    //   iziToast.error({ message: 'Нет результатов по вашему запросу' });
    //   return;
    // }

    const markup = renderGallery(data.hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);

    refreshLightbox();

    if (data.totalHits <= page * perPage) {
      refs.loadmorebtn.classList.add('is-hidden');
    }
  } catch (error) {
    iziToast.error({ message: 'что пошло не так' });
  } finally {
    hideLoader();
  }
};
