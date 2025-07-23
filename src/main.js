import { refs } from './js/refs.js';
import { onSubmitSearchImg } from './js/form-handlers.js';
import { onClickOnbuttonLoadMore } from './js/form-handlers.js';

refs.form.addEventListener('submit', onSubmitSearchImg);
refs.loadmorebtn.addEventListener('click', onClickOnbuttonLoadMore);
///////////////////////////////////////////
