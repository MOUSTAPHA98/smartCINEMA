var activeSlider = () =>{
  console.log("SFS");
    var swiper = new Swiper('.homepage-content-swiper-container', {
      spaceBetween: 0,
      observer: true,
      observeParents: true,
      centeredSlides: true,
      speed: 2000,
      // effect: "fade",
      loop: true,
      autoplay: {
          delay: 5000,
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
};