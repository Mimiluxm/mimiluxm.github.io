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
                  pageTitle: "Mărimi Bijuterii",
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
                  title: "Tabel de mărimi",
                  sizetitle: "Tabel de mărimi",
                  sizesubtitle1: "Recomandările noastre",
                  sizesubtitle2: "Pentru torturi cu etaj superior",
                  sizetip0a: "Pentru torturile de 10 cm recomandăm un topper de 12 cm pentru",
                  sizetip0b: "un efect vizual echilibrat",
                  sizetip1: "12 cm recomandăm să folosiți un topper de tort de 12 cm",
                  sizetip2: "15 cm recomandăm să folosiți un topper de tort de 15 cm",
                  sizetip3: "18 cm recomandăm să folosiți un topper de tort de 18 cm",
                  sizetip4: "20 cm recomandăm să folosiți un topper de tort de 20 cm",
                },
                en: {
                  pageTitle: "Jewelry Sizes",
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
                  sizetitle: "Size Chart",
                  sizesubtitle1: "Our Recommendations",
                  sizesubtitle2: "For tiered cakes",
                  sizetip0a: "For 10 cm cakes we recommend a 12 cm topper for",
                  sizetip0b: "a balanced visual effect",
                  sizetip1: "For 12 cm cakes use a 12 cm topper",
                  sizetip2: "For 15 cm cakes use a 15 cm topper",
                  sizetip3: "For 18 cm cakes use an 18 cm topper",
                  sizetip4: "For 20 cm cakes use a 20 cm topper",
                },
                ru: {
                  pageTitle: "Размеры украшений",
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
                  sizetitle: "Таблица размеров",
                  sizesubtitle1: "Наши рекомендации",
                  sizesubtitle2: "Для многоярусных тортов",
                  sizetip0a: "Для тортов 10 см мы рекомендуем топпер 12 см для",
                  sizetip0b: "визуального баланса",
                  sizetip1: "Для тортов 12 см используйте топпер 12 см",
                  sizetip2: "Для тортов 15 см используйте топпер 15 см",
                  sizetip3: "Для тортов 18 см используйте топпер 18 см",
                  sizetip4: "Для тортов 20 см используйте топпер 20 см",
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