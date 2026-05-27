import { AxiosUserSearch } from './js/pixabay-api';
import {
  clearGallery,
  hideLoader,
  renderItems,
  showLoader,
} from './js/render-functions';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

export const refs = {
  formEl: document.querySelector('.js-form'),
  containerElem: document.querySelector('.gallery'),
  loadingElem: document.querySelector('.loader'),
};
refs.formEl.addEventListener('submit', e => {
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
  showLoader();
  clearGallery();
  AxiosUserSearch(inputValue)
    .then(res => {
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
    }).catch(e => {
      iziToast.error({
        title: 'Error',
        message: e,
        position: 'topRight',
      })
    })
    .finally(() => {
      hideLoader();
    });
});
