import { AxiosUserSearch } from './js/pixabay-api';
import {
  clearGallery,
  hideLoader,
  hideLoadMoreButton,
  renderItems,
  showLoader,
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
};
export const infoAboutPages = {
  currentPage: 1,
  totalPages: 0,
  currentSearch: '',
};
refs.formEl.addEventListener('submit', async e => {
  e.preventDefault();
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
  if (infoAboutPages.currentPage !== 1) {
    infoAboutPages.currentPage = 1;
  }
  showLoader();
  clearGallery();
  try {
    infoAboutPages.currentSearch = inputValue;
    const res = await AxiosUserSearch(inputValue, infoAboutPages.currentPage);
    hideLoader();
    if (res.length === 0) {
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
    renderItems(res);
    if (infoAboutPages.totalPages < infoAboutPages.currentPage) {
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results",
        position: 'topRight',
        maxWidth: 432,
        color: '#EF4040',
        messageColor: '#FAFAFB',
      });
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
  } catch (e) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: e,
      position: 'topRight',
    });
  }
});
refs.loadingMoreBtn.addEventListener('click', () => {
  infoAboutPages.currentPage++;
  if (infoAboutPages.totalPages < infoAboutPages.currentPage) {
    iziToast.error({
      message: "We're sorry, but you've reached the end of search results",
      position: 'topRight',
      maxWidth: 432,
      color: '#EF4040',
      messageColor: '#FAFAFB',
    });
    hideLoadMoreButton();
  }
  AxiosUserSearch(infoAboutPages.currentSearch, infoAboutPages.currentPage);
});
