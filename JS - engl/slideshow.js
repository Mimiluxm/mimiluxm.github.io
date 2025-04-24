const slideTrack = document.querySelector('.slide-track');
const products = Array.from(document.querySelectorAll('.product'));

function duplicateSlides() {
  const trackWidth = slideTrack.scrollWidth; 
  const containerWidth = document.querySelector('.product-slideshow').offsetWidth;

  while (slideTrack.scrollWidth < containerWidth * 2) {
    products.forEach(product => {
      const clonedProduct = product.cloneNode(true);
      slideTrack.appendChild(clonedProduct);
    });
  }
}

duplicateSlides();


// Example for setting the active flag based on the language
const setActiveFlag = (language) => {
  const flags = document.querySelectorAll('.language-flags a');
  flags.forEach(flag => {
    flag.classList.remove('active'); // Remove active class from all
  });
  
  const activeFlag = document.querySelector(`.language-flags a[title="${language}"]`);
  if (activeFlag) {
    activeFlag.classList.add('active'); // Add active class to the selected language
  }
}

// For example, if the page is in Romanian, call:
setActiveFlag('Română');