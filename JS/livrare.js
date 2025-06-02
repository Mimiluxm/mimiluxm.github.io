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
                  pageTitle: "Livrare & Returnare",
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
                  deliveryTitle: "Livrare & Returnare",
    deliverySubtitle: "Livrare și Ridicare Comenzi",
    moldovaDelivery: "Livrare în Moldova:",
    chisinauDelivery: "Livrare la domiciliu în Chișinău: 77 lei | 2-4 zile lucrătoare.",
    otherDelivery: "Livrare în alte localități din Moldova: 87 lei | 2-4 zile lucrătoare.",
    expressDelivery: "Livrare urgentă prin taxi: 120 lei | 24 de ore.",
    intlDelivery: "Livrare Internațională (România și Anglia):",
    busDelivery: "Livrare prin microbuz: 8€ | 5-7 zile lucrătoare.",
    noteNova: "Toate comenzile sunt livrate prin curier Nova Poshta. MIMILUX nu acceptă plata la livrare. Toate comenzile trebuie achitate în avans prin card bancar sau transfer bancar.",
    pickupTitle: "Ridicare din Magazin:",
    storeAddress: "Adresă: Centrul Comercial Gemenii, etaj 2, Chișinău, Moldova.",
    storeHours: "Program: Luni - Duminică, 10:00 - 20:00.",
    storePayment: "Metode de plată disponibile în magazin: Numerar (cash), Card bancar (Visa/Mastercard), Transfer bancar.",
    returnPolicyTitle: "Politica de Returnare și Schimb",
    returnIntro: "MIMILUX acceptă returnarea sau schimbul produselor în următoarele condiții:",
    nonCustomReturn: "Produsele nepersonalizate pot fi returnate sau schimbate în termen de 14 zile calendaristice de la achiziție, dacă sunt nepurtate, în ambalajul original și fără semne de uzură.",
    customReturn: "Produsele personalizate (gravate cu text, amprentă, fotografie, logo etc.) nu pot fi returnate sau schimbate, deoarece sunt realizate la cererea clientului.",
    warrantyNote: "În caz de defect de fabricație, MIMILUX oferă reparație, înlocuire sau rambursare, conform politicii de garanție.",
    contactReturn: "Pentru solicitări de retur sau schimb, contactați:",
    returnPhone: "Telefon: (+373) 60 376 835",
    returnEmail: "Email: carastefanco@mimilux.com",
              },
              en: {
                pageTitle: "Delivery & Returns",
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
                  deliveryTitle: "Delivery & Returns",
                  deliverySubtitle: "Delivery and Order Pickup",
                  moldovaDelivery: "Delivery in Moldova:",
                  chisinauDelivery: "Home delivery in Chișinău: 77 MDL | 2-4 business days.",
                  otherDelivery: "Delivery to other localities in Moldova: 87 MDL | 2-4 business days.",
                  expressDelivery: "Express delivery by taxi: 120 MDL | within 24 hours.",
                  intlDelivery: "International Delivery (Romania and UK):",
                  busDelivery: "Delivery by minibus: €8 | 5-7 business days.",
                  noteNova: "All orders are delivered via Nova Poshta courier. MIMILUX does not accept cash on delivery. All orders must be paid in advance by bank card or transfer.",
                  pickupTitle: "Pickup from Store:",
                  storeAddress: "Address: Gemeni Shopping Center, 2nd floor, Chișinău, Moldova.",
                  storeHours: "Schedule: Monday - Sunday, 10:00 - 20:00.",
                  storePayment: "Available payment methods in-store: Cash, Bank Card (Visa/Mastercard), Bank Transfer.",
                  returnPolicyTitle: "Return and Exchange Policy",
                  returnIntro: "MIMILUX accepts returns or exchanges under the following conditions:",
                  nonCustomReturn: "Non-customized products can be returned or exchanged within 14 calendar days from purchase if they are unworn, in original packaging, and without signs of wear.",
                  customReturn: "Customized products (engraved with text, fingerprint, photo, logo, etc.) cannot be returned or exchanged as they are made on client request.",
                  warrantyNote: "In case of a manufacturing defect, MIMILUX offers repair, replacement, or refund according to the warranty policy.",
                  contactReturn: "For return or exchange requests, contact:",
                  returnPhone: "Phone: (+373) 60 376 835",
                  returnEmail: "Email: carastefanc@gmail.com"
              },
              ru: {
                  pageTitle: "Доставка & Возврат",
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
                  deliveryTitle: "Доставка и Возврат",
    deliverySubtitle: "Доставка и Самовывоз Заказов",
    moldovaDelivery: "Доставка по Молдове:",
    chisinauDelivery: "Доставка по Кишиневу: 77 лей | 2–4 рабочих дня.",
    otherDelivery: "Доставка в другие населенные пункты Молдовы: 87 лей | 2–4 рабочих дня.",
    expressDelivery: "Срочная доставка такси: 120 лей | в течение 24 часов.",
    intlDelivery: "Международная доставка (Румыния и Англия):",
    busDelivery: "Доставка микроавтобусом: 8€ | 5–7 рабочих дней.",
    noteNova: "Все заказы доставляются курьером Nova Poshta. MIMILUX не принимает оплату при доставке. Все заказы должны быть оплачены заранее банковской картой или переводом.",
    pickupTitle: "Самовывоз из магазина:",
    storeAddress: "Адрес: Торговый центр Gemenii, 2 этаж, Кишинев, Молдова.",
    storeHours: "График: Понедельник – Воскресенье, 10:00 – 20:00.",
    storePayment: "Доступные методы оплаты в магазине: Наличные, Банковская карта (Visa/Mastercard), Банковский перевод.",
    returnPolicyTitle: "Политика Возврата и Обмена",
    returnIntro: "MIMILUX принимает возврат или обмен продукции при следующих условиях:",
    nonCustomReturn: "Неперсонализированные изделия можно вернуть или обменять в течение 14 календарных дней после покупки, если они не использовались, находятся в оригинальной упаковке и без признаков носки.",
    customReturn: "Персонализированные изделия (гравировка текста, отпечатков, фото, логотипа и т.д.) не подлежат возврату или обмену, так как изготавливаются по индивидуальному заказу.",
    warrantyNote: "В случае производственного брака MIMILUX предлагает ремонт, замену или возврат средств согласно гарантии.",
    contactReturn: "Для запроса возврата или обмена свяжитесь с нами:",
    returnPhone: "Телефон: (+373) 60 376 835",
    returnEmail: "Эл. почта:  carastefanc@gmail.com"
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