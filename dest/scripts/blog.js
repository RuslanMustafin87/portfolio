!function(t){function e(o){if(n[o])return n[o].exports;var c=n[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,e),c.l=!0,c.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([,function(t,e){function n(t){$(r).css("top","-"+t+"px")}function o(t){$(i).removeClass("acco__item-active"),$(t).addClass("acco__item-active")}var c,r=document.querySelector(".blog-content__container"),i=document.querySelectorAll(".menu-acco__item");$(i).on("click",function(){var t=$(this).index();n((c=$(".blog__content-item").eq(t).position()).top),o($(this))})}]);