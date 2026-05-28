import{a as y,S as E,i as l}from"./assets/vendor-DirGshhi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();async function m(e,s){const a="https://pixabay.com/api/",n={key:"55949954-f9f721bb22bd9fe0f33f87243",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s};try{const t=await y.get(a,{params:n});return o.totalPages=Math.ceil(t.data.totalHits/n.per_page),t.data.hits}catch(t){console.log("error:",t)}}const h=new E(".gallery-item .gallery-link",{captionSelector:"img",captionsData:"alt",captionDelay:250});function b(e){const s=e.map(a=>f(a)).join("");r.containerElem.innerHTML=s,h.refresh()}function F(e){const s=e.map(a=>f(a)).join("");r.containerElem.insertAdjacentHTML("beforeend",s),h.refresh()}function f(e){return`<li class="gallery-item">
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
`}function w(){r.containerElem.innerHTML=""}function L(){r.loadingElem.style.display="inline-block"}function u(){r.loadingElem.style.display="none"}function p(){r.loadingMoreBtn.style.display="block"}function c(){r.loadingMoreBtn.style.display="none"}const r={formEl:document.querySelector(".js-form"),containerElem:document.querySelector(".gallery"),loadingElem:document.querySelector(".loader"),loadingMoreBtn:document.querySelector('button[data-button="load"]'),loadingTextElem:document.querySelector(".loading-more-image")},o={currentPage:1,totalPages:0,currentSearch:""},g={height:0};r.formEl.addEventListener("submit",async e=>{e.preventDefault();const a=new FormData(r.formEl).get("search-text").trim();if(a.length===0){l.show({close:!1,messageColor:"#FFFFFF",message:"Fill please field",position:"topRight",progressBar:!0,progressBarColor:"rgb(181, 27, 27)",color:"#EF4040",maxWidth:432});return}o.currentPage!==1&&(o.currentPage=1),w();try{o.currentSearch=a,L();const n=await m(a,o.currentPage);if(u(),n.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}await b(n),g.height=r.containerElem.firstChild.getBoundingClientRect().height*2,window.scrollBy({top:g.height,left:0,behavior:"smooth"}),o.totalPages<o.currentPage?(c(),l.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"})):p()}catch(n){u(),c(),l.error({title:"Error",message:n,position:"topRight"})}});r.loadingMoreBtn.addEventListener("click",async()=>{if(o.currentPage++,o.totalPages<o.currentPage){c(),l.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}try{r.loadingTextElem.classList.add("show"),c();const e=await m(o.currentSearch,o.currentPage);await F(e),g.height=g.height*2,window.scrollBy({top:g.height,left:0,behavior:"smooth"}),r.loadingTextElem.classList.remove("show"),p()}catch(e){c(),l.error({title:"Error",message:e,position:"topRight"})}});
//# sourceMappingURL=index.js.map
