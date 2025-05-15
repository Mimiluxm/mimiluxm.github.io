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
    pageTitle: "Colecția de Lux",
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
    all_products: "Toate produsele",
    necklaces: "Coliere",
    earrings: "Cercei",
    rings: "Inele",
    womens_collection: "Colecția dame",
    product_added: "Produs adăugat în coș!",
    colier_inima: "Colier din Inimă",
    colier_misterinity: "Colier Misterinity",
    colier_pinkysho: "Colier Pinkysho",
    cercei_inima: "Cercei din Inimă",
    cercei_misterinity: "Cercei Misterinity",
    cercei_pinckysho: "Cercei Pinckysho",
    inel_inima: "Inel din Inimă",
    inel_misterinity: "Inel Misterinity",
    inel_pinckysho: "Inel Pinckysho",
    colier_lady: "Colier Lady",
    colier_yellow_flower: "Colier Yellow Flower",
    colier_brilo: "Colier Brilo",
    cercei_lady: "Cercei Lady",
    cercei_yellow_flower: "Cercei Yellow Flower",
    cercei_brilo: "Cercei Brilo",
    inel_lady: "Inel Lady",
    inel_yellow_flower: "Inel Yellow Flower",
    inel_brilo: "Inel Brilo",
    cercei_coco: "Cercei Coco",
    cercei_coco_cz: "Cercei Coco",
    cercei_coco_luxe: "Cercei Coco Luxe",
    cercei_gisele_starmoon: "Cercei Gisele Starmoon",
    cercei_gisele_glow: "Cercei Gisele Glow",
    colier_angel: "Colier ANGEL",
    product_added: "Produs adăugat în coș!",
    addToCart: "Adaugă în coș",
  },
  en: {
    pageTitle: "Luxury Collection",
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
    all_products: "All products",
    necklaces: "Necklaces",
    earrings: "Earrings",
    rings: "Rings",
    womens_collection: "Women's collection",
    product_added: "Product added to cart!",
    colier_inima: "Heart Necklace",
    colier_misterinity: "Misterinity Necklace",
    colier_pinkysho: "Pinkysho Necklace",
    cercei_inima: "Heart Earrings",
    cercei_misterinity: "Misterinity Earrings",
    cercei_pinckysho: "Pinkysho Earrings",
    inel_inima: "Heart Ring",
    inel_misterinity: "Misterinity Ring",
    inel_pinckysho: "Pinkysho Ring",
    colier_lady: "Lady Necklace",
    colier_yellow_flower: "Yellow Flower Necklace",
    colier_brilo: "Brilo Necklace",
    cercei_lady: "Lady Earrings",
    cercei_yellow_flower: "Yellow Flower Earrings",
    cercei_brilo: "Brilo Earrings",
    inel_lady: "Lady Ring",
    inel_yellow_flower: "Yellow Flower Ring",
    inel_brilo: "Brilo Ring",
    cercei_coco: "Coco Earrings",
    cercei_coco_cz: "Coco Earrings",
    cercei_coco_luxe: "Coco Luxe Earrings",
    cercei_gisele_starmoon: "Gisele Starmoon Earrings",
    cercei_gisele_glow: "Gisele Glow Earrings",
    colier_angel: "ANGEL Necklace",
    product_added: "Product added to cart!",
    addToCart: "Add to cart",
  },
  ru: {
    pageTitle: "Коллекция Люкс",
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
    necklaces: "Ожерелья",
    earrings: "Серьги",
    rings: "Кольца",
    womens_collection: "Женская коллекция",
    product_added: "Товар добавлен в корзину!",
    colier_inima: "Сердечное колье",
    colier_misterinity: "Колье Мистеринити",
    colier_pinkysho: "Колье Пинкишо",
    cercei_inima: "Серьги Сердечные",
    cercei_misterinity: "Серьги Мистеринити",
    cercei_pinckysho: "Серьги Пинкишо",
    inel_inima: "Кольцо Сердечное",
    inel_misterinity: "Кольцо Мистеринити",
    inel_pinckysho: "Кольцо Пинкишо",
    colier_lady: "Колье Леди",
    colier_yellow_flower: "Колье Желтого Цветка",
    colier_brilo: "Колье Бриело",
    cercei_lady: "Серьги Леди",
    cercei_yellow_flower: "Серьги Желтого Цветка",
    cercei_brilo: "Серьги Бриело",
    inel_lady: "Кольцо Леди",
    inel_yellow_flower: "Кольцо Желтого Цветка",
    inel_brilo: "Кольцо Бриело",
    cercei_coco: "Серьги Коко",
    cercei_coco_cz: "Серьги Коко",
    cercei_coco_luxe: "Серьги Coco Luxe",
    cercei_gisele_starmoon: "Серьги Джизель Стармун",
    cercei_gisele_glow: "Серьги Джизель Глоу",
    colier_angel: "Колье АНГЕЛ",
    product_added: "Товар добавлен в корзину!",
    addToCart: "Добавить в корзину",
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

document.getElementById("flag-ro").addEventListener("click", function (e) {
  e.preventDefault();
  switchLanguage("ro");
});
document.getElementById("flag-en").addEventListener("click", function (e) {
  e.preventDefault();
  switchLanguage("en");
});
document.getElementById("flag-ru").addEventListener("click", function (e) {
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

window.onload = function () {
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