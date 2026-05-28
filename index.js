import{a as F,S as w,i as n}from"./assets/vendor-DirGshhi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();async function f(e,s){const o="https://pixabay.com/api/",a={key:"55949954-f9f721bb22bd9fe0f33f87243",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s};try{return(await F.get(o,{params:a})).data}catch(t){console.log("error:",t)}}const p=new w(".gallery-item .gallery-link",{captionSelector:"img",captionsData:"alt",captionDelay:250});function b(e){const s=e.map(o=>h(o)).join("");i.containerElem.innerHTML=s,p.refresh()}function B(e){const s=e.map(o=>h(o)).join("");i.containerElem.insertAdjacentHTML("beforeend",s),p.refresh()}function h(e){return`<li class="gallery-item">
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
`}function A(){i.containerElem.innerHTML=""}function y(){i.loadingMoreBtn.style.display="block"}function c(){i.loadingMoreBtn.style.display="none"}function E(){i.loadingTextElem.classList.add("show")}function d(){i.loadingTextElem.classList.remove("show")}const i={formEl:document.querySelector(".js-form"),containerElem:document.querySelector(".gallery"),loadingElem:document.querySelector(".loader"),loadingMoreBtn:document.querySelector('button[data-button="load"]'),loadingTextElem:document.querySelector(".loading-more-image")};let m,l,L;const M=15;let g;i.formEl.addEventListener("submit",async e=>{e.preventDefault(),c();const o=new FormData(i.formEl).get("search-text").trim();if(o.length===0){n.show({close:!1,messageColor:"#FFFFFF",message:"Fill please field",position:"topRight",progressBar:!0,progressBarColor:"rgb(181, 27, 27)",color:"#EF4040",maxWidth:432});return}L=o,l=1,A(),E();try{const a=await f(o,l);if(d(),m=Math.ceil(a.totalHits/M),a.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}m<l?(c(),n.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"})):y(),await b(a.hits)}catch(a){d(),c(),n.error({title:"Error",message:a,position:"topRight"})}});i.loadingMoreBtn.addEventListener("click",async()=>{if(l++,m<l){n.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"}),c();return}c(),E();try{const e=await f(L,l);await B(e.hits),d(),g=i.containerElem.firstElementChild.getBoundingClientRect().height*2,window.scrollBy({top:g,left:0,behavior:"smooth"})}catch(e){hideLoadMoreButtonLoadMoreButton(),d(),n.error({title:"Error",message:e,position:"topRight"})}m>l&&y()});
//# sourceMappingURL=index.js.map
