function adaugaInCos(nume, imagine, pret) {
  const cos = JSON.parse(localStorage.getItem("cos")) || [];
  let produsExistent = cos.find(produs => produs.nume === nume);

  if (produsExistent) {
      produsExistent.cantitate += 1;
  } else {
      cos.push({ nume, imagine, pret, cantitate: 1 });
  }

  localStorage.setItem("cos", JSON.stringify(cos));

  afiseazaNotificare();

  actualizeazaNumarProduse();

  console.log("Produs adăugat în coș!");
}

function afiseazaNotificare() {
  const notificare = document.getElementById("notific1");
  const spin = document.querySelector(".spin");
  const bifa = document.querySelector(".bifa");
  const mesaj = document.getElementById("mesaj");

  spin.style.display = "block"; 
  bifa.style.display = "none"; 

  notificare.style.display = "block";  
  setTimeout(() => {
    notificare.style.opacity = 1; 
  }, 10);

  setTimeout(() => {
    spin.style.display = "none"; 
    bifa.style.display = "block";  
  }, 1000);  

  setTimeout(() => {
    notificare.style.opacity = 0;  
    setTimeout(() => {
      notificare.style.display = "none";  
    }, 500);  
  }, 3000);  
}


function actualizeazaNumarProduse() {
  const cos = JSON.parse(localStorage.getItem("cos")) || [];
  const numarProduse = cos.reduce((total, produs) => total + produs.cantitate, 0);

  document.querySelector(".cart-count").textContent = numarProduse;
}

document.addEventListener("DOMContentLoaded", () => {
  actualizeazaNumarProduse();
});

function openLightbox(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  lightboxImage.src = imageSrc;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}

const productImages = document.querySelectorAll('.product-image');
productImages.forEach(image => {
  image.addEventListener('click', () => {
      openLightbox(image.src);
  });
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }

    const footerTop = footer.getBoundingClientRect().top;
    const buttonHeight = scrollToTopBtn.offsetHeight;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight - buttonHeight) {
        scrollToTopBtn.style.bottom = `${windowHeight - footerTop + 20}px`;
    } else {
        scrollToTopBtn.style.bottom = "20px"; 
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


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