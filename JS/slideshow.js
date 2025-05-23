document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',   
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.nav-right',
      prevEl: '.nav-left',
    },
  });
});

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
    pageTitle: "Mimilux - Acasă",
    navAbout: "Despre noi",
    navProducts: "Produse",
    navMensCollection: "Colecția bărbați",
    navWomensCollection: "Colecția dame",
    navLuxuryCollection: "Colecția de Lux",
    navContact: "Contacte",
    carouselMimilux: "Mimilux",
    carouselSlogan: "Creat cu grijă. Purtat cu iubire.",
    popularProducts: "Cele mai populare produse",
    ceasNeguroTitle: "Ceas NEGURO",
    ceasNeguroDesc: "Oțel inoxidabil de înaltă calitate, placat cu aur 18K sau rodiu pentru un plus de strălucire și protecție.",
    ceasNeguroPrice: "2640 MDL",
    brataraMisterTitle: "Brățara Mister",
    brataraMisterDesc: "Oțel inoxidabil de înaltă calitate, placat cu aur 18K sau rodiu pentru un plus de strălucire și protecție.",
    brataraMisterPrice: "950 MDL",
    tagTitle: "TAG",
    tagDesc: "Oțel inoxidabil de înaltă calitate, placat cu aur 18K sau rodiu pentru un plus de strălucire și protecție.",
    tagPrice: "800 MDL",
    butoniereTitle: "Butoniere",
    butoniereDesc: "Oțel inoxidabil de înaltă calitate, placat cu aur 18K sau rodiu pentru un plus de strălucire și protecție.",
    butonierePrice: "5500 MDL",
    winnerLoveTitle: "Ceas winner Love MECANIC",
    winnerLoveDesc: "Oțel inoxidabil de înaltă calitate, placat cu aur 18K sau rodiu pentru un plus de strălucire și protecție.",
    winnerLovePrice: "1500 MDL",
    richmondTitle: "Brățara richmond",
    richmondDesc: "Oțel inoxidabil de înaltă calitate, placat cu aur 18K sau rodiu pentru un plus de strălucire și protecție.",
    richmondPrice: "600 MDL",
    colierDiamantTitle: "Colier Diamant cu Inima",
    colierDiamantDesc: "Oțel inoxidabil de înaltă calitate, placat cu aur 18K sau rodiu pentru un plus de strălucire și protecție.",
    colierDiamantPrice: "750 MDL",
    stelarTitle: "Brățara Stelar",
    stelarDesc: "Oțel inoxidabil de înaltă calitate, placat cu aur 18K sau rodiu pentru un plus de strălucire și protecție.",
    stelarPrice: "900 MDL",
    buyNow: "Cumpără acum",
    whyMimiluxTitle: "De ce să comanzi de la Mimilux",
    personalizedJewelryTitle: "Bijuterii personalizate",
    personalizedJewelryDesc: "Fie că vrei un nume, o dată importantă sau un mesaj gravat, oferim personalizare gratuită pentru fiecare bijuterie.",
    premiumQualityTitle: "Calitate premium - Oțel inoxidabil placat cu aur de 18K",
    premiumQualityDesc: "Bijuterii din oțel inoxidabil placat cu aur de 18K sau rodiu, care își păstrează strălucirea în timp.",
    over10PackagingsTitle: "Peste 10 tipuri de ambalaje elegante",
    over10PackagingsDesc: "Alege din peste 10 tipuri de ambalaje premium, perfecte pentru ocazii speciale.",
    oneYearWarrantyTitle: "Garanție de 1 an",
    oneYearWarrantyDesc: "Ai liniște sufletească cu garanția noastră de 12 luni pentru fiecare bijuterie.",
    fastShippingTitle: "Livrare rapidă și sigură",
    fastShippingDesc: "Expediem comenzile rapid în Moldova, România și Anglia, astfel încât să primești produsul la timp.",
    physicalStoreTitle: "Magazin fizic în Chișinău",
    physicalStoreDesc: "Dacă vrei să vezi produsele înainte de a cumpăra, te așteptăm în magazinul nostru din Centrul Comercial Gemenii, etaj 2.",
    customerReviews: "Recenziile clienților",
    viewOriginal: "Vezi originalul",
    review1: "Recomand cu încredere bijuteriile Mimilux soțul poartă o brățara deja de un an in toată această perioadă el nu a scos-o nici la baia nici la muncă și brățara e ca nouă",
    review2: "Mimilux, Vă mulțumim enorm de mult pentru brățară minunată , care lam procurat cu drag din magazinul dumneavoastră, sunteți foarte amabili. Vă recomand cu cea mai mare încredere 🌸 …",
    review3: "Dacă ești în căutarea unei bijuterii personalizate sau a unui cadou pentru persoanele dragi, cu o împachetare specială, atunci, cu siguranță vei găsi ceva potrivit la MIMILUX. Aici găsiți nu doar bijuterii estetice, placate cu aur de 18K, dar beneficiați de gravare gratuită, deservire la nivel înalt și livrare la domiciliu. Recomand cu încredere MIMILUX! 🌸",
    review4: "Am procurat de mai multe ori bijuterii de la Mimilux🥰. Bijuteriile sunt extrem de frumoase, corespund exact pozelor și descrierii plus că s-au livrat foarte rapid. Grija pentru ambalare și mesajul personalizat a fost o surpriza extrem de plăcută. Voi mai reveni cu noi comenzi. Vă recomand și voua ❤️ …",
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
  },
  en: {
    pageTitle: "Mimilux - Home",
    navAbout: "About Us",
    navProducts: "Products",
    navMensCollection: "Men's Collection",
    navWomensCollection: "Women's Collection",
    navLuxuryCollection: "Luxury Collection",
    navContact: "Contact",
    carouselMimilux: "Mimilux",
    carouselSlogan: "Created with care. Worn with love.",
    popularProducts: "Most Popular Products",
    ceasNeguroTitle: "NEGURO Watch",
    ceasNeguroDesc: "High-quality stainless steel, plated with 18K gold or rhodium for added shine and protection.",
    ceasNeguroPrice: "2640 MDL",
    brataraMisterTitle: "Mister Bracelet",
    brataraMisterDesc: "High-quality stainless steel, plated with 18K gold or rhodium for added shine and protection.",
    brataraMisterPrice: "950 MDL",
    tagTitle: "TAG",
    tagDesc: "High-quality stainless steel, plated with 18K gold or rhodium for added shine and protection.",
    tagPrice: "800 MDL",
    butoniereTitle: "Cufflinks",
    butoniereDesc: "High-quality stainless steel, plated with 18K gold or rhodium for added shine and protection.",
    butonierePrice: "5500 MDL",
    winnerLoveTitle: "Winner Love MECANIC Watch",
    winnerLoveDesc: "High-quality stainless steel.",
    winnerLovePrice: "1500 MDL",
    richmondTitle: "Richmond Bracelet",
    richmondDesc: "High-quality stainless steel, plated with 18K gold or rhodium for added shine and protection.",
    richmondPrice: "600 MDL",
    colierDiamantTitle: "Diamond Heart Necklace",
    colierDiamantDesc: "High-quality stainless steel, plated with 18K gold or rhodium for added shine and protection.",
    colierDiamantPrice: "750 MDL",
    stelarTitle: "Stellar Bracelet",
    stelarDesc: "High-quality stainless steel, plated with 18K gold or rhodium for added shine and protection.",
    stelarPrice: "900 MDL",
    buyNow: "Buy Now",
    whyMimiluxTitle: "Why Order from Mimilux",
    personalizedJewelryTitle: "Personalized Jewelry",
    personalizedJewelryDesc: "Whether you want a name, a significant date, or an engraved message, we offer free customization for every piece of jewelry.",
    premiumQualityTitle: "Premium Quality - 18K Gold Plated Stainless Steel",
    premiumQualityDesc: "Jewelry made of stainless steel, plated with 18K gold or rhodium, retaining its shine over time.",
    over10PackagingsTitle: "Over 10 Elegant Packaging Options",
    over10PackagingsDesc: "Choose from over 10 premium packaging options, perfect for special occasions.",
    oneYearWarrantyTitle: "1 Year Warranty",
    oneYearWarrantyDesc: "Enjoy peace of mind with our 12-month warranty for every piece of jewelry.",
    fastShippingTitle: "Fast and Safe Shipping",
    fastShippingDesc: "We ship orders quickly to Moldova, Romania, and the UK, ensuring timely delivery of your product.",
    physicalStoreTitle: "Physical Store in Chisinau",
    physicalStoreDesc: "If you want to see the products before purchasing, visit our store at the Gemenii Shopping Center, 2nd floor.",
    customerReviews: "Customer Reviews",
    viewOriginal: "See the original",
    review1: "I highly recommend Mimilux jewelry. My husband has been wearing a bracelet for a year now. During this entire period, he hasn't taken it off, either to the bathroom or to work, and the bracelet is like new.",
    review2: "Mimilux, Thank you very much for the wonderful bracelet, which I bought with pleasure from your store, you are very kind. I recommend you with the utmost confidence 🌸 …",
    review3: "If you are looking for a personalized piece of jewelry or a gift for your loved ones, with special packaging, then you will definitely find something suitable at MIMILUX. Here you will find not only aesthetic jewelry, plated with 18K gold, but also benefit from free engraving, high-level service and home delivery. I highly recommend MIMILUX! 🌸",
    review4: "I have purchased jewelry from Mimilux several times 🥰. The jewelry is extremely beautiful, exactly as shown in the pictures and descriptions, and it was delivered very quickly. The care in packaging and the personalized message was a very pleasant surprise. I will definitely be back for more orders. I highly recommend it to you as well ❤️ …",
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
  },
  ru: {
    pageTitle: "Mimilux - Дом",
    navAbout: "O нас",
    navProducts: "Товары",
    navMensCollection: "Мужская коллекция",
    navWomensCollection: "Женская коллекция",
    navLuxuryCollection: "Коллекция Люкс",
    navContact: "Контакты",
    carouselMimilux: "Mimilux",
    carouselSlogan: "Создано c заботой. Носится c любовью.",
    popularProducts: "Самые популярные продукты",
    ceasNeguroTitle: "Часы NEGURO",
    ceasNeguroDesc: "Высококачественная нержавеющая сталь, покрытая золотом 18К или родием для дополнительного блеска и защиты.",
    ceasNeguroPrice: "2640 MDL",
    brataraMisterTitle: "Браслет Mister",
    brataraMisterDesc: "Высококачественная нержавеющая сталь, покрытая золотом 18К или родием для дополнительного блеска и защиты.",
    brataraMisterPrice: "950 MDL",
    tagTitle: "TAG",
    tagDesc: "Высококачественная нержавеющая сталь, покрытая золотом 18К или родием для дополнительного блеска и защиты.",
    tagPrice: "800 MDL",
    butoniereTitle: "Запонки",
    butoniereDesc: "Высококачественная нержавеющая сталь, покрытая золотом 18К или родием для дополнительного блеска и защиты.",
    butonierePrice: "5500 MDL",
    winnerLoveTitle: "Часы Winner Love MECANIC",
    winnerLoveDesc: "Высококачественная нержавеющая сталь, покрытая золотом 18К или родием.",
    winnerLovePrice: "1500 MDL",
    richmondTitle: "Браслет Richmond",
    richmondDesc: "Высококачественная нержавеющая сталь, покрытая золотом 18К или родием для дополнительного блеска и защиты.",
    richmondPrice: "600 MDL",
    colierDiamantTitle: "Ожерелье с бриллиантом и сердцем",
    colierDiamantDesc: "Высококачественная нержавеющая сталь, покрытая золотом 18К или родием для дополнительного блеска и защиты.",
    colierDiamantPrice: "750 MDL",
    stelarTitle: "Браслет Stelar",
    stelarDesc: "Высококачественная нержавеющая сталь, покрытая золотом 18К или родием для дополнительного блеска и защиты.",
    stelarPrice: "900 MDL",
    buyNow: "Купить сейчас",
    whyMimiluxTitle: "Почему заказать у Mimilux",
    personalizedJewelryTitle: "Персонализированные украшения",
    personalizedJewelryDesc: "Хотите имя, важную дату или гравированное послание? Мы предлагаем бесплатную персонализацию для каждого украшения.",
    premiumQualityTitle: "Премиум качество - Нержавеющая сталь с позолотой 18К",
    premiumQualityDesc: "Украшения из нержавеющей стали, покрытые золотом 18К или родием, сохраняющие свой блеск со временем.",
    over10PackagingsTitle: "Более 10 видов элегантной упаковки",
    over10PackagingsDesc: "Выбирайте из более чем 10 премиум упаковок, идеально подходящих для особых случаев.",
    oneYearWarrantyTitle: "Гарантия 1 год",
    oneYearWarrantyDesc: "Обеспечьте себе спокойствие с нашей гарантией на 12 месяцев для каждого украшения.",
    fastShippingTitle: "Быстрая и безопасная доставка",
    fastShippingDesc: "Мы быстро отправляем заказы в Молдове, Румынии и Великобритании, чтобы вы получили продукт вовремя.",
    physicalStoreTitle: "Физический магазин в Кишиневе",
    physicalStoreDesc: "Если вы хотите увидеть продукцию перед покупкой, посетите наш магазин в ТЦ Гемении, 2 этаж.",
    customerReviews: "Отзывы клиентов",
    viewOriginal: "Смотреть оригинал",
    review1: "Я настоятельно рекомендую ювелирные изделия Mimilux. Мой муж носит браслет уже год. За все это время он его не снимал, ни в туалет, ни на работу, и браслет как новый.",
    review2: "Mimilux, Большое спасибо за замечательный браслет, который я с удовольствием приобрела в вашем магазине, вы очень добры. Я рекомендую вас с полной уверенностью 🌸…",
    review3: "Если вы ищете персонализированное ювелирное украшение или подарок для своих близких в особой упаковке, то вы обязательно найдете что-то подходящее в MIMILUX. Здесь вы найдете не только эстетичные украшения, покрытые 18-каратным золотом, но и воспользуетесь бесплатной гравировкой, высоким уровнем обслуживания и доставкой на дом. Я c уверенностью рекомендую MIMILUX! 🌸",
    review4: "Я несколько раз покупала украшения в Mimilux🥰. Украшения очень красивые, полностью соответствуют фотографиям и описанию, плюс они были доставлены очень быстро. Забота, проявленная при упаковке, и персонализированное послание стали чрезвычайно приятным сюрпризом. Я вернусь с новыми заказами. Я рекомендую его и вам ❤️ …",
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
