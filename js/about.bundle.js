!function(){"use strict";document.addEventListener("DOMContentLoaded",(async function(){!function(){const e=document.querySelector(".header"),t=document.querySelector(".header__burger-icon"),c=document.querySelector(".header__burger-background"),r=document.querySelector(".header__button"),o=document.querySelector(".header__logo"),a=document.querySelector(".header__language");window.addEventListener("scroll",(function(){this.window.scrollY>0?e.classList.add("header_black"):e.classList.remove("header_black")})),t.addEventListener("click",(function(){t.classList.toggle("header__burger-icon_active"),c.classList.toggle("header__burger-background_active"),r.classList.toggle("header__button_active"),o.classList.toggle("header__logo_active"),a.classList.toggle("header__language_active")}))}()}))}();