(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))h(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&h(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function h(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();new Swiper(".Happy-swiper",{effect:"fade",pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".happy_btn_next",prevEl:".happy_btn_prev",clickable:!0},loop:!0,autoplay:!0});new Swiper(".brand-swiper",{effect:"fade",navigation:{nextEl:".tab-next-1",prevEl:".tab-prev-1",clickable:!0},loop:!0});new Swiper(".now-swiper",{effect:"fade",navigation:{nextEl:".tab-next-2",prevEl:".tab-prev-2",clickable:!0},loop:!0});const z=document.querySelector(".mobile-btn"),E=document.querySelector(".mobile-menu");z.addEventListener("click",function(){E.classList.toggle("show"),E.classList.contains("show")?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"});const l=document.querySelector(".go_top");window.addEventListener("scroll",()=>{window.scrollY>1500?l.classList.add("visible"):l.classList.remove("visible")});l.addEventListener("click",function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});const i=document.querySelectorAll(".lnb_list a"),P=document.querySelectorAll(".gnb_title"),q=document.querySelectorAll(".lnb_list"),A=document.querySelector(".gnb_bg"),C=document.querySelector(".nav");P.forEach(e=>{e.addEventListener("mouseover",()=>{q.forEach(o=>{o.classList.add("show")}),A.classList.add("show")})});i.forEach(e=>{e.addEventListener("mouseover",()=>{i.forEach(o=>{o!==e&&(o.style.color="#7a7a7a")})}),e.addEventListener("mouseout",()=>{i.forEach(o=>{o.style.color=""})})});C.addEventListener("mouseleave",()=>{q.forEach(e=>{e.classList.remove("show")}),A.classList.remove("show")});const N=document.querySelector(".global"),d=document.querySelector(".lang"),T=document.querySelector(".korean");N.addEventListener("mouseover",()=>{T.classList.add("active"),d.classList.add("show")});d.addEventListener("mouseleave",()=>{d.classList.remove("show")});document.querySelectorAll(".spc_now, .career_support").forEach(e=>{window.innerWidth<=1024?e.removeAttribute("data-aos"):(e.classList.contains("spc_now")&&e.setAttribute("data-aos","fade-up"),e.classList.contains("career_support")&&e.setAttribute("data-aos","fade-left"))});document.querySelectorAll(".textBrand-1").forEach(e=>{e.setAttribute("data-aos","fade-up"),e.setAttribute("data-aos-delay","-50"),e.setAttribute("data-aos-easing","linear")});document.querySelectorAll(".pageBtn-1").forEach(e=>{e.setAttribute("data-aos","fade-up"),e.setAttribute("data-aos-easing","linear"),e.setAttribute("data-aos-offset","-50")});document.querySelectorAll(".textBrand-2, .pageBtn-2").forEach(e=>{e.setAttribute("data-aos","fade-up"),e.setAttribute("data-aos-easing","linear"),e.setAttribute("data-aos-offset","-50"),e.setAttribute("data-aos-delay","500")});const _=()=>{document.querySelectorAll(".textBrand-2, .pageBtn-2").forEach(e=>{e.setAttribute("data-aos","fade-up"),e.setAttribute("data-aos-easing","linear"),e.setAttribute("data-aos-offset","-50"),window.innerWidth<=1024?e.setAttribute("data-aos-delay","300"):e.setAttribute("data-aos-delay","500")})};window.addEventListener("load",_);window.addEventListener("resize",_);const n=document.querySelector(".sl_eat"),u=document.querySelector(".sl_drink"),m=document.querySelector(".sl_enjoy"),y=document.querySelector(".eatImage"),k=document.querySelector(".drinkImage"),B=document.querySelector(".enjoyImage"),L=document.querySelector(".br_01"),x=document.querySelector(".br_02"),O=document.querySelector(".br_03");function p(){n.classList.remove("active"),u.classList.remove("active"),m.classList.remove("active")}function w(){y.classList.remove("show"),k.classList.remove("show"),B.classList.remove("show")}function b(){L.classList.remove("move"),x.classList.remove("move"),O.classList.remove("move")}window.addEventListener("load",function(){n.classList.add("active"),y.classList.add("show"),L.classList.remove("move")});n.addEventListener("click",function(){w(),p(),b(),y.classList.add("show"),n.classList.add("active"),L.classList.add("move")});u.addEventListener("click",function(){w(),p(),b(),k.classList.add("show"),u.classList.add("active"),x.classList.add("move")});m.addEventListener("click",function(){w(),p(),b(),B.classList.add("show"),m.classList.add("active"),O.classList.add("move")});const c=document.querySelector(".sl_news"),f=document.querySelector(".sl_magazine"),v=document.querySelector(".sl_sns"),g=document.querySelector(".now_01"),j=document.querySelector(".now_02"),I=document.querySelector(".now_03");c.classList.add("active");g.classList.add("move");function S(e,o){[c,f,v].forEach(a=>{a.classList.toggle("active",a===o)}),[g,j,I].forEach(a=>{a.classList.toggle("move",a===e)})}c.addEventListener("click",()=>S(g,c));f.addEventListener("click",()=>S(j,f));v.addEventListener("click",()=>S(I,v));const Y=document.querySelector(".select"),D=document.querySelector(".select_wrap"),K=document.querySelector(".ver_rod");function M(){Y.addEventListener("click",function(){const e=D.classList.toggle("show");K.style.display=e?"none":"block"})}M();AOS.init();
