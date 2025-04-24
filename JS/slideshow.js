function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  const scrollAmount = 320;
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}


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


function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  const scrollAmount = 300;
  carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

window.onload = () => {
   document.body.classList.add('loaded');
  };

  
  const emailInput = document.getElementById('newsletter-email');
            const submitBtn = document.getElementById('newsletter-submit');
            const errorMsg = document.getElementById('newsletter-error');
            const successMsg = document.getElementById('newsletter-message');
          
            function submitNewsletter() {
              const email = emailInput.value.trim();
              const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
          
              errorMsg.style.display = 'none';
              successMsg.style.display = 'none';
          
              if (!isValidEmail) {
                errorMsg.style.display = 'block';
                return;
              }
          
              console.log("Email trimis:", email); 
          
              successMsg.style.display = 'block';
              successMsg.style.opacity = 0;
              successMsg.style.transition = 'opacity 0.5s ease-in-out';
              setTimeout(() => successMsg.style.opacity = 1, 100);
          
              emailInput.value = '';
            }
          
            submitBtn.addEventListener('click', submitNewsletter);
            emailInput.addEventListener('keydown', (e) => {
              if (e.key === 'Enter') submitNewsletter();
            });