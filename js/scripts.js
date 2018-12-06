(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// import {saludo, despedida} from "./modules/example";
//
// saludo();
// despedida();
// ((d,w)=>{
//   // alert('hola dessde archivo');
//   const banner = document.getElementById('banner-home');
//   const header = d.getElementById('main-header');
//
//   const screenHeight = banner.getBoundingClientRect().height;
//   console.log(screenHeight);
//
//   w.addEventListener('scroll', e=>{
//     if (e.pageY >= screenHeight/2){
//       header.classList.add('fixed');
//     }else {
//       header.classList.remove('fixed');
//     }
//   });
//
// })(document,window);
;

(function (d, w, c) {
  var dHeight = w.height();
  var header = $('#main-header');
  var fscroll = function fscroll() {
    if (d.scrollTop() >= dHeight * 0.75) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  };

  d.on('scroll', function () {
    fscroll();
  });
})($(document), $(window), console);

(function (d) {
  var year = d.querySelector('#year');
  year.innerHTML = new Date().getFullYear();
})(document);

(function (d) {
  var links = $('#main-header');
  links.on('click', 'a', function (e) {
    e.preventDefault();
    var $t = $(this),
        link = $t.attr('href');
    $('html, body').animate({
      scrollTop: $(link).offset().top
    }, 2000);
  });
})(document);

$(function () {
  var form = $('#contact');
  var valid = false;
  form.on('submit', function (e) {
    e.preventDefault();
    var name = $('#name'),
        phone = $('#phone'),
        email = $('#email'),
        msg = $('#msg');
    if (name.val() != '' && phone.val() != '' && email.val() != '' && msg.val() != '') {
      // alert(name.val()+phone.val()+email.val()+msg.val())
      valid = true;
    }
    if (valid) {
      var data = $(this).serializeArray(),
          url = $(this).attr('action'),
          type = $(this).attr('method');
      $.ajax({
        url: url,
        crossDomain: true,
        type: type,
        dataType: 'json',
        data: data,
        success: function success(res) {
          console.log(res);
          var resul = $('#result');
          if (res.status) {
            resul.removeClass('error');
            resul.slideDown();
            $('#send').text('Enviado').attr('disabled', 'true').css({ background: '#ccc', color: 'green', cursor: 'none' });
          } else {
            resul.addClass('error');
            resul.slideDown();
            setTimeout(function () {
              resul.slideUp();
              // resul.removeClass('error');
            }, 3000);
          }
        },
        error: function error() {
          var resul = $('#result');
          resul.addClass('error');
          resul.slideDown();
          setTimeout(function () {
            resul.slideUp();
            // resul.removeClass('error');
          }, 3000);
        }
      });
    }
  });
});

$(function () {
  var bp = 940;
  var win = $(window).width();
  var menu = $('#main-menu');
  var header = $('#main-header');
  var headerH = header.height();
  setTop(headerH);
  var mediaquery = window.matchMedia("(max-width: 940px)");
  if (mediaquery.matches) {

    $(window).on('scroll', function (e) {
      headerH = header.height();
      setTop(headerH);
    });
  } else {
    // mediaquery no es 600
  }
  function setTop(height) {
    menu.css('top', height);
  }
});

$(function () {
  var toggleEl = $('#main-nav-toggle');
  var menu = $('#main-menu');
  var mediaquery = window.matchMedia("(max-width: 940px)");
  if (mediaquery.matches) {
    toggleEl.on('click', function () {
      menu.slideToggle(300);
    });
  }
});

$(function () {
  var toggleEl = $('#main-nav-toggle');
  var menu = $('#main-menu');
  var mediaquery = window.matchMedia("(max-width: 940px)");
  if (mediaquery.matches) {
    menu.on('click', 'a', function () {
      toggleEl.trigger("click");
    });
  }
});

var imgPath = 'images/';
var imgSliderArray = [imgPath + 'slider1.jpeg', imgPath + 'slider2.jpeg'];

var createModalStart = function createModalStart(w, d, c) {
  // const sliderContainer = d.querySelector('#modalStart > .modal__container'),
  //     sliderHeight = sliderContainer.clientHeight
  // console.log(sliderHeight)

};

(function (w, d, c) {
  d.addEventListener('load', function (e) {
    createModalStart(w, d, c);
  });
})(window, document, console.log);

(function () {
  var body = $('body');
  // let body = document.body;
  if (body.hasClass('page-gdl')) {
    $('.gdl').addClass('show');
  } else if (body.hasClass('page-qrt')) {
    $('.qrt').addClass('show');
  } else if (body.hasClass('page-leon')) {
    $('.leon').addClass('show');
  }
  var mainHeader = $('#main-header');
  var mainHeaderTop = mainHeader.offset().top;
  var mainTopheight = $('#mainTop').height();
  mainHeader.css('top', mainTopheight + 'px');
  $(window).on('scroll', function (e) {
    var windosScroll = $(window).scrollTop();
    if (windosScroll >= mainTopheight) {
      mainHeader.addClass('fixed');
    } else {
      mainHeader.removeClass('fixed');
    }
  });
})();

},{}]},{},[1]);

//# sourceMappingURL=scripts.js.map
