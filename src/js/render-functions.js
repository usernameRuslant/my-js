import { refs } from './refs';
import SimpleLightbox from 'simplelightbox';

export function showLoader() {
  refs.loader.classList.remove('is-hidden');
}
export function hideLoader() {
  refs.loader.classList.add('is-hidden');
}
export function clearGallery() {
  refs.gallery.innerHTML = '';
}

export function renderGallery(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li>
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" width="360" height="200"/>
        </a>
        <div>
          <p>likes: <span>${likes}</span></p>
          <p>views: <span>${views}</span></p>
          <p>comments: <span>${comments}</span></p>
          <p>downloads: <span>${downloads}</span></p>
        </div>
      </li>`
    )
    .join('');
}

let galleryLightbox = null;

export function refreshLightbox() {
  if (galleryLightbox) {
    galleryLightbox.refresh();
  } else {
    galleryLightbox = new SimpleLightbox('.js-gallery a'); // или твой селектор
  }
}

////////////////////
