!function(){"use strict";document.addEventListener("DOMContentLoaded",(async function(){!function(){const e=document.querySelectorAll(".button-trriger"),t=document.querySelector(".modal"),o=document.querySelector(".modal__content"),c=document.querySelector(".modal__close");e.forEach((e=>{e.addEventListener("click",(()=>{t.classList.add("modal_active"),o.classList.add("modal__content_active")}))})),c.addEventListener("click",(()=>{t.classList.remove("modal_active"),o.classList.remove("modal__content_active")}))}(),function(){const e=document.querySelector(".preloader"),t=document.querySelector(".preloader__loader");window.addEventListener("load",(()=>{e.classList.add("preloader_hidden"),setTimeout((()=>{e.remove()}),900)}));const o=document.querySelectorAll("img");let c=0,r=o.length;const n=document.getElementById("percents");function a(){c++,console.log(c,parseInt(c/r*100)),n.innerText=parseInt(c/r*100),console.log("ParseInt:",parseInt(c/r*100)),100===parseInt(c/r*100)&&(n.innerText="LIGHT",t.classList.add("preloader__loader_isload"))}for(let e=0;e<r;e++){let t=new Image;t.onload=a,t.src=o[e].src}}(),function(){const e=document.querySelector(".header"),t=document.querySelector(".header__burger-icon"),o=document.querySelector(".header__burger-background"),c=document.querySelector(".header__button"),r=document.querySelector(".header__logo"),n=document.querySelector(".header__language");window.addEventListener("scroll",(function(){this.window.scrollY>0?e.classList.add("header_black"):e.classList.remove("header_black")})),t.addEventListener("click",(function(){t.classList.toggle("header__burger-icon_active"),o.classList.toggle("header__burger-background_active"),c.classList.toggle("header__button_active"),r.classList.toggle("header__logo_active"),n.classList.toggle("header__language_active")}))}()}))}();