import{a as p,S as y,i as l}from"./assets/vendor-DirGshhi.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();async function g(t,i){const a="https://pixabay.com/api/",n={key:"55949954-f9f721bb22bd9fe0f33f87243",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:i};try{const e=await p.get(a,{params:n});return r.totalPages=Math.ceil(e.data.totalHits/n.per_page),e.data.hits}catch(e){console.log("error:",e)}}const h=new y(".gallery-item .gallery-link",{captionSelector:"img",captionsData:"alt",captionDelay:250});function m(t){const i=t.map(a=>F(a)).join("");s.containerElem.insertAdjacentHTML("beforeend",i),h.refresh()}function F(t){return`<li class="gallery-item">
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
`}function b(){s.containerElem.innerHTML=""}function E(){s.loadingElem.style.display="inline-block"}function d(){s.loadingElem.style.display="none"}function f(){s.loadingMoreBtn.style.display="block"}function c(){s.loadingMoreBtn.style.display="none"}const s={formEl:document.querySelector(".js-form"),containerElem:document.querySelector(".gallery"),loadingElem:document.querySelector(".loader"),loadingMoreBtn:document.querySelector('button[data-button="load"]'),loadingTextElem:document.querySelector(".loading-more-image")},r={currentPage:1,totalPages:0,currentSearch:""};s.formEl.addEventListener("submit",async t=>{t.preventDefault();const a=new FormData(s.formEl).get("search-text").trim();if(a.length===0){l.show({close:!1,messageColor:"#FFFFFF",message:"Fill please field",position:"topRight",progressBar:!0,progressBarColor:"rgb(181, 27, 27)",color:"#EF4040",maxWidth:432});return}r.currentPage!==1&&(r.currentPage=1),b();try{r.currentSearch=a,E();const n=await g(a,r.currentPage);if(d(),n.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}m(n),r.totalPages<r.currentPage?(c(),l.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"})):f()}catch{d(),c(),l.error({title:"Error",message:"While seach",position:"topRight"})}});s.loadingMoreBtn.addEventListener("click",async()=>{if(r.currentPage++,r.totalPages<r.currentPage){c(),l.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}try{c();const t=await g(r.currentSearch,r.currentPage);m(t),f()}catch{}});
//# sourceMappingURL=index.js.map
