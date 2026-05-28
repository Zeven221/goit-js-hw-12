import{a as L,S as b,i as l}from"./assets/vendor-DirGshhi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();async function f(e,s){const r="https://pixabay.com/api/",a={key:"55949954-f9f721bb22bd9fe0f33f87243",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s};try{return(await L.get(r,{params:a})).data}catch(t){console.log("error:",t)}}const h=new b(".gallery-item .gallery-link",{captionSelector:"img",captionsData:"alt",captionDelay:250});function w(e){const s=e.map(r=>p(r)).join("");i.containerElem.innerHTML=s,h.refresh()}function A(e){const s=e.map(r=>p(r)).join("");i.containerElem.insertAdjacentHTML("beforeend",s),h.refresh()}function p(e){return`<li class="gallery-item">
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
`}function B(){i.containerElem.innerHTML=""}function y(){i.loadingMoreBtn.style.display="block"}function c(){i.loadingMoreBtn.style.display="none"}function E(){i.loadingTextElem.classList.add("show")}function u(){i.loadingTextElem.classList.remove("show")}const i={formEl:document.querySelector(".js-form"),containerElem:document.querySelector(".gallery"),loadingElem:document.querySelector(".loader"),loadingMoreBtn:document.querySelector('button[data-button="load"]'),loadingTextElem:document.querySelector(".loading-more-image")};let d,n,F;const R=15;let g;i.formEl.addEventListener("submit",async e=>{e.preventDefault(),c();const r=new FormData(i.formEl).get("search-text").trim();if(r.length===0){l.show({close:!1,messageColor:"#FFFFFF",message:"Fill please field",position:"topRight",progressBar:!0,progressBarColor:"rgb(181, 27, 27)",color:"#EF4040",maxWidth:432});return}F=r,n=1,B(),E();try{const a=await f(r,n);if(u(),d=Math.ceil(a.totalHits/R),a.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}d<=n?(c(),l.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"})):y(),await w(a.hits)}catch(a){u(),c(),l.error({title:"Error",message:a,position:"topRight"})}});i.loadingMoreBtn.addEventListener("click",async()=>{if(n++,c(),d<n){c(),l.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}E();try{const e=await f(F,n);if(await A(e.hits),g=i.containerElem.firstElementChild.getBoundingClientRect().height*2,window.scrollBy({top:g,left:0,behavior:"smooth"}),d<n){c(),l.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}else y()}catch(e){hideLoadMoreButtonLoadMoreButton(),u(),l.error({title:"Error",message:e,position:"topRight"})}});
//# sourceMappingURL=index.js.map
