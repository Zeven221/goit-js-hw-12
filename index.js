import{a as f,S as p,i as l}from"./assets/vendor-DirGshhi.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function d(t,n){const s="https://pixabay.com/api/",a={key:"55949954-f9f721bb22bd9fe0f33f87243",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:n};try{const e=await f.get(s,{params:a});return r.totalPages=Math.ceil(e.data.totalHits/a.per_page),e.data.hits}catch(e){console.log("error:",e)}}const y=new p(".gallery-item .gallery-link",{captionSelector:"img",captionsData:"alt",captionDelay:250});function g(t){const n=t.map(s=>h(s)).join("");i.containerElem.insertAdjacentHTML("beforeend",n),y.refresh()}function h(t){return`<li class="gallery-item">
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
`}function F(){i.containerElem.innerHTML=""}function b(){i.loadingElem.style.display="inline-block"}function u(){i.loadingElem.style.display="none"}function P(){i.loadingMoreBtn.style.display="block"}function m(){i.loadingMoreBtn.style.display="none"}const i={formEl:document.querySelector(".js-form"),containerElem:document.querySelector(".gallery"),loadingElem:document.querySelector(".loader"),loadingMoreBtn:document.querySelector('button[data-button="load"]')},r={currentPage:1,totalPages:0,currentSearch:""};i.formEl.addEventListener("submit",async t=>{t.preventDefault();const s=new FormData(i.formEl).get("search-text").trim();if(s.length===0){l.show({close:!1,messageColor:"#FFFFFF",message:"Fill please field",position:"topRight",progressBar:!0,progressBarColor:"rgb(181, 27, 27)",color:"#EF4040",maxWidth:432});return}r.currentPage!==1&&(r.currentPage=1),b(),F();try{r.currentSearch=s;const a=await d(s,r.currentPage);if(u(),a.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}g(a),r.totalPages<r.currentPage?(l.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"}),m()):P()}catch(a){u(),l.error({title:"Error",message:a,position:"topRight"})}});i.loadingMoreBtn.addEventListener("click",async()=>{r.currentPage++,r.totalPages<r.currentPage&&(l.error({message:"We're sorry, but you've reached the end of search results",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"}),m());const t=await d(r.currentSearch,r.currentPage);g(t)});
//# sourceMappingURL=index.js.map
