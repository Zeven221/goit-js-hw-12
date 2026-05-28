import { AxiosUserSearch } from './js/pixabay-api';
import {
  addElem,
  clearGallery,
  hideLoading,
  hideLoadMoreButton,
  renderItems,
  showLoading,
  showLoadMoreButton,
} from './js/render-functions';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

export const refs = {
  formEl: document.querySelector('.js-form'),
  containerElem: document.querySelector('.gallery'),
  loadingElem: document.querySelector('.loader'),
  loadingMoreBtn: document.querySelector('button[data-button="load"]'),
  loadingTextElem: document.querySelector('.loading-more-image'),
};
let TOTAL_PAGES;
let CURRENT_PAGE;
let CURRENT_SEACH;
const PER_PAGE = 15;
let elementHeight;
refs.formEl.addEventListener('submit', async e => {
  e.preventDefault();
  hideLoadMoreButton();
  const formData = new FormData(refs.formEl);
  const inputValue = formData.get('search-text').trim();
  if (inputValue.length === 0) {
    iziToast.show({
      close: false,
      messageColor: '#FFFFFF',
      message: `Fill please field`,
      position: 'topRight',
      progressBar: true,
      progressBarColor: 'rgb(181, 27, 27)',
      color: '#EF4040',
      maxWidth: 432,
    });
    return;
  }
  CURRENT_SEACH = inputValue;
  CURRENT_PAGE = 1;
  clearGallery();
  showLoading();
  try {
    const results = await AxiosUserSearch(inputValue, CURRENT_PAGE);
    hideLoading();
    TOTAL_PAGES = Math.ceil(results.totalHits / PER_PAGE);
    if (results.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        maxWidth: 432,
        color: '#EF4040',
        messageColor: '#FAFAFB',
      });
      return;
    }
    if (TOTAL_PAGES <= CURRENT_PAGE) {
      hideLoadMoreButton();
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results",
        position: 'topRight',
        maxWidth: 432,
        color: '#EF4040',
        messageColor: '#FAFAFB',
      });
    } else {
      showLoadMoreButton();
    }
    await renderItems(results.hits);
  } catch (e) {
    hideLoading();
    hideLoadMoreButton();
    iziToast.error({
      title: 'Error',
      message: e,
      position: 'topRight',
    });
  }
});
refs.loadingMoreBtn.addEventListener('click', async () => {
  CURRENT_PAGE++;
  hideLoadMoreButton();
  if (TOTAL_PAGES < CURRENT_PAGE) {
    hideLoadMoreButton();
    iziToast.error({
      message: "We're sorry, but you've reached the end of search results",
      position: 'topRight',
      maxWidth: 432,
      color: '#EF4040',
      messageColor: '#FAFAFB',
    });
    return;
  }
  showLoading();
  try {
    const res = await AxiosUserSearch(CURRENT_SEACH, CURRENT_PAGE);
    await addElem(res.hits);
    elementHeight =
      refs.containerElem.firstElementChild.getBoundingClientRect().height * 2;
    window.scrollBy({
      top: elementHeight,
      left: 0,
      behavior: 'smooth',
    });
    if (TOTAL_PAGES < CURRENT_PAGE) {
      hideLoadMoreButton();
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results",
        position: 'topRight',
        maxWidth: 432,
        color: '#EF4040',
        messageColor: '#FAFAFB',
      });
      return;
    } else {
      showLoadMoreButton();
    }
  } catch (e) {
    hideLoadMoreButtonLoadMoreButton();
    hideLoading();
    iziToast.error({
      title: 'Error',
      message: e,
      position: 'topRight',
    });
  }
});
