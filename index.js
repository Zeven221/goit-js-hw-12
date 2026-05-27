import{a as f,S as h,i as n}from"./assets/vendor-DirGshhi.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function g(t,i){const s="https://pixabay.com/api/",l={key:"55949954-f9f721bb22bd9fe0f33f87243",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:i};try{const e=await f.get(s,{params:l});return r.totalPages=Math.ceil(e.data.totalHits/l.per_page),e.data.hits}catch(e){console.log("error:",e)}}const y=new h(".gallery-item .gallery-link",{captionSelector:"img",captionsData:"alt",captionDelay:250});function u(t){const i=t.map(s=>F(s)).join("");a.containerElem.insertAdjacentHTML("beforeend",i),y.refresh()}function F(t){return`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
  </a>
  <div class="gallery-item-desc-div">
    <ul class="gallery-item-desc-list">
    <li class="gallery-item-desc-item">
    Likes
    <p>${t.likes}</p>
    </li>
    <li class="gallery-item-desc-item">
    Views
    <p>${t.views}</p>
    </li>
    <li class="gallery-item-desc-item">
    Comments
    <p>${t.comments}</p>
    </li>
    <li class="gallery-item-desc-item">
    Download
    <p>${t.downloads}</p>
    </li>
    </ul>
  </div>
</li>
`}function E(){a.containerElem.innerHTML=""}function b(){a.loadingElem.style.display="inline-block"}function m(){a.loadingElem.style.display="none"}function p(){a.loadingMoreBtn.style.display="block"}function c(){a.loadingMoreBtn.style.display="none"}const a={formEl:document.querySelector(".js-form"),containerElem:document.querySelector(".gallery"),loadingElem:document.querySelector(".loader"),loadingMoreBtn:document.querySelector('button[data-button="load"]'),loadingTextElem:document.querySelector(".loading-more-image")},r={currentPage:1,totalPages:0,currentSearch:""};a.formEl.addEventListener("submit",async t=>{c(),t.preventDefault();const s=new FormData(a.formEl).get("search-text").trim();if(s.length===0){n.show({close:!1,messageColor:"#FFFFFF",message:"Fill please field",position:"topRight",progressBar:!0,progressBarColor:"rgb(181, 27, 27)",color:"#EF4040",maxWidth:432});return}r.currentPage!==1&&(r.currentPage=1),b(),E();try{r.currentSearch=s;const l=await g(s,r.currentPage);if(l.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}if(u(l),c(),r.totalPages<r.currentPage){n.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}p()}catch{m(),c(),n.error({title:"Error",message:"While seach",position:"topRight"})}});a.loadingMoreBtn.addEventListener("click",async()=>{r.currentPage++,r.totalPages<r.currentPage&&(c(),n.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"}));try{a.loadingTextElem.classList.add(show),c();const t=await g(r.currentSearch,r.currentPage);u(t),a.loadingTextElem.classList.remove(show),p()}catch{m(),n.error({title:"Error",message:"While show more",position:"topRight"})}});
//# sourceMappingURL=index.js.map
