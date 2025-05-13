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
    Brățară_Elita_BR002S: "Elita Bracelet - 21 CM - BR002S",
    Brățara_Casadei: "Casadei Bracelet",
    Butoniere: "Boutonniere",
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
    Brățară_Elita_BR002S: "Браслет Elita - 21 CM - BR002S",
    Brățara_Casadei: "Браслет Casadei",
    Butoniere: "Бутоньерка",
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
    phone: "Номер телефона de telefon",
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