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
                  max_price_prefix: "Preț Maxim:",
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
      max_price_prefix: "Max Price:",
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
                  max_price_prefix: "Максимальная цена:",
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


  function applyFilters() {
  const category = document.getElementById('categoryFilter').value;
  const maxPrice = parseInt(document.getElementById('priceRange').value, 10);
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const productCategory = product.getAttribute('data-category');
    const productPrice = parseInt(product.getAttribute('data-price'), 10);

    const matchesCategory = (category === 'all' || productCategory === category);
    const matchesPrice = productPrice <= maxPrice;

    product.style.display = (matchesCategory && matchesPrice) ? '' : 'none';
  });
}

document.getElementById('priceRange').addEventListener('input', function () {
  const value = parseInt(this.value, 10);
  document.getElementById('priceValue').textContent = value;
  applyFilters();
});