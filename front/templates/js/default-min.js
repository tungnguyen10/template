function userAgent(){const o=navigator.userAgent;-1!=o.indexOf("iPhone")||-1!=o.indexOf("iPod")||-1!=o.indexOf("Android")&&-1!=o.indexOf("Mobile")?$("body").addClass("is-view-sp"):-1!=o.indexOf("iPad")||-1!=o.indexOf("Android")?$("body").addClass("is-view-tab"):$("body").addClass("is-view-pc")}function userAgentIE(){const o=window.navigator.userAgent.toLowerCase();window.navigator.appVersion.toLowerCase();-1==o.indexOf("msie")&&-1===o.indexOf("trident")||$("body").addClass("is-view-ie")}function pagetop(){$(".js-pagetop").click(function(){return $("body,html").animate({scrollTop:0},500),!1}),$(window).on("load scroll",function(){$(this).scrollTop()>20?$(".back-to-top").fadeIn():$(".back-to-top").fadeOut()})}function scrollAnimation(){const o=$(".js-animate");o.addClass("is-animate"),$(window).on("load scroll",function(){o.each(function(){let o=$(this).offset().top;$(window).scrollTop()>o-$(window).height()+100&&$(this).addClass("is-animated")})})}$(function(){userAgent(),userAgentIE(),pagetop(),scrollAnimation()}),$(document).ready(function(o){o(".menu-bar-mobile").click(function(){o(".mobile-main-menu").toggleClass("active"),o(".backdrop__body-backdrop___1rvky").addClass("active")}),o(".backdrop__body-backdrop___1rvky").click(function(){o("body").removeClass("show-search"),o(".mobile-main-menu").removeClass("active"),o(".backdrop__body-backdrop___1rvky").removeClass("active")}),o(window).resize(function(){o(window).width()>1023&&(o(".mobile-main-menu").removeClass("active"),o(".backdrop__body-backdrop___1rvky").removeClass("active"))}),o(".backdrop__body-backdrop___1rvky").removeClass("active"),o(".ng-has-child a svg").on("click",function(){return o(this).parent().next().slideToggle(),o(this).toggleClass("active"),!1})});