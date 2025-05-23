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


            const translations = {
              ro: {
                pageTitle: "Colecția bărbați",
                  navAbout: "Despre noi",
                  navProducts: "Produse",
                  navMensCollection: "Colecția bărbați",
                  navWomensCollection: "Colecția dame",
                  navLuxuryCollection: "Colecția de Lux",
                  navContact: "Contacte",
                  pages: "Pagini",
                  aboutUs: "Despre noi",
                  products: "Produse",
                  contacts: "Contacte",
                  delivery: "Livrare și retur",
                  sizes: "Mărimi Bijuterii", 
                  contacts1: "Contacte",
                  gemenii: "Centrul Comercial Gemenii, etaj 2",
                  more: "Vrei mai mult?",
                  newsofert: "Abonează-te pentru noutăți și oferte:",
                  send: "Trimite",
                  pleaseValid: "Te rugăm să introduci un email valid.",
                  thanks: "✔️ Mulțumim pentru abonare!",
                  copywr: "© 2025. Realizat în cadrul competiției „Tekwill Junior Ambassadors”.",
                  email: "Emailul tău",
                  all_products: "Toate Produsele",
                  bracelet: "Brățară",
                  watch: "Ceas",
                  buttonhole: "Butoniere",
                  tag: "TAG",
                  collection_women: "Colecția dame",
                  pageTitle: "Colecția bărbați",
                  navAbout: "Despre noi",
                  navProducts: "Produse",
                  product_added: "Produs adăugat în coș!",
                  women_collection: "Colecția dame",
                  addToCart: "Adaugă în coș",
                  casadeiTitle: "Brățara Casadei",
                  elitaTitle: "Brățară Elita - 21 CM - BR002S",
                  rolexTitle: "Brățara Rolex",
                  rebelityTitle: "Brățara Rebelity - BR017G",
                  impletitaTitle: "Brățara Împletită",
                  vinciTitle: "Brățara Vinci",
                  baraDublaTitle: "Brățara Bară Dublă",
                  parisTitle: "Ceas Paris mic",
                  liberialTitle: "Ceas LIBERIAL W022MG+B",
                  neguroTitle: "Ceas NEGURO",
                  poseidonTitle: "Ceas POSEIDON",
                  silverTitle: "Ceas Silver for Man W003MS+B",
                  victoriaTitle: "Ceas VICTORIA",
                  jupiterTitle: "Ceas Jupiter",
                  cristianoTitle: "Ceas Cristiano",
                  londonTitle: "Ceas LONDON",
                  winnerMilionTitle: "Ceas winner milion MECANIC",
                  winnerLoveTitle: "Ceas winner Love MECANIC",
                  winnerBlackTitle: "Ceas winner Love MECANIC W033S+G+B",
                  cosmosGoldTitle: "Ceas Forsinning COSMOS MECANIC",
                  cosmosSilverTitle: "Ceas Forsinning COSMOS MECANIC W035B+S",
                  bonjourTitle: "Ceas BONJOUR W029FG+S",
                  butoniereTitle: "Butoniere",
                  tagTitle: "TAG",
                  price: "Preț",
                  sort: "SORTARE ▼"
              },
              en: {
                pageTitle: "Men's Collection",
                  navAbout: "About Us",
                  navProducts: "Products",
                  navMensCollection: "Men's Collection",
                  navWomensCollection: "Women's Collection",
                  navLuxuryCollection: "Luxury Collection",
                  navContact: "Contact",
                  pages: "Pages",
                  aboutUs: "About Us",
                  products: "Products",
                  contacts: "Contacts",
                  delivery: "Delivery & return",
                  sizes: "Jewelry Sizes",
                  contacts1: "Contacts",
                  gemenii: "Gemenii Shopping Center, 2nd floor",
                  more: "Newsletter",
                  newsofert: "Subscribe for news and offers:",
                  send: "Send",
                  pleaseValid: "Please enter a valid email.",
                  thanks: "✔️ Thank you for subscribing!",
                  copywr: "© 2025. Made as part of the 'Tekwill Junior Ambassadors' competition.",
                  email: "Your email",
                  all_products: "All Products",
                  bracelet: "Bracelet",
                  watch: "Watch",
                  buttonhole: "Boutonniere",
                  tag: "TAG",
                  collection_women: "Women's Collection",
                  pageTitle: "Men's Collection",
                  navAbout: "About Us",
                  navProducts: "Products",
                  product_added: "Product added to cart!",
                  women_collection: "Women's Collection",
                  addToCart: "Add to cart",
                  casadeiTitle: "Casadei Bracelet",
                  elitaTitle: "Elita Bracelet - 21 CM - BR002S",
                  rolexTitle: "Rolex Bracelet",
                  rebelityTitle: "Rebelity Bracelet - BR017G",
                  impletitaTitle: "Braided Bracelet",
                  vinciTitle: "Vinci Bracelet",
                  baraDublaTitle: "Double Bar Bracelet",
                  parisTitle: "Small Paris Watch",
                  liberialTitle: "LIBERIAL Watch W022MG+B",
                  neguroTitle: "Neguro Watch",
                  poseidonTitle: "POSEIDON Watch",
                  silverTitle: "Silver Watch for Man W003MS+B",
                  victoriaTitle: "VICTORIA Watch",
                  jupiterTitle: "Jupiter Watch",
                  cristianoTitle: "Cristiano Watch",
                  londonTitle: "LONDON Watch",
                  winnerMilionTitle: "Winner Million Watch MECHANICAL",
                  winnerLoveTitle: "Winner Love Watch MECHANICAL",
                  winnerBlackTitle: "Winner Love Watch MECHANICAL W033S+G+B",
                  cosmosGoldTitle: "Forsinning COSMOS Watch MECHANICAL",
                  cosmosSilverTitle: "Forsinning COSMOS Watch MECHANICAL W035B+S",
                  bonjourTitle: "BONJOUR W029FG+S Watch",
                  butoniereTitle: "Boutonniere",
                  tagTitle: "TAG",
                  price: "Price",
                  sort: "SORT ▼"          
                },
              ru: {
                pageTitle: "Мужская коллекция",
                  navAbout: "O нас",
                  navProducts: "Товары",
                  navMensCollection: "Мужская коллекция",
                  navWomensCollection: "Женская коллекция",
                  navLuxuryCollection: "Коллекция Люкс",
                  navContact: "Контакты",
                  pages: "Страницы",
                  aboutUs: "O нас",
                  products: "Товары",
                  contacts: "Контакты",
                  delivery: "Доставка & Возврат",
                  sizes: "Размеры украшений",
                  contacts1: "Контакты",
                  gemenii: "Торговый центр Gemenii, 2-й этаж",
                  more: "Рассылка новостей",
                  newsofert: "Подпишитесь на новости и предложения:",
                  send: "Отправить",
                  pleaseValid: "Пожалуйста, введите действительный адрес электронной почты.",
                  thanks: "✔️ Спасибо за подписку!",
                  copywr: "© 2025. Этот сайт создан в рамках конкурса 'Tekwill Junior Ambassadors'.",
                  email: "Ваш email",
                  all_products: "Все товары",
                  bracelet: "Браслет",
                  watch: "Часы",
                  buttonhole: "Бутоньерки",
                  tag: "Тег",
                  collection_women: "Женская коллекция",
                  pageTitle: "Мужская коллекция",
                  navAbout: "O нас",
                  navProducts: "Товары",
                  product_added: "Товар добавлен в корзину!",
                  women_collection: "Женская коллекция",
                  addToCart: "Добавить в корзину",
                  casadeiTitle: "Браслет Casadei",
                  elitaTitle: "Браслет Elita - 21 CM - BR002S",
                  rolexTitle: "Браслет Rolex",
                  rebelityTitle: "Браслет Rebelity - BR017G",
                  impletitaTitle: "Браслет Плетёный",
                  vinciTitle: "Браслет Vinci",
                  baraDublaTitle: "Браслет Bară Dublă",
                  parisTitle: "Часы Paris маленькие",
                  liberialTitle: "Часы LIBERIAL W022MG+B",
                  neguroTitle: "Часы Neguro",
                  poseidonTitle: "Часы POSEIDON",
                  silverTitle: "Часы Silver для мужчин W003MS+B",
                  victoriaTitle: "Часы VICTORIA",
                  jupiterTitle: "Часы Jupiter",
                  cristianoTitle: "Часы Cristiano",
                  londonTitle: "Часы LONDON",
                  winnerMilionTitle: "Часы Winner Million MECHANICAL",
                  winnerLoveTitle: "Часы Winner Love MECHANICAL",
                  winnerBlackTitle: "Часы Winner Love MECHANICAL W033S+G+B",
                  cosmosGoldTitle: "Часы Forsinning COSMOS MECHANICAL",
                  cosmosSilverTitle: "Часы Forsinning COSMOS MECHANICAL W035B+S",
                  bonjourTitle: "Часы BONJOUR W029FG+S",
                  butoniereTitle: "Бутоньерка",
                  tagTitle: "TAG",
                  price: "Цена",
                  sort: "СОРТИРОВКА ▼"
              }
          };
                
            
          
          
          function switchLanguage(lang) {
              document.querySelectorAll("[data-translate]").forEach(el => {
                  const key = el.getAttribute("data-translate");
                  if (translations[lang] && translations[lang][key]) {
                      el.textContent = translations[lang][key];
                  }
              });
          
              document.querySelectorAll(".language-flags a").forEach(a => {
                  a.classList.remove("active");
              });
              document.getElementById(`flag-${lang}`).classList.add("active");
          
              document.title = translations[lang].pageTitle;
          
              localStorage.setItem('selectedLanguage', lang);
          }
          
          document.getElementById("flag-ro").addEventListener("click", function(e) {
              e.preventDefault();
              switchLanguage("ro");
          });
          document.getElementById("flag-en").addEventListener("click", function(e) {
              e.preventDefault();
              switchLanguage("en");
          });
          document.getElementById("flag-ru").addEventListener("click", function(e) {
              e.preventDefault();
              switchLanguage("ru");
          });
          
          function setLanguage(lang) {
              switchLanguage(lang);
          }
          
          function getLanguage() {
              const urlParams = new URLSearchParams(window.location.search);
              const langFromUrl = urlParams.get('lang');
              return langFromUrl || localStorage.getItem('selectedLanguage') || 'en'; 
          }
          
          window.onload = function() {
              const selectedLanguage = getLanguage(); 
              setPageLanguage(selectedLanguage);   
          };
          
          function setPageLanguage(lang) {
              document.querySelectorAll(".language-flags a").forEach(a => {
                  a.classList.remove("active");
              });
          
              if (lang === 'ro') {
                  document.getElementById('flag-ro').classList.add('active');
              } else if (lang === 'en') {
                  document.getElementById('flag-en').classList.add('active');
              } else if (lang === 'ru') {
                  document.getElementById('flag-ru').classList.add('active');
              }
          
              document.querySelectorAll("[data-translate]").forEach(el => {
                  const key = el.getAttribute("data-translate");
                  if (translations[lang] && translations[lang][key]) {
                      el.textContent = translations[lang][key];
                  }
              });

              document.title = translations[lang].pageTitle;
          }

          function setPageLanguage(lang) {
            document.querySelectorAll("[data-translate]").forEach(el => {
              const key = el.getAttribute("data-translate");
              if (translations[lang][key]) {
                el.textContent = translations[lang][key];
              }
            });
          
            document.querySelectorAll("[data-translate-placeholder]").forEach(el => {
              const key = el.getAttribute("data-translate-placeholder");
              if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
              }
            });
          
            document.title = translations[lang].pageTitle;
          
            document.querySelectorAll(".language-flags a").forEach(a => a.classList.remove("active"));
            document.getElementById(`flag-${lang}`).classList.add("active");
          }
          
          function switchLanguage(lang) {
            setPageLanguage(lang);
            localStorage.setItem("selectedLanguage", lang);
          }
          
          
          ["ro", "en", "ru"].forEach(lang => {
            document.getElementById(`flag-${lang}`).addEventListener("click", function (e) {
              e.preventDefault();
              switchLanguage(lang);
            });
          });
          
          window.onload = function () {
            const savedLang = localStorage.getItem("selectedLanguage") || "ro";
            switchLanguage(savedLang);
          };




const rangeMin = document.getElementById('rangeMin');
const rangeMax = document.getElementById('rangeMax');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const rangeTrack = document.getElementById('rangeTrack');
const categoryFilter = document.getElementById('categoryFilter');
const MAX_PRICE = 5500;

function updateSliderTrack() {
  const min = parseInt(rangeMin.value);
  const max = parseInt(rangeMax.value);
  const left = (min / MAX_PRICE) * 100;
  const right = (max / MAX_PRICE) * 100;
  rangeTrack.style.left = `${left}%`;
  rangeTrack.style.width = `${right - left}%`;
}

function applyFilters() {
  const min = parseInt(rangeMin.value);
  const max = parseInt(rangeMax.value);
  const selectedCategory = categoryFilter.value;
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const price = parseInt(product.getAttribute('data-price'));
    const category = product.getAttribute('data-category');
    const matchesPrice = price >= min && price <= max;
    const matchesCategory = selectedCategory === "all" || category === selectedCategory;

    product.style.display = (matchesPrice && matchesCategory) ? 'block' : 'none';
  });
}

function syncFromSliders() {
  let min = parseInt(rangeMin.value);
  let max = parseInt(rangeMax.value);
  if (min > max) [min, max] = [max, min];
  if (minPriceInput) minPriceInput.value = min;
  if (maxPriceInput) maxPriceInput.value = max;
  updateSliderTrack();
  applyFilters();
}

function syncFromInputs() {
  let min = parseInt(minPriceInput.value);
  let max = parseInt(maxPriceInput.value);
  if (isNaN(min) || min < 0) min = 0;
  if (isNaN(max) || max > MAX_PRICE) max = MAX_PRICE;
  if (min > max) min = max;
  rangeMin.value = min;
  rangeMax.value = max;
  updateSliderTrack();
  applyFilters();
}

rangeMin.addEventListener('input', syncFromSliders);
rangeMax.addEventListener('input', syncFromSliders);
if (minPriceInput && maxPriceInput) {
  minPriceInput.addEventListener('input', syncFromInputs);
  maxPriceInput.addEventListener('input', syncFromInputs);
}
categoryFilter.addEventListener('change', applyFilters);

updateSliderTrack();
applyFilters();



let currentSelection = null; 
let originalOrder = [];

window.onload = function() {
  const container = document.querySelector(".products");
  originalOrder = Array.from(container.querySelectorAll(".product"));
};

function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function selectOption(element, id) {
  const tick = document.getElementById("tick-" + id);
  const menu = document.getElementById("dropdownMenu");

  if (currentSelection === id) {
    tick.style.visibility = 'hidden';
    currentSelection = null;
    resetProductsOrder();
  } else {
    document.querySelectorAll('.tick').forEach(t => t.style.visibility = 'hidden');
    tick.style.visibility = 'visible';
    currentSelection = id;
    sortProducts(id);
  }

  menu.style.display = "none";
}

function sortProducts(criteria) {
  const container = document.querySelector(".products");
  const products = Array.from(container.querySelectorAll(".product"));
  let sorted = [];

  if (criteria === "alphabetical") {
    sorted = products.sort((a, b) => {
      const nameA = a.querySelector("h3").textContent.trim();
      const nameB = b.querySelector("h3").textContent.trim();
      return nameA.localeCompare(nameB);
    });
  } else if (criteria === "expensive") {
    sorted = products.sort((a, b) =>
      parseFloat(b.dataset.price) - parseFloat(a.dataset.price)
    );
  } else if (criteria === "cheap") {
    sorted = products.sort((a, b) =>
      parseFloat(a.dataset.price) - parseFloat(b.dataset.price)
    );
  }

  sorted.forEach(product => container.appendChild(product));
}

function resetProductsOrder() {
  const container = document.querySelector(".products");
  originalOrder.forEach(product => container.appendChild(product));
}

window.onclick = function (e) {
  if (!e.target.matches('.dropdown-toggle')) {
    const menu = document.getElementById("dropdownMenu");
    if (menu && menu.style.display === "block") {
      menu.style.display = "none";
    }
  }
};