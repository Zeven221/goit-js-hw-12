import{a as F,S as L,i as l}from"./assets/vendor-DirGshhi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();async function u(e,s){const r="https://pixabay.com/api/",i={key:"55949954-f9f721bb22bd9fe0f33f87243",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s};try{return(await F.get(r,{params:i})).data}catch(t){console.log("error:",t)}}const g=new L(".gallery-item .gallery-link",{captionSelector:"img",captionsData:"alt",captionDelay:250});function b(e){const s=e.map(r=>f(r)).join("");a.containerElem.innerHTML=s,g.refresh()}function w(e){const s=e.map(r=>f(r)).join("");a.containerElem.insertAdjacentHTML("beforeend",s),g.refresh()}function f(e){return`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
  </a>
  <div class="gallery-item-desc-div">
    <ul class="gallery-item-desc-list">
    <li class="gallery-item-desc-item">
    Likes
    <p>${e.likes}</p>
    </li>
    <li class="gallery-item-desc-item">
    Views
    <p>${e.views}</p>
    </li>
    <li class="gallery-item-desc-item">
    Comments
    <p>${e.comments}</p>
    </li>
    <li class="gallery-item-desc-item">
    Download
    <p>${e.downloads}</p>
    </li>
    </ul>
  </div>
</li>
`}function A(){a.containerElem.innerHTML=""}function p(){a.loadingMoreBtn.style.display="block"}function m(){a.loadingMoreBtn.style.display="none"}function h(){a.loadingTextElem.classList.add("show")}function y(){a.loadingTextElem.classList.remove("show")}const a={formEl:document.querySelector(".js-form"),containerElem:document.querySelector(".gallery"),loadingElem:document.querySelector(".loader"),loadingMoreBtn:document.querySelector('button[data-button="load"]'),loadingTextElem:document.querySelector(".loading-more-image")};let c,n,E;const x=15;a.formEl.addEventListener("submit",async e=>{e.preventDefault(),m();const r=new FormData(a.formEl).get("search-text").trim();if(r.length===0){l.show({close:!1,messageColor:"#FFFFFF",message:"Fill please field",position:"topRight",progressBar:!0,progressBarColor:"rgb(181, 27, 27)",color:"#EF4040",maxWidth:432});return}E=r,n=1,A(),h();try{const i=await u(r,n);if(y(),c=Math.ceil(i.totalHits/x),i.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}c<=n?(m(),l.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"})):p(),await b(i.hits)}catch(i){l.error({title:"Error",message:i,position:"topRight"})}});a.loadingMoreBtn.addEventListener("click",async()=>{if(n++,m(),c<n){l.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}h();try{const e=await u(E,n);if(y(),await w(e.hits),c<n){l.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}else p()}catch(e){l.error({title:"Error",message:e,position:"topRight"})}});
//# sourceMappingURL=index.js.map
