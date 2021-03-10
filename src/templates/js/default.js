//==========================================================================
//common.js
//==========================================================================

//userAgent
//---------------------------------------------------------
function userAgent() {
  const ua = navigator.userAgent;
  if (ua.indexOf('iPhone') != -1 || ua.indexOf('iPod') != -1 || ua.indexOf('Android') != -1 && ua.indexOf('Mobile') != -1) {
    //sp
    $('body').addClass('is-view-sp');
  } else if (ua.indexOf('iPad') != -1 || ua.indexOf('Android') != -1) {
    //tab
    $('body').addClass('is-view-tab');
  } else {
    // pc
    $('body').addClass('is-view-pc');
  }
}

//userAgentIE
//---------------------------------------------------------
function userAgentIE() {
  const ua = window.navigator.userAgent.toLowerCase();
  const uaVersion = window.navigator.appVersion.toLowerCase();
  //ie
  if (ua.indexOf('msie') != -1 || ua.indexOf('trident') !== -1) {
    $('body').addClass('is-view-ie');
  }
}

//pagetop
//---------------------------------------------------------
function pagetop() {
  const pagetopTrigger = $('.js-pagetop');
  pagetopTrigger.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  $(window).on("load scroll", function(){
    if ($(this).scrollTop() > 20) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });
}


//animation
//---------------------------------------------------------
function scrollAnimation() {
  const animationTarget = $('.js-animate');
  animationTarget.addClass('is-animate');
  $(window).on('load scroll', function(){
    animationTarget.each(function(){
      let targetPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > targetPos - windowHeight + 100){
        $(this).addClass('is-animated');
      }
    });
  });
}

//init
//---------------------------------------------------------
$(function(){
  userAgent();
  userAgentIE();
  pagetop();
  scrollAnimation();
});


//menu_mobile
//---------------------------------------------------------
$(document).ready(function ($) {
  $(".menu-bar-mobile").click(function () {
    $(".mobile-main-menu").toggleClass("active");
    $(".backdrop__body-backdrop___1rvky").addClass("active");
  });
  $(".backdrop__body-backdrop___1rvky").click(function () {
    $("body").removeClass("show-search");
    $(".mobile-main-menu").removeClass("active");
    $(".backdrop__body-backdrop___1rvky").removeClass("active");
  });
  $(window).resize(function () {
    if ($(window).width() > 1023) {
      $(".mobile-main-menu").removeClass("active");
      $(".backdrop__body-backdrop___1rvky").removeClass("active");
    }
  });
  $(".backdrop__body-backdrop___1rvky").removeClass("active");
  $(".ng-has-child a svg").on("click", function () {
    var $this = $(this);
    $this.parent().next().slideToggle();
    $(this).toggleClass("active");
    return false;
  });
  
});
