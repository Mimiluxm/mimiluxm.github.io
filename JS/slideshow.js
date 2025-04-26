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





const setActiveFlag = (language) => {
  const flags = document.querySelectorAll('.language-flags a');
  flags.forEach(flag => {
    flag.classList.remove('active'); 
  });
  
  const activeFlag = document.querySelector(`.language-flags a[title="${language}"]`);
  if (activeFlag) {
    activeFlag.classList.add('active');
  }
}
setActiveFlag('Română');



window.onload = () => {
   document.body.classList.add('loaded');
  };

  