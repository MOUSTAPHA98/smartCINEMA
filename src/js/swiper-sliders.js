var activeSlider = () =>{
    var main_swiper = new Swiper('.homepage-content-swiper-container', {
      spaceBetween: 0,
      observer: true,
      observeParents: true,
      centeredSlides: true,
      speed: 2000,
      // effect: "fade",
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

  var trendMovies_swiper = new Swiper('.homepage-trend-slider-container', {
    observer: true,
    observeParents: true,
    slidesPerView: 5,
    centeredSlides: false,
    spaceBetween: 15,
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
    // pagination: {
    // el: '.homepage-content-swiper-pagination',
    // clickable: true,
    // },
    navigation: {
    nextEl: '.homepage-trendmovies-swiper-button-next',
    prevEl: '.homepage-trendmovies-swiper-button-prev',
    },
});
};