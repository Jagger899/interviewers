!function(){"use strict";document.addEventListener("DOMContentLoaded",(async function(){!function(){const e=document.querySelectorAll(".button-trriger"),t=document.querySelector(".modal"),o=document.querySelector(".modal__content"),r=document.querySelector(".modal__close"),c=document.getElementById("modal-first-button"),n=document.getElementById("modal-second-button"),d=document.querySelector(".modal__request");e.forEach((e=>{e.addEventListener("click",(()=>{t.classList.add("modal_active"),o.classList.add("modal__content_active"),d.classList.remove("modal__request_active")}))})),r.addEventListener("click",(()=>{t.classList.remove("modal_active"),o.classList.remove("modal__content_active")})),c.addEventListener("click",(()=>{o.classList.remove("modal__content_active"),d.classList.add("modal__request_active")})),n.addEventListener("click",(()=>{t.classList.remove("modal_active")}))}(),function(){const e=document.querySelector(".preloader"),t=document.querySelector(".preloader__loader"),o=document.querySelector(".preloader__percents");window.location.href,window.addEventListener("load",(()=>{e.classList.add("preloader_hidden"),setTimeout((()=>{e.remove()}),900)}));const r=document.querySelectorAll("img");let c=0,n=r.length;const d=document.getElementById("percents");function a(){console.log(n),0===n&&(d.innerText="LIGHT",o.innerText=o.innerText.slice(0,5)),c++,d.innerText=parseInt(c/n*100),console.log("ParseInt:",parseInt(c/n*100)),100===parseInt(c/n*100)&&(d.innerText="LIGHT",t.classList.add("preloader__loader_isload"),o.innerText=o.innerText.slice(0,5))}for(let e=0;e<n;e++){let t=new Image;t.onload=a,t.src=r[e].src}}(),function(){document.querySelector(".dropdown");const e=document.querySelector(".dropdown__box"),t=document.querySelector(".dropdown__box-modal"),o=document.querySelectorAll(".dropdown__menu"),r=document.querySelectorAll(".dropdown__menu-item"),c=document.querySelector(".dropdown__svg-arrow"),n=document.querySelectorAll(".dropdown__text");t.addEventListener("click",(()=>{c.classList.toggle("dropdown__svg-arrow_rotate"),o.forEach((e=>{e.classList.toggle("dropdown__menu_open")}))})),e.addEventListener("click",(()=>{c.classList.toggle("dropdown__svg-arrow_rotate"),o.forEach((e=>{e.classList.toggle("dropdown__menu_open")}))})),r.forEach((e=>{e.addEventListener("click",(()=>{n.forEach((t=>{t.innerText=e.innerText})),o.forEach((e=>{e.classList.remove("dropdown__menu_open")})),c.classList.remove("dropdown__svg-arrow_rotate"),r.forEach((e=>{e.classList.remove("dropdown__menu-item_active")})),e.classList.add("dropdown__menu-item_active")}))}))}(),document.querySelector(".background-trriger").classList.add("header__white-background"),document.querySelector(".button-trriger").classList.add("header__white-button"),document.querySelectorAll(".text-trriger").forEach((e=>{e.classList.add("header__white-text")})),document.querySelectorAll(".footer__text-trriger").forEach((e=>{e.classList.add("footer__white-text")})),document.querySelector(".background-trriger-tr").classList.add("header__transperent"),function(){const e=document.querySelector(".header"),t=document.querySelector(".header__burger-icon"),o=document.querySelector(".header__burger-background"),r=document.querySelector(".header__button"),c=document.querySelector(".header__logo"),n=document.querySelector(".header__language");window.addEventListener("scroll",(function(){this.window.scrollY>0?e.classList.add("header_black"):e.classList.remove("header_black")})),t.addEventListener("click",(function(){t.classList.toggle("header__burger-icon_active"),o.classList.toggle("header__burger-background_active"),r.classList.toggle("header__button_active"),c.classList.toggle("header__logo_active"),n.classList.toggle("header__language_active")}))}()}))}();