document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',   
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.nav-right',
      prevEl: '.nav-left',
    },
  });
});




window.onload = () => {
   document.body.classList.add('loaded');
  };

  