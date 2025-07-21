import{S as y,a as d,i as c}from"./assets/vendor-CFAwn0qA.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n={form:document.querySelector(".js-form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".js-gallery")};function h(){n.loader.classList.remove("is-hidden")}function u(){n.loader.classList.add("is-hidden")}function p(){n.gallery.innerHTML=""}function m(o){return o.map(({webformatURL:r,largeImageURL:s,tags:a,likes:e,views:t,comments:i,downloads:g})=>`
      <li>
        <a href="${s}">
          <img src="${r}" alt="${a}" loading="lazy" width="360" height="200"/>
        </a>
        <div>
          <p>likes: <span>${e}</span></p>
          <p>views: <span>${t}</span></p>
          <p>comments: <span>${i}</span></p>
          <p>downloads: <span>${g}</span></p>
        </div>
      </li>`).join("")}let l=null;function f(){l?l.refresh():l=new y(".js-gallery a")}const b=o=>{const r={params:{key:"51390030-b864bce351d7615980478c23b",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}};return d.get("https://pixabay.com/api/",r)},L=()=>{const o={params:{key:"51390030-b864bce351d7615980478c23b",q:"random",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}};return d.get("https://pixabay.com/api/",o)},v=async()=>{try{const o=await L(""),r=m(o.data.hits);n.gallery.innerHTML=r,f()}catch{c.error({message:"что пошло не так"})}finally{u()}};v();const w=async o=>{try{o.preventDefault(),h(),p();const r=o.target.elements["search-text"].value.trim();if(r===""){c.info({message:"Введите поисковый запрос!"});return}const{data:s}=await b(r);if(!s.hits.length){c.error({message:"Нет результатов по вашему запросу"});return}const a=m(s.hits);n.gallery.innerHTML=a,f()}catch{c.error({message:"что пошло не так"}),p()}finally{u()}};n.form.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
