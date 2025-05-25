document.addEventListener("DOMContentLoaded", () => {
  afiseazaCos();
  actualizeazaNumarProduse();
});

function afiseazaCos() {
  const cos = JSON.parse(localStorage.getItem("cos")) || [];
  const container = document.getElementById("cos-container");
  const checkoutButton = document.getElementById("checkout-button");
  const titluCos = document.getElementById("titlu-cos");
  const totalSection = document.getElementById("total-section");
  const footer = document.querySelector('.footer');
  container.innerHTML = "";
  let total = 0;


  function updateFooter() {
    const footer = document.querySelector('.footer');
    const checkoutForm = document.getElementById("checkout-form");
    const cos = JSON.parse(localStorage.getItem("cos")) || [];

    if (window.matchMedia("(min-width: 768px)").matches) {
      footer.style.width = "100%";

      if (checkoutForm.style.display === 'block') {

        footer.style.bottom = "-10vh";

      } else {
        footer.style.bottom = "0";
      }
    } else {
      footer.style.bottom = "-40vh" ;
    }
  }


  updateFooter();

  window.addEventListener("resize", updateFooter);



  if (cos.length === 0) {

    if (titluCos) titluCos.style.display = "none";
    if (totalSection) totalSection.style.display = "none";

    const mesajGol = document.createElement("div");
    mesajGol.style.textAlign = "center";
    mesajGol.style.padding = "20px";

    const mesajText = document.createElement("h2");
    mesajText.setAttribute("data-translate", "cartEmpty");
    mesajText.textContent = "Coșul dumneavoastră este gol"; 
    mesajText.style.color = "#ffbd49";
    mesajGol.appendChild(mesajText);
    
    const butonContinua = document.createElement("a");
    butonContinua.href = "../Pagini/produse.html"; 
    butonContinua.setAttribute("data-translate", "continueShopping");
    butonContinua.textContent = "Continuați cumpărăturile";
    butonContinua.style.display = "inline-block";
    butonContinua.style.marginTop = "1vh";
    butonContinua.style.padding = "10px 20px";
    butonContinua.style.backgroundColor = "#ffbd49";
    butonContinua.style.color = "white";
    butonContinua.style.textDecoration = "none";
    butonContinua.style.borderRadius = "5px";

    mesajGol.appendChild(butonContinua);
    container.appendChild(mesajGol);

    checkoutButton.style.display = "none";
    return;
  }

  if (titluCos) titluCos.style.display = "block";
  if (totalSection) totalSection.style.display = "block";

  cos.forEach((produs, index) => {
    const produsElement = document.createElement("div");
    produsElement.classList.add("cos-item");
    total += produs.pret * produs.cantitate;

    produsElement.innerHTML = `
          <div class="cos-item-row" style="display: flex; align-items: center; gap: 15px; padding: 10px; border-bottom: 1px solid #ddd;">
              <img src="${produs.imagine}" alt="${produs.nume}" class="product-image" style="width: 80px; height: auto; border-radius: 8px;">
              <h3 style="flex: 1; font-size: 16px; margin: 0;" class="produs-nume" data-translate="${produs.nume.replace(/\s+/g, '_')}">${produs.nume}</h3>
              <p style="margin: 0; font-size: 16px;"><span id="pret-${index}">${produs.pret * produs.cantitate}</span> MDL</p>
              <div class="quantity-control" style="display: flex; align-items: center; gap: 5px;">
                  <button onclick="schimbaCantitate(${index}, -1)" style="padding: 0; margin: 0; font-size: 23px; color: black; border: none; background: none; border-radius: 5px; cursor: pointer;">-</button>
                  <span id="cantitate-${index}" style="min-width: 20px; text-align: center; font-size: 16px;">${produs.cantitate}</span>
                  <button onclick="schimbaCantitate(${index}, 1)" style="padding: 0; margin:0; background:none; font-size: 23px; color: black; border: none; border-radius: 5px; cursor: pointer;">+</button>
              </div>
              <button onclick="stergeProdus(${index})" style="padding: 5px 10px; font-size: 20px; background-color: transparent; color: black; font-weight:bold; border: none; cursor: pointer; font-weight: bold;"><i class="fa-solid fa-x"></i></button>
          </div>
      `;
    container.appendChild(produsElement);
  });

  document.getElementById("total-mdl").textContent = total;
  actualizeazaNumarProduse();

  checkoutButton.style.display = cos.length === 0 ? "none" : "block";
}

function schimbaCantitate(index, modificare) {
  const cos = JSON.parse(localStorage.getItem("cos"));
  if (cos[index].cantitate + modificare > 0) {
    cos[index].cantitate += modificare;
  }
  localStorage.setItem("cos", JSON.stringify(cos));
  afiseazaCos();
  actualizeazaNumarProduse();
}

function stergeProdus(index) {
  const cos = JSON.parse(localStorage.getItem("cos"));
  cos.splice(index, 1);
  localStorage.setItem("cos", JSON.stringify(cos));
  afiseazaCos();
  actualizeazaNumarProduse();
}

function actualizeazaNumarProduse() {
  const cos = JSON.parse(localStorage.getItem("cos")) || [];
  const numarProduse = cos.reduce((total, produs) => total + produs.cantitate, 0);

  document.querySelector(".cart-count").textContent = numarProduse;
}

function openCheckoutForm() {
  const cartSection = document.querySelector(".cart");
  const checkoutForm = document.getElementById("checkout-form");
  const footer = document.querySelector('.footer');

  cartSection.style.display = 'block';
  checkoutForm.style.display = 'block';


  footer.style.width = "100%";
}

function closeCheckoutForm() {
  const cartSection = document.querySelector(".cart");
  const checkoutForm = document.getElementById("checkout-form");

  cartSection.style.display = 'block';
  checkoutForm.style.display = 'none';

  updateFooter();
}


function getTranslation(key) {
  const element = document.querySelector(`[data-translate="${key}"]`);
  return element ? element.textContent : '';
}

function getPlaceholder(key) {
  const element = document.querySelector(`[data-translate-placeholder="${key}"]`);
  return element ? element.placeholder : '';
}

function toggleDelivery() {
  const isLivrare = document.getElementById('delivery').checked;
  document.getElementById('livrare-fields').style.display = isLivrare ? 'block' : 'none';
  document.getElementById('pickup-address').style.display = isLivrare ? 'none' : 'block';

  document.getElementById('raion').required = isLivrare;
  document.getElementById('address').required = isLivrare;
}

function submitOrder() {
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const isLivrare = document.getElementById('delivery').checked;
  const isRidicare = document.getElementById('pickup').checked;

  const alertFillFields = getTranslation('alertFillFields');
  const alertPhoneInvalid = getTranslation('alertPhoneInvalid');
  const alertEmailInvalid = getTranslation('alertEmailInvalid');
  const alertThanks = getTranslation('alertThanks');
  const alertLivrareIncompleta = getTranslation('alertLivrareIncompleta');

  if (!firstName || !lastName || !phone || !email || (!isLivrare && !isRidicare)) {
    alert(alertFillFields);
    return;
  }

  const phoneRegex = /^[0-9]{9}$/;
  if (!phoneRegex.test(phone)) {
    alert(alertPhoneInvalid);
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert(alertEmailInvalid);
    return;
  }

  let address = '';
  let raion = '';
  let localitate = '';

  if (isLivrare) {
    const raionSelect = document.getElementById('raion');
    raion = raionSelect.options[raionSelect.selectedIndex].text;
    localitate = document.getElementById('localitate').value.trim();
    address = document.getElementById('address').value.trim();

    if (!raion || !localitate || !address || raionSelect.value === "") {
      alert(alertLivrareIncompleta);
      return;
    }
  } else {
    address = "Centrul Comercial Gemenii, etaj 2";
  }

  const cos = JSON.parse(localStorage.getItem("cos")) || [];
  const total = cos.reduce((sum, produs) => sum + produs.pret * produs.cantitate, 0);

  let fullAddress = isLivrare
  ? `${getTranslation("raion_label")}: ${raion}, ${getTranslation("localitate_label")}: ${localitate}, ${getTranslation("adresa_label")}: ${address}`
  : address;

  const personalizedMessage = alertThanks
    .replace("{firstName}", firstName)
    .replace("{lastName}", lastName)
    .replace("{total}", total)
    .replace("{phone}", phone)
    .replace("{email}", email)
    .replace("{address}", fullAddress);

  alert(personalizedMessage);
  window.location.href = "../index.html";
  localStorage.setItem("cos", JSON.stringify([]));
  afiseazaCos();

  document.getElementById("checkout-form").style.display = 'none';
  cartSection.style.display = 'block';
}
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

document.addEventListener('DOMContentLoaded', function() {
  const comandaButton = document.getElementById('checkout-button');

  comandaButton.addEventListener('click', function() {
    overlay.classList.remove('ascuns');
  });
})


