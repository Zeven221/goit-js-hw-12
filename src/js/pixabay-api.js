import axios, { isCancel, AxiosError } from 'axios';
export function AxiosUserSearch(query) {
  const url = 'https://pixabay.com/api/';

  const params = {
    key: '55949954-f9f721bb22bd9fe0f33f87243',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return axios.get(url, { params }).then(res => res.data.hits).catch(() => [])
}
