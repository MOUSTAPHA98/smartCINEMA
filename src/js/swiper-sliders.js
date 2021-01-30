var activeSlider = () =>{
    var main_swiper = new Swiper('.homepage-content-swiper-container', {
      spaceBetween: 0,
      observer: true,
      observeParents: true,
      centeredSlides: true,
      speed: 2000,
      loop: true,
      autoplay: {
          delay: 10000,
          disableOnInteraction: false,
        },
      pagination: {
      el: '.homepage-content-swiper-pagination',
      clickable: true,
      },
      navigation: {
      nextEl: '.homepage-content-swiper-button-next',
      prevEl: '.homepage-content-swiper-button-prev',
      },
  });

  var pickedmovies_swiper = new Swiper('.homepage-random-slider-container', {
    observer: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      571: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 15
      }
    },
    observeParents: true,
    slidesPerView: 5,
    centeredSlides: false,
    spaceBetween: 15,
    speed: 2000,
    loop: true,
    
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
    navigation: {
    nextEl: '.homepage-pickedmovies-swiper-button-next',
    prevEl: '.homepage-pickedmovies-swiper-button-prev',
    },
    
});


var movie_cast_Slider = new Swiper('.movie-cast-swiper-container', {
    observer: true,
    observeParents: true,
    slidesPerView: 5,
    centeredSlides: false,
    spaceBetween: 30,
    speed: 2000,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      425: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      578: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      // 1200: {
      //   slidesPerView: 5,
      //   spaceBetween: 30,
      // },
    },
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
});


};


