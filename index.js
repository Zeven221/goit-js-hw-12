import{a as p,S as y,i as n}from"./assets/vendor-DirGshhi.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();async function m(t,l){const s="https://pixabay.com/api/",i={key:"55949954-f9f721bb22bd9fe0f33f87243",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:l};try{const e=await p.get(s,{params:i});return r.totalPages=Math.ceil(e.data.totalHits/i.per_page),e.data.hits}catch(e){console.log("error:",e)}}const b=new y(".gallery-item .gallery-link",{captionSelector:"img",captionsData:"alt",captionDelay:250});function h(t){const l=t.map(s=>E(s)).join("");o.containerElem.insertAdjacentHTML("beforeend",l),b.refresh()}function E(t){return`<li class="gallery-item">
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
`}function F(){o.containerElem.innerHTML=""}function w(){o.loadingElem.style.display="inline-block"}function u(){o.loadingElem.style.display="none"}function f(){o.loadingMoreBtn.style.display="block"}function c(){o.loadingMoreBtn.style.display="none"}const o={formEl:document.querySelector(".js-form"),containerElem:document.querySelector(".gallery"),loadingElem:document.querySelector(".loader"),loadingMoreBtn:document.querySelector('button[data-button="load"]'),loadingTextElem:document.querySelector(".loading-more-image")},r={currentPage:1,totalPages:0,currentSearch:""},g={height:0};o.formEl.addEventListener("submit",async t=>{t.preventDefault();const s=new FormData(o.formEl).get("search-text").trim();if(s.length===0){n.show({close:!1,messageColor:"#FFFFFF",message:"Fill please field",position:"topRight",progressBar:!0,progressBarColor:"rgb(181, 27, 27)",color:"#EF4040",maxWidth:432});return}r.currentPage!==1&&(r.currentPage=1),F();try{r.currentSearch=s,w();const i=await m(s,r.currentPage);if(u(),i.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}h(i),g.height=o.containerElem.firstChild.getBoundingClientRect().height*2,window.scrollBy({top:g.height,left:0,behavior:"smooth"}),r.totalPages<r.currentPage?(c(),n.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"})):f()}catch(i){u(),c(),n.error({title:"Error",message:i,position:"topRight"})}});o.loadingMoreBtn.addEventListener("click",async()=>{if(r.currentPage++,r.totalPages<r.currentPage){c(),n.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}try{o.loadingTextElem.classList.add("show"),c();const t=await m(r.currentSearch,r.currentPage);h(t),g.height=g.height*2,window.scrollBy({top:g.height,left:0,behavior:"smooth"}),o.loadingTextElem.classList.remove("show"),f()}catch(t){c(),n.error({title:"Error",message:t,position:"topRight"})}});
//# sourceMappingURL=index.js.map
