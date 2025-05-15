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
    pageTitle: "Contacte",
    pageTitle: "Contacte",
    contactTitle: "Contactează-ne",
    contactDescription: "Ne-ar plăcea să vă ajutăm să găsiți bijuteria perfectă sau să vă ajutăm cu orice întrebări ați putea avea. Fie că este vorba despre colecțiile noastre, modelele personalizate sau serviciile noastre, echipa noastră este aici pentru tine.",
    phone: "Telefonul",
    addressTitle: "Adresa",
    addressDetails: "Centru, Gemeni et.2 Ștefan cel mare și sfînt 136, Chișinău, Moldova",
    scheduleTitle: "Orarul",
    scheduleDetails: "Luni - Sâmbătă: 11:00 - 19:00 Duminică: Zi liberă",
    mapTitle: "Găsiți-ne aici!",
    bannerImgDesktop: "../Imagini/fetita1.jpg",
    bannerImgMobile: "../Imagini/fetita2.jpg",
  },
  en: {
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
    pageTitle: "Contacts",
    pageTitle: "Contacts",
    contactTitle: "Contact Us",
    contactDescription: "We'd love to help you find the perfect piece of jewelry or assist you with any questions you may have. Whether it's about our collections, custom designs, or services, our team is here for you.",
    phone: "Phone",
    addressTitle: "Address",
    addressDetails: "Center, Gemeni 2nd floor  Ștefan cel Mare și Sfânt 136, Chișinău, Moldova",
    scheduleTitle: "Schedule",
    scheduleDetails: "Monday - Saturday: 11:00 AM - 7:00 PM  Sunday: Closed",
    mapTitle: "Find us here!",
    bannerImgDesktop: "../Imagini/fetita1en.jpg",
    bannerImgMobile: "../Imagini/fetita2en.jpg",
  },
  ru: {
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
    pageTitle: "Контакты",
    pageTitle: "Контакты",
    contactTitle: "Свяжитесь с нами",
    contactDescription: "Мы будем рады помочь вам найти идеальное украшение или ответить на любые вопросы. Независимо от того, интересуют ли вас наши коллекции, индивидуальные модели или услуги — наша команда здесь для вас.",
    phone: "Телефон",
    addressTitle: "Адрес",
    addressDetails: "Центр, ТЦ Gemeni, 2 этаж  Штефан чел Маре ши Сфынт 136, Кишинёв, Молдова",
    scheduleTitle: "График",
    scheduleDetails: "Понедельник - Суббота: 11:00 - 19:00  Воскресенье: Выходной",
    mapTitle: "Найдите нас здесь!",
    bannerImgDesktop: "../Imagini/fetita1ru.jpg",
    bannerImgMobile: "../Imagini/fetita2ru.jpg",
  }
};



document.getElementById("flag-ro").addEventListener("click", function (e) {
  e.preventDefault();
  setPageLanguage("ro");
});
document.getElementById("flag-en").addEventListener("click", function (e) {
  e.preventDefault();
  setPageLanguage("en");
});
document.getElementById("flag-ru").addEventListener("click", function (e) {
  e.preventDefault();
  setPageLanguage("ru");
});

function getLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langFromUrl = urlParams.get('lang');
  return langFromUrl || localStorage.getItem('selectedLanguage') || 'en';
}

window.onload = function () {
  const selectedLanguage = getLanguage();
  setPageLanguage(selectedLanguage);
};

function setPageLanguage(lang) {
  document.querySelectorAll(".language-flags a").forEach(a => {
    a.classList.remove("active");
  });
  document.getElementById(`flag-${lang}`).classList.add("active");

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

  const imageEl = document.getElementById("localized-image");
  if (imageEl && translations[lang]) {
    const isMobile = window.innerWidth <= 768;
    imageEl.src = isMobile ? translations[lang].bannerImgMobile : translations[lang].bannerImgDesktop;
  }

  localStorage.setItem("selectedLanguage", lang);
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

window.addEventListener("resize", () => {
  const currentLang = localStorage.getItem("selectedLanguage") || "ro";
  setPageLanguage(currentLang);
});