import{a as f,S as y,i as n}from"./assets/vendor-DirGshhi.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();async function u(t,l){const i="https://pixabay.com/api/",s={key:"55949954-f9f721bb22bd9fe0f33f87243",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:l};try{const e=await f.get(i,{params:s});return r.totalPages=Math.ceil(e.data.totalHits/s.per_page),e.data.hits}catch(e){console.log("error:",e)}}const h=new y(".gallery-item .gallery-link",{captionSelector:"img",captionsData:"alt",captionDelay:250});function m(t){const l=t.map(i=>F(i)).join("");a.containerElem.insertAdjacentHTML("beforeend",l),h.refresh()}function F(t){return`<li class="gallery-item">
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
`}function E(){a.containerElem.innerHTML=""}function b(){a.loadingElem.style.display="inline-block"}function g(){a.loadingElem.style.display="none"}function p(){a.loadingMoreBtn.style.display="block"}function c(){a.loadingMoreBtn.style.display="none"}const a={formEl:document.querySelector(".js-form"),containerElem:document.querySelector(".gallery"),loadingElem:document.querySelector(".loader"),loadingMoreBtn:document.querySelector('button[data-button="load"]'),loadingTextElem:document.querySelector(".loading-more-image")},r={currentPage:1,totalPages:0,currentSearch:""};a.formEl.addEventListener("submit",async t=>{t.preventDefault();const i=new FormData(a.formEl).get("search-text").trim();if(i.length===0){n.show({close:!1,messageColor:"#FFFFFF",message:"Fill please field",position:"topRight",progressBar:!0,progressBarColor:"rgb(181, 27, 27)",color:"#EF4040",maxWidth:432});return}r.currentPage!==1&&(r.currentPage=1),E();try{r.currentSearch=i,b();const s=await u(i,r.currentPage);if(g(),s.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}m(s),r.totalPages<r.currentPage?(c(),n.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"})):p()}catch(s){g(),c(),n.error({title:"Error",message:s,position:"topRight"})}});a.loadingMoreBtn.addEventListener("click",async()=>{if(r.currentPage++,r.totalPages<r.currentPage){c(),n.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}try{a.loadingTextElem.classList.add("show"),c();const t=await u(r.currentSearch,r.currentPage);m(t),a.loadingTextElem.classList.remove("show"),p()}catch(t){c(),n.error({title:"Error",message:t,position:"topRight"})}});
//# sourceMappingURL=index.js.map
