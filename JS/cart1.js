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
    Brățară_Elita_BR002S: "Brățară Elita - 21 CM - BR002S",
    Brățara_Casadei: "Brățara Casadei",
    Butoniere: "Butoniere",
    Brățara_Rolex: "Brățara Rolex",
    Brățară_Rebelity: "Brățară Rebelity",
    Brățară_Împletită: "Brățară Împletită",
    Brățara_Vinci: "Brățara Vinci",
    Brățară_bară_dublă: "Brățară bară dublă",
    Ceas_Paris_mic: "Ceas Paris mic",
    Ceas_LIBERIAL: "Ceas LIBERIAL W022MG+B",
    CEAS_NEGURO: "CEAS NEGURO",
    CEAS_POSEIDON: "CEAS POSEIDON",
    Ceas_Silver_for_Man: "Ceas Silver for Man",
    Ceas_VICTORIA: "Ceas VICTORIA",
    Ceas_Jupiter: "Ceas Jupiter",
    Ceas_Cristiano: "Ceas Cristiano",
    Ceas_LONDON: "Ceas LONDON",
    Ceas_winner_milion_MECANIC: "Ceas winner milion MECANIC",
    Ceas_winner_Love_MECANIC_W033S: "Ceas winner Love MECANIC W033S",
    Ceas_Forsinning_COSMOS_MECANIC: "Ceas Forsinning COSMOS MECANIC",
    Ceas_Forsinning_COSMOS_MECANIC_W035B: "Ceas Forsinning COSMOS MECANIC W035B",
    Ceas_BONJOUR_W029FG: "Ceas BONJOUR W029FG",
    Luxor_Brass: "Luxor Brass",
    Brățara_infinit: "Brățara infinit",
    Brățara_Julieta: "Brățara Julieta",
    Brățara_Șarpe: "Brățara Șarpe",
    Brățara_richmond: "Brățara richmond",
    Brățara_Monroe: "Brățara Monroe",
    Brățară_pe_cruce: "Brățară pe cruce",
    Brățara_Suflet: "Brățara Suflet",
    Brățară_simplă: "Brățară simplă",
    Brățara_mister: "Brățara mister",
    Brățară_copii: "Brățară copii",
    Brățară_Diamant_A: "Brățară Diamant A",
    Brățara_Stelar: "Brățara Stelar",
    Brățara_Soare: "Brățara Soare",
    Brățară_semicerc: "Brățară semicerc",
    Brățară_Diamant: "Brățară Diamant",
    Brățară_cerc_pe_lanț_reglabil: "Brățară cerc pe lanț reglabil",
    Brățară_XO: "Brățară XO",
    Brățară_Trilion: "Brățară Trilion",
    Brățara_pătrat: "Brățara pătrat",
    Brățara_sumbur: "Brățara sumbur",
    Colier_zeiță: "Colier zeiță",
    Colier_diamant_cu_inima: "Colier diamant cu inima",
    Colier_Stea_mică: "Colier Stea mică",
    Colier_din_Inimă: "Colier din Inimă",
    Colier_Misterinity: "Colier Misterinity",
    Colier_Pinkysho: "Colier Pinkysho",
    Cercei_din_Inima: "Cercei din Inima",
    Cercei_Misterinity: "Cercei Misterinity",
    Cercei_Pinckysho: "Cercei Pinckysho",
    Inel_din_Inimă: "Inel din Inimă",
    Inel_Misterinity: "Inel Misterinity",
    Inel_Pinckysho: "Inel Pinckysho",
    Colier_Lady: "Colier Lady",
    Colier_Yellow_Flower: "Colier Yellow Flower",
    Colier_Brilo: "Colier Brilo",
    Cercei_Lady: "Cercei Lady",
    Cercei_Yellow_Flower: "Cercei Yellow Flower",
    Cercei_Brilo: "Cercei Brilo",
    Inel_Lady: "Inel Lady",
    Inel_Yellow_Flower: "Inel Yellow Flower",
    Inel_Brilo: "Inel Brilo",
    Coco: "Coco",
    Coco_Luxe: "Coco Luxe",
    Gisele_Starmoon: "Gisele Starmoon",
    Gisele_Glow: "Gisele Glow",
    ANGEL: "ANGEL",
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
    pageTitle: "Mimilux - Coș",
    cart_title: "Coșul dvs.",
    checkout_button: "Finalizează comanda",
    registration_title: "Înregistrare",
    submit_order_button: "Depuneți comanda",
    name: "Numele",
    surname: "Prenumele",
    phone: "Numărul de telefon",
    address: "Adresa de livrare",
    cartEmpty: "Coșul dumneavoastră este gol",
    continueShopping: "Continuați cumpărăturile",
    alertFillFields: "Vă rugăm să completați toate câmpurile!",
    alertPhoneInvalid: "Numărul de telefon trebuie să conțină exact 9 cifre și să nu includă litere!",
    alertEmailInvalid: "Vă rugăm să introduceți o adresă de email validă!",
    alertThanks: "Vă mulțumim pentru comandă, {firstName} {lastName}!\nTotal: {total} MDL.\nVă vom contacta la {phone} sau prin email la {email}.\nAdresa de livrare: {address}"
  },
  en: {
    Brățară_Elita_BR002S: "Elite Bracelet - 21 CM - BR002S",
Brățara_Casadei: "Casadei Bracelet",
Butoniere: "Boutonnieres",
Brățara_Rolex: "Rolex Bracelet",
Brățară_Rebelity: "Rebelity Bracelet",
Brățară_Împletită: "Braided Bracelet",
Brățara_Vinci: "Vinci Bracelet",
Brățară_bară_dublă: "Double Bar Bracelet",
Ceas_Paris_mic: "Small Paris Watch",
Ceas_LIBERIAL: "LIBERIAL Watch W022MG+B",
CEAS_NEGURO: "NEGURO WATCH",
CEAS_POSEIDON: "POSEIDON WATCH",
Ceas_Silver_for_Man: "Silver Watch for Men",
Ceas_VICTORIA: "VICTORIA Watch",
Ceas_Jupiter: "Jupiter Watch",
Ceas_Cristiano: "Cristiano Watch",
Ceas_LONDON: "LONDON Watch",
Ceas_winner_milion_MECANIC: "Winner Million Mechanical Watch",
Ceas_winner_Love_MECANIC_W033S: "Winner Love Mechanical Watch W033S",
Ceas_Forsinning_COSMOS_MECANIC: "Forsinning COSMOS Mechanical Watch",
Ceas_Forsinning_COSMOS_MECANIC_W035B: "Forsinning COSMOS Mechanical Watch W035B",
Ceas_BONJOUR_W029FG: "BONJOUR Watch W029FG",
Luxor_Brass: "Luxor Brass",
Brățara_infinit: "Infinity Bracelet",
Brățara_Julieta: "Julieta Bracelet",
Brățara_Șarpe: "Snake Bracelet",
Brățara_richmond: "Richmond Bracelet",
Brățara_Monroe: "Monroe Bracelet",
Brățară_pe_cruce: "Cross Bracelet",
Brățara_Suflet: "Soul Bracelet",
Brățară_simplă: "Simple Bracelet",
Brățara_mister: "Mister Bracelet",
Brățară_copii: "Kids Bracelet",
Brățară_Diamant_A: "Diamond A Bracelet",
Brățara_Stelar: "Stellar Bracelet",
Brățara_Soare: "Sun Bracelet",
Brățară_semicerc: "Semi-circle Bracelet",
Brățară_Diamant: "Diamond Bracelet",
Brățară_cerc_pe_lanț_reglabil: "Circle Bracelet on Adjustable Chain",
Brățară_XO: "XO Bracelet",
Brățară_Trilion: "Trillion Bracelet",
Brățara_pătrat: "Square Bracelet",
Brățara_sumbur: "Sumbur Bracelet",
Colier_zeiță: "Goddess Necklace",
Colier_diamant_cu_inima: "Diamond Necklace with Heart",
Colier_Stea_mică: "Small Star Necklace",
Colier_din_Inimă: "Heart Necklace",
Colier_Misterinity: "Misterinity Necklace",
Colier_Pinkysho: "Pinkysho Necklace",
Cercei_din_Inimă: "Heart Earrings",
Cercei_Misterinity: "Misterinity Earrings",
Cercei_Pinckysho: "Pinckysho Earrings",
Inel_din_Inimă: "Heart Ring",
Inel_Misterinity: "Misterinity Ring",
Inel_Pinckysho: "Pinckysho Ring",
Colier_Lady: "Lady Necklace",
Colier_Yellow_Flower: "Yellow Flower Necklace",
Colier_Brilo: "Brilo Necklace",
Cercei_Lady: "Lady Earrings",
Cercei_Yellow_Flower: "Yellow Flower Earrings",
Cercei_Brilo: "Brilo Earrings",
Inel_Lady: "Lady Ring",
Inel_Yellow_Flower: "Yellow Flower Ring",
Inel_Brilo: "Brilo Ring",
Coco: "Coco",
Coco_Luxe: "Coco Luxe",
Gisele_Starmoon: "Gisele Starmoon",
Gisele_Glow: "Gisele Glow",
ANGEL: "ANGEL",
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
    newsoffert: "Subscribe for news and offers:",
    send: "Send",
    pleaseValid: "Please enter a valid email.",
    thanks: "✔️ Thank you for subscribing!",
    copywr: "© 2025. Made as part of the 'Tekwill Junior Ambassadors' competition.",
    email: "Your email",
    pageTitle: "Mimilux - Cart",
    cart_title: "Your Cart",
    checkout_button: "Finalize Order",
    registration_title: "Registration",
    submit_order_button: "Submit Order",
    name: "Name",
    surname: "Surname",
    phone: "Phone number",
    address: "Delivery address",
    cartEmpty: "Your cart is empty",
    continueShopping: "Continue shopping",
    alertFillFields: "Please fill in all the fields!",
    alertPhoneInvalid: "The phone number must contain exactly 9 digits and not include letters",
    alertEmailInvalid: "Please enter a valid email address!",
    alertThanks: "Thank you for your order, {firstName} {lastName}!\nTotal: {total} MDL.\nWe will contact you at {phone} or via email at {email}.\nDelivery address: {address}"
  },
  ru: {
    Brățară_Elita_BR002S: "Браслет Эліта - 21 см - BR002S",
Brățara_Casadei: "Браслет Casadei",
Butoniere: "Бутоньерки",
Brățara_Rolex: "Браслет Rolex",
Brățară_Rebelity: "Браслет Rebelity",
Brățară_Împletită: "Плетеный браслет",
Brățara_Vinci: "Браслет Vinci",
Brățară_bară_dublă: "Двойной барный браслет",
Ceas_Paris_mic: "Маленькие часы Paris",
Ceas_LIBERIAL: "Часы LIBERIAL W022MG+B",
CEAS_NEGURO: "Часы NEGURO",
CEAS_POSEIDON: "Часы POSEIDON",
Ceas_Silver_for_Man: "Часы Silver for Man",
Ceas_VICTORIA: "Часы VICTORIA",
Ceas_Jupiter: "Часы Jupiter",
Ceas_Cristiano: "Часы Cristiano",
Ceas_LONDON: "Часы LONDON",
Ceas_winner_milion_MECANIC: "Часы Winner Million MECANIC",
Ceas_winner_Love_MECANIC_W033S: "Часы Winner Love MECANIC W033S",
Ceas_Forsinning_COSMOS_MECANIC: "Часы Forsinning COSMOS MECANIC",
Ceas_Forsinning_COSMOS_MECANIC_W035B: "Часы Forsinning COSMOS MECANIC W035B",
Ceas_BONJOUR_W029FG: "Часы BONJOUR W029FG",
Luxor_Brass: "Люксор Брасс",
Brățara_infinit: "Браслет Бесконечность",
Brățara_Julieta: "Браслет Джульета",
Brățara_Șarpe: "Браслет Змея",
Brățara_richmond: "Браслет Ричмонд",
Brățara_Monroe: "Браслет Монро",
Brățară_pe_cruce: "Браслет Крест",
Brățara_Suflet: "Браслет Душа",
Brățară_simplă: "Простой браслет",
Brățara_mister: "Браслет Тайна",
Brățară_copii: "Детский браслет",
Brățară_Diamant_A: "Браслет Алмаз А",
Brățara_Stelar: "Браслет Стеллар",
Brățara_Soare: "Браслет Солнце",
Brățară_semicerc: "Браслет Полукруг",
Brățară_Diamant: "Алмазный браслет",
Brățară_cerc_pe_lanț_reglabil: "Браслет Круг на Регулируемой Цепочке",
Brățară_XO: "Браслет XO",
Brățară_Trilion: "Браслет Триллион",
Brățara_pătrat: "Браслет Квадрат",
Brățara_sumbur: "Браслет Сумбур",
Colier_zeiță: "Ожерелье Богини",
Colier_diamant_cu_inima: "Ожерелье с Алмазом и Сердцем",
Colier_Stea_mică: "Ожерелье с Маленькой Звездой",
Colier_din_Inimă: "Ожерелье из сердца",
Colier_Misterinity: "Ожерелье Мистеринити",
Colier_Pinkysho: "Ожерелье Пинкишо",
Cercei_din_Inimă: "Серьги из сердца",
Cercei_Misterinity: "Серьги Мистеринити",
Cercei_Pinckysho: "Серьги Пинкишо",
Inel_din_Inimă: "Кольцо из сердца",
Inel_Misterinity: "Кольцо Мистеринити",
Inel_Pinckysho: "Кольцо Пинкишо",
Colier_Lady: "Ожерелье Леди",
Colier_Yellow_Flower: "Ожерелье Желтого Цветка",
Colier_Brilo: "Ожерелье Брилло",
Cercei_Lady: "Серьги Леди",
Cercei_Yellow_Flower: "Серьги Желтого Цветка",
Cercei_Brilo: "Серьги Брилло",
Inel_Lady: "Кольцо Леди",
Inel_Yellow_Flower: "Кольцо Желтого Цветка",
Inel_Brilo: "Кольцо Брилло",
Coco: "Коко",
Coco_Luxe: "Коко Люкс",
Gisele_Starmoon: "Жизель Стармун",
Gisele_Glow: "Жизель Глоу",
ANGEL: "АНГЕЛ",
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
    pageTitle: "Mimilux - Корзина",
    cart_title: "Ваша корзина",
    checkout_button: "Оформить заказ",
    registration_title: "Регистрация",
    submit_order_button: "Отправить заказ",
    name: "Имя",
    surname: "Фамилия",
    phone: "Номер телефона",
    address: "Адрес доставки",
    cartEmpty: "Ваша корзина пуста.",
    continueShopping: "Продолжить покупки",
    alertFillFields: "Пожалуйста, заполните все поля!",
    alertPhoneInvalid: "Номер телефона должен содержать ровно 9 цифр и не должен содержать буквы!",
    alertEmailInvalid: "Пожалуйста, введите действительный адрес электронной почты!",
    alertThanks: "Спасибо за заказ, {firstName} {lastName}!\nИтоговая сумма: {total} MDL.\nМы свяжемся с вами по телефону {phone} или по электронной почте {email}.\nАдрес доставки: {address}"

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