!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){const r=document.querySelector(".burger"),n=document.querySelector(".nav-bar");document.querySelectorAll(".nav-bar a");r.addEventListener("click",()=>{n.classList.toggle("nav-active"),r.classList.toggle("toggle")});const o=document.querySelector(".carousel_track"),l=Array.from(o.children),c=document.querySelector(".btn-right"),s=document.querySelector(".btn-left"),i=document.querySelector(".carousel-nav"),a=Array.from(i.children),u=l[0].getBoundingClientRect().width;l.forEach((e,t)=>{e.style.left=u*t+"px"});const d=(e,t,r)=>{e.style.transform="translateX(-"+r.style.left+")",t.classList.remove("current"),r.classList.add("current")},m=(e,t)=>{e.classList.remove("current"),t.classList.add("current")},f=(e,t,r,n)=>{0===n?(t.classList.add("hidden"),r.classList.remove("hidden")):n===e.length-1?(t.classList.remove("hidden"),r.classList.add("hidden")):(t.classList.remove("hidden"),r.classList.remove("hidden"))};s.addEventListener("click",e=>{const t=o.querySelector(".current"),r=t.previousElementSibling,n=i.querySelector(".current"),a=n.previousElementSibling,u=l.findIndex(e=>e===r);d(o,t,r),m(n,a),f(l,s,c,u)}),c.addEventListener("click",e=>{const t=o.querySelector(".current"),r=t.nextElementSibling,n=i.querySelector(".current"),a=n.nextElementSibling,u=l.findIndex(e=>e===r);d(o,t,r),m(n,a),f(l,s,c,u)}),i.addEventListener("click",e=>{const t=e.target.closest("button");if(!t)return;const r=o.querySelector(".current"),n=i.querySelector(".current"),u=a.findIndex(e=>e===t),y=l[u];d(o,r,y),m(n,t),f(l,s,c,u)}),$("#sendMail").on("click",(function(){var e=$("#email").val().trim(),t=$("#name").val().trim(),r=$("#message").val().trim();return""==t?($("#errorMess").text("Please, enter your name"),!1):""==e?($("#errorMess").text("Please, enter your email"),!1):""==r?($("#errorMess").text("Please, enter your message"),!1):($("#errorMess").text(""),void $.ajax({url:"/mail.php",type:"POST",cache:!1,data:{name:t,email:e,message:r},dataType:"html",beforeSend:function(){$("#sendMail").prop("disabled",!0)},success:function(e){e?$("#mailForm").trigger("reset"):alert("Ooops, something went wrong:("),$("#sendMail").prop("disabled",!1)}}))}))}]);