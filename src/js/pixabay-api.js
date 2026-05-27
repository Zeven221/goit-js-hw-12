import axios, { isCancel, AxiosError } from 'axios';
import { infoAboutPages } from '../main';
export async function AxiosUserSearch(query, page) {
  const url = 'https://pixabay.com/api/';

  const params = {
    key: '55949954-f9f721bb22bd9fe0f33f87243',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  };
  try{
  const res = await axios.get(url, { params })
  infoAboutPages.totalPages = Math.ceil(res.data.totalHits / params.per_page)
  return res.data.hits
  }
  catch(err){
    console.log('error:', err)
  }

}
