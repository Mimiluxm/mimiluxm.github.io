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
                pageTitle: "Colecția dame",
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
                  product_added: "Produs adăugat în coș!",
                  all_products: "Toate Produsele",
                  bracelet: "Brățară",
                  necklace: "Colier",
                  navMensCollection: "Colecția bărbați",
                  navLuxuryCollection: "Colecția de Lux",
                  luxor_brass_name: "Brățara Luxor Brass",
                  infinit_bracelet: "Brățara Infinit",
                  julieta_bracelet: "Brățara Julieta",
                  sarpe_bracelet: "Brățara Șarpe",
                  richmond_bracelet: "Brățara richmond - BR065G",
                  monroe_bracelet: "Brățara Monroe",
                  cruce_bracelet: "Brățară pe cruce",
                  suflet_bracelet: "suflet_bracelet",
                  simpla_bracelet: "Brățara simplă",
                  mister_bracelet: "Brățara mister",
                  copii_bracelet: "Brățara copii",
                  diamant_a_bracelet: "Brățara Diamant A",
                  stelar_bracelet: "Brățara Stelar",
                  soare_bracelet: "Brățara Soare",
                  semicerc_bracelet: "Brățara semicerc",
                  diamant_bracelet: "Brățara Diamant",
                  cerc_lant_bracelet: "Brățara cerc pe lanț reglabil",
                  xo_bracelet: "Brățara XO",
                  trilion_bracelet: "Brățara Trilion",
                  patrat_bracelet: "Brățara pătrat",
                  sumbur_bracelet: "Brățara sumbur",
                  zeita_necklace: "Colier zeiță - COL003G",
                  diamant_inima_necklace: "Colier diamant cu inima - COL005G",
                  stea_mica_necklace: "Colier Stea mică",
                  price: "Preț",
                  sort: "Sortare ▼",
                  alpha: "în ordine alfabetică",
                  exp: "mai scump",
                  less: "mai ieftin",
                  default: "implicit",
              },
              en: {
                pageTitle: "Women's Collection",
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
                  product_added: "Product added to cart!",
                  all_products: "All Products",
                  bracelet: "Bracelet",
                  necklace: "Necklace",
                  navMensCollection: "Men's Collection",
                  navLuxuryCollection: "Luxury Collection",
                  luxor_brass_name: "Luxor Brass Bracelet",
      infinit_bracelet: "Infinity Bracelet",
      julieta_bracelet: "Julieta Bracelet",
      sarpe_bracelet: "Snake Bracelet",
      richmond_bracelet: "Richmond Bracelet - BR065G",
      monroe_bracelet: "Monroe Bracelet",
      cruce_bracelet: "Cross Bracelet",
      suflet_bracelet: "Soul Bracelet",
      simpla_bracelet: "Simple Bracelet",
      mister_bracelet: "Mister Bracelet",
      copii_bracelet: "Kids Bracelet",
      diamant_a_bracelet: "Diamond A Bracelet",
      stelar_bracelet: "Stellar Bracelet",
      soare_bracelet: "Sun Bracelet",
      semicerc_bracelet: "Half-circle Bracelet",
      diamant_bracelet: "Diamond Bracelet",
      cerc_lant_bracelet: "Circle on Adjustable Chain Bracelet",
      xo_bracelet: "XO Bracelet",
      trilion_bracelet: "Trilion Bracelet",
      patrat_bracelet: "Square Bracelet",
      sumbur_bracelet: "Sumbur Bracelet",
      zeita_necklace: "Goddess Necklace - COL003G",
      diamant_inima_necklace: "Diamond Heart Necklace - COL005G",
      stea_mica_necklace: "Small Star Necklace",
      addToCart: "Add to cart",
      price: "Price",
      sort: "Sort ▼",
                  alpha: "alphabetical order",
                  exp: "more expensive",
                  less: "less expensive",
                  default: "default",
              },
              ru: {
                pageTitle: "Женская коллекция",
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
                  product_added: "Товар добавлен в корзину!",
                  all_products: "Все товары",
                  bracelet: "Браслет",
                  necklace: "Ожерелье",
                  navMensCollection: "Мужская коллекция",
                  navLuxuryCollection: "Коллекция Люкс",
                  luxor_brass_name: "Браслет Люксор Брасс",
                  infinit_bracelet: "Браслет Бесконечность",
                  julieta_bracelet: "Браслет Джульетта",
                  sarpe_bracelet: "Браслет Змея",
                  richmond_bracelet: "Браслет Ричмонд - BR065G",
                  monroe_bracelet: "Браслет Монро",
                  cruce_bracelet: "Браслет Крест",
                  suflet_bracelet: "Браслет Душа",
                  simpla_bracelet: "Простой Браслет",
                  mister_bracelet: "Браслет Тайна",
                  copii_bracelet: "Детский Браслет",
                  diamant_a_bracelet: "Браслет Бриллиант A",
                  stelar_bracelet: "Браслет Звёздный",
                  soare_bracelet: "Браслет Солнце",
                  semicerc_bracelet: "Браслет Полукруг",
                  diamant_bracelet: "Браслет Бриллиант",
                  cerc_lant_bracelet: "Браслет Круг на Регулируемой Цепочке",
                  xo_bracelet: "Браслет XO",
                  trilion_bracelet: "Браслет Триллион",
                  patrat_bracelet: "Браслет Квадрат",
                  sumbur_bracelet: "Браслет Сумбур",
                  zeita_necklace: "Ожерелье Богиня - COL003G",
                  diamant_inima_necklace: "Ожерелье с Сердцем из Бриллианта - COL005G",
                  stea_mica_necklace: "Ожерелье Маленькая Звезда",
                  addToCart: "Добавить в корзину",
                  price: "Цена",
                  sort: "Сортировка ▼",
                  alpha: "алфавитный порядок",
                  exp: "дороже",
                  less: "дешевле",
                  default: "по умолчанию",
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
          




const rangeMin = document.getElementById('rangeMin');
const rangeMax = document.getElementById('rangeMax');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const rangeTrack = document.getElementById('rangeTrack');
const categoryFilter = document.getElementById('categoryFilter');
const MAX_PRICE = 1200;

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



function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function selectOption(element, id) {
  document.querySelectorAll('.tick').forEach(t => t.style.visibility = 'hidden');

  const tick = document.getElementById("tick-" + id);
  const menu = document.getElementById("dropdownMenu");

  if (currentSelection === id) {
    currentSelection = "default";
    document.getElementById("tick-default").style.visibility = 'visible';
    resetProductsOrder();
  } else {
    currentSelection = id;
    tick.style.visibility = 'visible';

    if (id === "default") {
      resetProductsOrder();
    } else {
      sortProducts(id);
    }
  }

  menu.style.display = "none";
}

function sortProducts(criteria) {
  const container = document.querySelector(".products");
  const products = Array.from(container.querySelectorAll(".product"));

  let sorted = [...products];

  if (criteria === "alphabetical") {
    sorted.sort((a, b) => {
      const nameA = a.querySelector("h3").textContent.trim().toLowerCase();
      const nameB = b.querySelector("h3").textContent.trim().toLowerCase();
      return nameA.localeCompare(nameB);
    });
  } else if (criteria === "expensive") {
    sorted.sort((a, b) => parseInt(b.dataset.price) - parseInt(a.dataset.price));
  } else if (criteria === "cheap") {
    sorted.sort((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
  } else if (criteria === "default") {
    sorted.sort((a, b) => 
      resetProductsOrder()
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

window.onload = function () {
  const selectedLanguage = getLanguage();
  setPageLanguage(selectedLanguage);

  const container = document.querySelector(".products");
  originalOrder = Array.from(container.querySelectorAll(".product"));
  currentSelection = "default";
document.getElementById("tick-default").style.visibility = 'visible';

  updateSliderTrack();
  applyFilters();
};
