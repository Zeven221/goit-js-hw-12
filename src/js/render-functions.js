import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from '../main';
const lightbox = new SimpleLightbox('.gallery-item .gallery-link', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
});
export function renderItems(array) {
  const markup = array.map(item => CreateMarkup(item)).join('');
  refs.containerElem.innerHTML = markup
  lightbox.refresh()
}
export function addElem(array) {
  const markup = array.map(item => CreateMarkup(item)).join('');
  refs.containerElem.insertAdjacentHTML('beforeend', markup)
  lightbox.refresh()
}
function CreateMarkup(elem) {
  return `<li class="gallery-item">
  <a class="gallery-link" href="${elem.largeImageURL}">
    <img class="gallery-image" src="${elem.webformatURL}" alt="${elem.tags}" />
  </a>
  <div class="gallery-item-desc-div">
    <ul class="gallery-item-desc-list">
    <li class="gallery-item-desc-item">
    Likes
    <p>${elem.likes}</p>
    </li>
    <li class="gallery-item-desc-item">
    Views
    <p>${elem.views}</p>
    </li>
    <li class="gallery-item-desc-item">
    Comments
    <p>${elem.comments}</p>
    </li>
    <li class="gallery-item-desc-item">
    Download
    <p>${elem.downloads}</p>
    </li>
    </ul>
  </div>
</li>
`;
}
export function clearGallery() {
  refs.containerElem.innerHTML = '';
}

export function showLoadMoreButton(){
  refs.loadingMoreBtn.style.display = 'block'
}
export function hideLoadMoreButton(){
  refs.loadingMoreBtn.style.display = 'none'

}
export function showLoading(){
  refs.loadingTextElem.classList.add('show')
}
export function hideLoading(){
  refs.loadingTextElem.classList.remove('show')
}