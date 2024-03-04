$(document).ready(function () {

  $("body").click(function (e) {
    if (!$(e.target).is(".language_block *,.language_block")) {
      $(".language_block").removeClass("active");
    }

    if (
      !$(e.target).is(
        ".mobile__menu .right_block, .mobile__menu .right_block *"
      )
    ) {
      $(".mobile__menu").removeClass("active");
      $("body").removeClass("opened");
    }
  });

  $(document).on("click", ".open_sidebar", function () {
    $(".mobile__menu").addClass("active");
    $("body").addClass("opened");
  });
  var main_swiper = new Swiper(".main-swiper", {
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".main-swiper  .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    observer: true,
    observeParents: true,
    loop: true,
  });

  var specialtyUnivercity = new Swiper(".swiper-teachers", {
    slidesPerView: 1.4,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".specialty-univercity .next-button",
      prevEl: ".specialty-univercity .prev-button",
    },
    loop: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
    spaceBetween: 30,
  },
    },
  });


  var newsUnivercity = new Swiper(".news-univercity .swiper-container", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".news-univercity .next-button",
      prevEl: ".news-univercity .prev-button",
    },
    loop: true,
    breakpoints: {
      767: {
    spaceBetween: 30,
    slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  $(".header-bottom").clone(true).appendTo(".header-fixed .container");

  (() => {
    let lastpos, header = document.querySelector('.header-fixed');
    window.addEventListener('scroll', () => {
      if($(window).scrollTop()<$(window).innerHeight()
      ){$('.header-fixed').removeClass('inMain')}
      else $('.header-fixed').addClass('inMain')
      const winpos = window.pageYOffset;
      if (winpos < lastpos) {
        header.classList.add('moveon');
        header.classList.remove('moveout');
      }
      else {
        header.classList.add('moveout');
        header.classList.remove('moveon');
      }
      if (winpos < header.offsetHeight) {
        if (header.classList.contains('moveon'))
          header.classList.add('moveon');
      }
      lastpos = document.documentElement.scrollTop;
    });
  })();


  // $(".cloneHeader .hdr_top").remove();
  function checkPositionHeader() {
    // if ($(this).scrollTop() > 0) {
    //   $("body").addClass("header_fixed");
    // } else {
    //   $("body").removeClass("header_fixed");
    // }
  }
  $(window).scroll(function () {
    if ($(window).width() > 1249) {
      if ($(this).scrollTop() > $(window).height() / 1.5) {
        $(".cloneHeader").addClass("opened");
      } else {
        $(".cloneHeader").removeClass("opened");
      }
    }

    if ($(this).scrollTop() > $(window).height()) {
      $(".scrollup").addClass("showed");
    } else {
      $(".scrollup").removeClass("showed");
    }
    checkPositionHeader();
  });
  checkPositionHeader();


  ////////////////////////////////////////////////////////////////////////////////////////


  $(".scrollup").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  $("footer .lists h5").on("click", function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
  });

  var swiperSpecial = new Swiper(".our_specials .swiper-container", {
    slidesPerView: 4,
    spaceBetween: 24,
    autoplay: {
      delay: 18000,
    },
    loop: true,
    pagination: {
      el: ".our_specials .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2,
      },
      1250: {
        slidesPerView: 3,
      },
    },
  });

  var specilats = new Swiper(".specialts .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: ".specialts  .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".specialts .right_btn",
      prevEl: ".specialts .left_btn",
    },
    loop: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
        simulateTouch: true,
      },
    },
  });


  $("#myTab a").on("click", function () {
    specilats[0].init()
    specilats[1].init()
  });

  var partner_swiper = new Swiper(".partner_swiper", {
    slidesPerView: 1.2,
    spaceBetween: 6,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 2.1,
      },
      991: {
        slidesPerView: 3.1,
      },
    },
  });

  var reelSwiper = new Swiper(".reel_swiper", {
    slidesPerView: 1.2,
    spaceBetween: 6,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 2.1,
      },
      991: {
        slidesPerView: 3.1,
      },
    },
  });

  var swiperWhyMe = new Swiper(".why_us .swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 24,
    autoplay: {
      delay: 300000,
    },
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".why_us .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      767: {
        spaceBetween: 10,
      },
    },
  });

  var swiperFaculties = new Swiper(".home_faculty .swiper-container", {
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
      nextEl: ".home_faculty .swiper-button-next",
      prevEl: ".home_faculty .swiper-button-prev",
    },
    autoplay: {
      delay: 10300,
    },
    loop: true,
    pagination: {
      el: ".home_faculty .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
      991: {},
      1250: {
        slidesPerView: 2,
      },
    },
  });

  var swiperReviews = new Swiper(".home_reviews_swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".home_reviews .swiper-button-next",
      prevEl: ".home_reviews .swiper-button-prev",
    },
    autoplay: {
      delay: 10000,
    },
    loop: true,
    pagination: {
      el: ".home_reviews .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  var swiperPartner = new Swiper(".home_partners_swiper", {
    slidesPerView: 6,
    spaceBetween: 24,
    autoplay: {
      delay: 17000,
    },
    loop: true,
    pagination: {
      el: ".home_partners_swiper .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".swiper_news .swiper-container", {
    slidesPerView: 3,
    spaceBetween: 16,
    autoplay: {
      delay: 12000,
    },
    loop: true,
    pagination: {
      el: ".swiper_news .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper_news .swiper-button-next",
      prevEl: ".swiper_news .swiper-button-prev",
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2,
      },
      1250: {
        slidesPerView: 2,
      },
    },
  });

  var home_advantage = new Swiper(".home_advantage .swiper-container", {
    slidesPerView: 3,
    spaceBetween: 24,
    simulateTouch: false,
    pagination: {
      el: ".home_advantage .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      // 767: {
      //   slidesPerView: 1,
      // },
      // 991: {
      //   slidesPerView: 1.6,
      //   simulateTouch: true,
      // },
    },
  });

  var students = new Swiper(".students .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: ".students .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".students .right_btn",
      prevEl: ".students .left_btn",
    },
    loop: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
        simulateTouch: true,
      },
    },
  });

  var video_lessons = new Swiper(".video_lessons .swiper-container", {
    slidesPerView: 1.6,
    spaceBetween: 12,
    pagination: {
      el: ".video_lessons .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".video_lessons .right_btn",
      prevEl: ".video_lessons .left_btn",
    },
    loop: true,
    breakpoints: {
      767: {
        spaceBetween: 24,
        slidesPerView: 2.2,
      },
      991: {
        slidesPerView: 3.2,
        simulateTouch: true,
      },
    },
  });

  var videoSwiper = new Swiper(".swiper-video", {
    slidesPerView: 1,
    spaceBetween: 0,
    // effect: "fade",
    speed: 800,
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".video_section .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".video_section .btn_swiper .right_btn",
      prevEl: ".video_section .btn_swiper .left_btn",
    },
    loop: true,
    breakpoints: {
      // 767: {
      //   slidesPerView: 1,
      // },
      // 991: {
      //   slidesPerView: 1.6,
      //   simulateTouch: true,
      // },
    },
  });

  var swiper = new Swiper(".about .swiper-container", {
    effect: "coverflow",
    speed: 800,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.2,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 1800,
      modifier: 0.8,
      slideShadows: true,
    },
    pagination: {
      el: ".about .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  // var students = new Swiper(".news_general .swiper-container", {
  //   slidesPerView: 2,
  //   spaceBetween: 24,
  //   pagination: {
  //     el: ".news_general .swiper-pagination",
  //     type: "bullets",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".news_general .right_btn",
  //     prevEl: ".news_general .left_btn",
  //   },
  //   loop: true,
  //   breakpoints: {
  //     // 767: {
  //     //   slidesPerView: 1,
  //     // },
  //     // 991: {
  //     //   slidesPerView: 1.6,
  //     //   simulateTouch: true,
  //     // },
  //   },
  // });

  $(".btn_favourite").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
  });

  $(".language_block").on("click", function (e) {
    // e.preventDefault();
    $(this).toggleClass("active");
  });

  $("[data-fancybox]").fancybox({
    youtube: {
      controls: 1,
      showinfo: 1,
    },
    vimeo: {
      color: "f00",
    },
  });



  $(document).on("click", ".toggle_password span", function () {
    $(this).parent().toggleClass("show");
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  });

  $(document).on("click", ".mobile__menu .close", function () {
    $(".mobile__menu").removeClass("active");
    $("body").removeClass("opened");
  });

  if ($(window).width() < 1024) {
    $("section.home_faculty .right__faculty .swiper-container").after(
      $("section.home_faculty .all_faculty ")
    );
  }

  $(document).on("click", ".home_faculty ul li a", function (e) {
    e.preventDefault();
    $(".home_faculty ul li a").removeClass("active");
    $(this).addClass("active");
  });

  $.mask.definitions["9"] = "";
  $.mask.definitions["d"] = "[0-9]";
  $("input[type='tel']").mask("+998 dd ddd dd dd");

  $(".passport1").mask("aa");

  $(".passport2").mask("ddd dd dd");
  $(".jshshir").mask("dd dd dd dd dd dd dd");
  $(".referral").mask("dd dd dd dd dd dd");
  $(".End_year_education").mask("dddd");
});
