import{a as h,S as y,i as l}from"./assets/vendor-DirGshhi.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();async function u(t,n){const s="https://pixabay.com/api/",a={key:"55949954-f9f721bb22bd9fe0f33f87243",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:n};try{const e=await h.get(s,{params:a});return o.totalPages=Math.ceil(e.data.totalHits/a.per_page),e.data.hits}catch(e){console.log("error:",e)}}const E=new y(".gallery-item .gallery-link",{captionSelector:"img",captionsData:"alt",captionDelay:250});function m(t){const n=t.map(s=>b(s)).join("");r.containerElem.insertAdjacentHTML("beforeend",n),E.refresh()}function b(t){return`<li class="gallery-item">
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
`}function F(){r.containerElem.innerHTML=""}function w(){r.loadingElem.style.display="inline-block"}function g(){r.loadingElem.style.display="none"}function f(){r.loadingMoreBtn.style.display="block"}function c(){r.loadingMoreBtn.style.display="none"}const r={formEl:document.querySelector(".js-form"),containerElem:document.querySelector(".gallery"),loadingElem:document.querySelector(".loader"),loadingMoreBtn:document.querySelector('button[data-button="load"]'),loadingTextElem:document.querySelector(".loading-more-image")};let p=0;const o={currentPage:1,totalPages:0,currentSearch:""};r.formEl.addEventListener("submit",async t=>{t.preventDefault();const s=new FormData(r.formEl).get("search-text").trim();if(s.length===0){l.show({close:!1,messageColor:"#FFFFFF",message:"Fill please field",position:"topRight",progressBar:!0,progressBarColor:"rgb(181, 27, 27)",color:"#EF4040",maxWidth:432});return}o.currentPage!==1&&(o.currentPage=1),F();try{o.currentSearch=s,w();const a=await u(s,o.currentPage);if(g(),a.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}m(a),p=r.containerElem.firstChild.getBoundingClientRect().y+2,window.scrollBy({top:r.containerElem.firstChild.getBoundingClientRect().y,left:0,behavior:"smooth"}),o.totalPages<o.currentPage?(c(),l.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"})):f()}catch(a){g(),c(),l.error({title:"Error",message:a,position:"topRight"})}});r.loadingMoreBtn.addEventListener("click",async()=>{if(o.currentPage++,o.totalPages<o.currentPage){c(),l.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}try{r.loadingTextElem.classList.add("show"),c();const t=await u(o.currentSearch,o.currentPage);m(t),p=r.containerElem.firstChild.getBoundingClientRect().y+2,window.scrollBy({top:r.containerElem.firstChild.getBoundingClientRect().y,left:0,behavior:"smooth"}),r.loadingTextElem.classList.remove("show"),f()}catch(t){c(),l.error({title:"Error",message:t,position:"topRight"})}});
//# sourceMappingURL=index.js.map
