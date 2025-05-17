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



let hiddenTextVisible = false;

function toggleReadMore() {
    const hiddenText = document.querySelector('.mai-mult .ascuns');
    const toggleButton = document.querySelector('.mai-mult .mai');

    const isHidden = hiddenText.style.display === 'none' || hiddenText.style.display === '';

    hiddenText.style.display = isHidden ? 'block' : 'none';
    toggleButton.textContent = isHidden ? 'Citește mai puțin ▲' : 'Citește mai mult ▼';
}


const knowledgeBase = {
    "salut": "Bună! Cum te pot ajuta?",
    "hello": "Hi! How can I help you?",
    "Привет": "Привет! Чем я могу вам помочь?",
    "reduceri": "Da, avem reduceri periodice și oferte speciale pentru anumite colecții.",
    "reducere": "Da, avem reduceri periodice și oferte speciale pentru anumite colecții.",
    "internațional": "Da, livrăm în multe țări. Costul și timpul de livrare depind de locația ta.",
    "international": "Da, livrăm în multe țări. Costul și timpul de livrare depind de locația ta.",
    "in afara": "Da, livrăm în multe țări. Costul și timpul de livrare depind de locația ta.",
    "în afara": "Da, livrăm în multe țări. Costul și timpul de livrare depind de locația ta.",
    "țară": "Da, livrăm în multe țări. Costul și timpul de livrare depind de locația ta.",
    "personalizare": "Da, ne specializăm în bijuterii personalizate pentru a crea ceva unic pentru dumneavoastră.",
    "returnare": "Puteți returna produsele nepersonalizate în termen de 30 de zile de la achiziție.",
    "returna": "Puteți returna produsele nepersonalizate în termen de 30 de zile de la achiziție.",
    "retur": "Puteți returna produsele nepersonalizate în termen de 30 de zile de la achiziție.",
    "rambursare": "Puteți returna produsele nepersonalizate în termen de 30 de zile de la achiziție.",
    "rambursa": "Puteți returna produsele nepersonalizate în termen de 30 de zile de la achiziție.",
    "eveniment": "Desigur! Acceptăm comenzi pentru evenimente speciale precum nunți, aniversări sau alte ocazii importante.",
    "hipoalergenic": "Da, majoritatea bijuteriilor noastre sunt realizate din materiale hipoalergenice, ideale pentru pielea sensibilă.",
    "dimensiune": "Da, oferim servicii de ajustare a dimensiunii pentru majoritatea bijuteriilor noastre.",
    "procesare": "Timpul de procesare pentru o comandă este de aproximativ 7-14 zile lucrătoare.",
    "dureaza": "Timpul de procesare pentru o comandă este de aproximativ 7-14 zile lucrătoare.",
    "durează": "Timpul de procesare pentru o comandă este de aproximativ 7-14 zile lucrătoare.",
    "timp": "Timpul de procesare pentru o comandă este de aproximativ 7-14 zile lucrătoare.",
    "livrare": "Timpul de livrare pentru o comandă este de aproximativ 7-14 zile lucrătoare.",
    "livrează": "Timpul de livrare pentru o comandă este de aproximativ 7-14 zile lucrătoare.",
    "livreaza": "Timpul de livrare pentru o comandă este de aproximativ 7-14 zile lucrătoare.",
    "livrați": "Timpul de livrare pentru o comandă este de aproximativ 7-14 zile lucrătoare.",
    "livrati": "Timpul de livrare pentru o comandă este de aproximativ 7-14 zile lucrătoare.",
    "politica": "Puteți returna produsele nepersonalizate în termen de 30 de zile de la achiziție.",
    "populare": "Cele mai populare bijuterii din magazinul nostru includ inelele din aur cu diamante, brățările personalizate și cerceii din argint.",
    "vândute": "Cele mai vândute bijuterii din magazinul nostru includ inelele din aur cu diamante, brățările personalizate și cerceii din argint.",
    "vandute": "Cele mai vândute bijuterii din magazinul nostru includ inelele din aur cu diamante, brățările personalizate și cerceii din argint.",
    "preturile": "Prețurile noastre variază în funcție de material și design.",
    "prețurile": "Prețurile noastre variază în funcție de material și design.",
    "preț": "Prețurile noastre variază în funcție de material și design.",
    "pret": "Prețurile noastre variază în funcție de material și design.",
    "plăti": "Acceptăm plăți cu cardul, transfer bancar și plata la livrare.",
    "plată": "Acceptăm plăți cu cardul, transfer bancar și plata la livrare.",
    "plăti": "Acceptăm plăți cu cardul, transfer bancar și plata la livrare.",
    "plati": "Acceptăm plăți cu cardul, transfer bancar și plata la livrare.",
    "disponibil": " Poți verifica disponibilitatea produsului pe pagina acestuia. Dacă este epuizat, îți pot spune când va fi din nou pe stoc.",
    "stoc": " Poți verifica disponibilitatea produsului pe pagina acestuia. Dacă este epuizat, îți pot spune când va fi din nou pe stoc.",
    "îngriji": "entru a păstra bijuteriile într-o stare impecabilă, îți recomandăm să le păstrezi într-un loc uscat, ferit de umezeală și de substanțe chimice.",
    "ingriji": "entru a păstra bijuteriile într-o stare impecabilă, îți recomandăm să le păstrezi într-un loc uscat, ferit de umezeală și de substanțe chimice.",
    "schimb": "Sigur! Oferim schimburi în termen de 30 de zile, cu condiția ca bijuteria să fie într-o stare perfectă.",
    "disponibilitatea": "Poți verifica stocul direct pe site-ul nostru sau îți pot spune dacă un produs este disponibil.",
    "disponibil": "Poți verifica stocul direct pe site-ul nostru sau îți pot spune dacă un produs este disponibil.",
    "personalizate": "Da, oferim bijuterii personalizate! Poți adăuga gravuri sau poți alege pietre prețioase specifice.",
    "bărbați": " Da, avem o selecție de bijuterii pentru bărbați, inclusiv brățări din piele, inele de argint și gravate din aur.",
    "barbat": " Da, avem o selecție de bijuterii pentru bărbați, inclusiv brățări din piele, inele de argint și gravate din aur.",
    "bărbat": " Da, avem o selecție de bijuterii pentru bărbați, inclusiv brățări din piele, inele de argint și gravate din aur.",
    "femei": " Da, avem o selecție de bijuterii pentru femei, inclusiv brățări din piele, inele de argint și gravate din aur.",
    "realizate": " Da, majoritatea bijuteriilor noastre sunt realizate manual de meșteșugari talentați, pentru a asigura un produs unic și de calitate.",
    "manual": " Da, majoritatea bijuteriilor noastre sunt realizate manual de meșteșugari talentați, pentru a asigura un produs unic și de calitate.",
    "garanție": " Oferim o garanție de 12 luni pentru bijuteriile achiziționate, acoperind defectele de fabricație.",
    "garantie": " Oferim o garanție de 12 luni pentru bijuteriile achiziționate, acoperind defectele de fabricație.",
    "locatie": " Magazinul este amplasat în Centrul Chișinăului, Gemeni et.2, Ștefan cel mare și sfînt 136, Chișinău, Moldova",
    "locație": " Magazinul este amplasat în Centrul Chișinăului, Gemeni et.2, Ștefan cel mare și sfînt 136, Chișinău, Moldova",
    "locatia": " Magazinul este amplasat în Centrul Chișinăului, Gemeni et.2, Ștefan cel mare și sfînt 136, Chișinău, Moldova",
    "locația": " Magazinul este amplasat în Centrul Chișinăului, Gemeni et.2, Ștefan cel mare și sfînt 136, Chișinău, Moldova",
    "amplasat": " Magazinul este amplasat în Centrul Chișinăului, Gemeni et.2, Ștefan cel mare și sfînt 136, Chișinău, Moldova",
    "amplasare": " Magazinul este amplasat în Centrul Chișinăului, Gemeni et.2, Ștefan cel mare și sfînt 136, Chișinău, Moldova",
    "tendințe": " În acest sezon, tendințele includ bijuteriile minimaliste, cu designuri fine și moderne, dar și brățările și inelele cu pietre prețioase colorate.",
    "tendinte": " În acest sezon, tendințele includ bijuteriile minimaliste, cu designuri fine și moderne, dar și brățările și inelele cu pietre prețioase colorate.",
    "material propriu": "Bijuteriile noastre sunt realizate folosind materiale de înaltă calitate selectate cu atenție de la furnizori de încredere. Ne asigurăm că acestea respectă standardele noastre pentru durabilitate și estetică.",
        "discounts": "Yes, we have periodic discounts and special offers for certain collections.",
        "discount": "Yes, we have periodic discounts and special offers for certain collections.",
        "sale": "Yes, we have periodic discounts and special offers for certain collections.",
        "sales": "Yes, we have periodic discounts and special offers for certain collections.",
        "international": "Yes, we ship to many countries. The cost and delivery time depend on your location.",
        "abroad": "Yes, we deliver to many countries. The cost and delivery time depend on your location.",
        "outside": "Yes, we deliver to many countries. The cost and delivery time depend on your location.",
        "country": "Yes, we ship to many countries. The cost and delivery time depend on your location.",
        "personalization": "Yes, we specialize in personalized jewelry to create something unique for you.",
        "return": "You can return non-personalized products within 30 days of purchase.",
        "refund": "You can return non-personalized products within 30 days of purchase.",
        "event": "Of course! We accept orders for special events such as weddings, anniversaries or other important occasions.",
        "hypoallergenic": "Yes, most of our jewelry is made of hypoallergenic materials, ideal for sensitive skin.",
        "size": "Yes, we offer size adjustment services for most of our jewelry.",
        "processing": "The processing time for a order is approximately 7-14 business days.",
        "time": "The processing time for an order is approximately 7-14 business days.",
        "delivery": "The delivery time for an order is approximately 7-14 business days.",
        "deliver": "The delivery time for an order is approximately 7-14 business days.",
        "policy": "You can return non-personalized products within 30 days from purchase.",
        "popular": "The most popular jewelry in our store includes diamond gold rings, personalized bracelets and silver earrings.",
        "sold": "The most popular jewelry in our store includes diamond gold rings, personalized bracelets and silver earrings.",
        "prices": "Our prices vary depending on the material and design.",
        "price": "Our prices vary depending on the material and design.",
        "payment": "We accept card payments, bank transfers and cash on delivery.",
        "payments": "We accept card payments, bank transfers and cash on delivery.",
        "available": " You can check the availability of the product on its page. If it is out of stock, I can tell you when it will be back in stock.",
        "stock": " You can check the availability of the product on its page. If it is out of stock, I can tell you when it will be back in stock.",
        "care": "To keep your jewelry in perfect condition, we recommend that you store it in a dry place, away from moisture and chemicals.",
        "exchange": "Sure! We offer exchanges within 30 days, provided that the jewelry is in perfect condition.",
        "availability": "You can check the stock directly on our website or I can tell you if a product is available.",
        "available": "You can check the stock directly on our website or I can tell you if a product is available.",
        "personalized": "Yes, we offer personalized jewelry! You can add engravings or choose specific gemstones.",
        "men": " Yes, we have a selection of men's jewelry, including leather bracelets, silver rings and engraved gold.",
        "man": " Yes, we have a selection of men's jewelry, including leather bracelets, silver rings and engraved gold.",
        "women": " Yes, we have a selection of women's jewelry, including leather bracelets, silver rings and engraved gold.",
        "made": " Yes, most of our jewelry is handmade by talented artisans, to ensure a unique and quality product.",
        "manual": " Yes, most of our jewelry is handmade by talented artisans, to ensure a unique and quality product.",
        "warranty": " We offer a 12-month warranty on our jewelry purchased, covering manufacturing defects.",
        "warranty": " We offer a 12-month warranty for purchased jewelry, covering manufacturing defects.",
        "location": " The store is located in the Center of Chisinau, Gemeni et.2, Ștefan cel mare și sfint 136, Chisinau, Moldova",
        "trends": " This season, trends include minimalist jewelry, with fine and modern designs, but also bracelets and rings with colored gemstones.",
        "own material": "Our jewelry is made using high-quality materials carefully selected from trusted suppliers. We ensure that they meet our standards for durability and aesthetics.",
        "материал": "Наши украшения выполнены из нержавеющей стали c покрытием из 18-каратного золота или родия.",
        "скидки": "Да, y нас периодические скидки и специальные предложения для определённых коллекций.",
        "скидка": "Да, y нас периодические скидки и специальные предложения для определённых коллекций.",
        "международная": "Да, мы доставляем в многие страны. Стоимость и время доставки зависят от вашего местоположения.",
        "за границу": "Да, мы доставляем в многие страны. Стоимость и время доставки зависят от вашего местоположения.",
        "страна": "Да, мы доставляем в многие страны. Стоимость и время доставки зависят от вашего местоположения.",
        "персонализация": "Да, мы специализируемся на индивидуальных украшениях, создавая что-то уникальное для вас.",
        "возврат": "Вы можете вернуть неперсонализированные товары в течение 30 дней c момента покупки.",
        "обратный возврат": "Вы можете вернуть неперсонализированные товары в течение 30 дней c момента покупки.",
        "возврат товаров": "Вы можете вернуть неперсонализированные товары в течение 30 дней c момента покупки.",
        "возврат средств": "Вы можете вернуть неперсонализированные товары в течение 30 дней c момента покупки.",
        "обмен": "Конечно! Мы принимаем заказы на специальные события, такие как свадьбы, юбилеи или другие важные события.",
        "гипоаллергенный": "Да, большинство наших украшений выполнены из гипоаллергенных материалов, идеальных для чувствительной кожи.",
        "размер": "Да, мы предлагаем услуги по корректировке размера для большинства наших украшений.",
        "обработка": "Время обработки заказа составляет примерно 7-14 рабочих дней.",
        "продолжительность": "Время обработки заказа составляет примерно 7-14 рабочих дней.",
        "доставка": "Время доставки заказа составляет примерно 7-14 рабочих дней.",
        "доставить": "Время доставки заказа составляет примерно 7-14 рабочих дней.",
        "политика": "Вы можете вернуть неперсонализированные товары в течение 30 дней c момента покупки.",
        "популярное": "Самые популярные украшения в нашем магазине включают золотые кольца c бриллиантами, персонализированные браслеты и серебряные серьги.",
        "самые продаваемые": "Самые продаваемые украшения в нашем магазине включают золотые кольца c бриллиантами, персонализированные браслеты и серебряные серьги.",
        "цена": "Наши цены варьируются в зависимости от материала и дизайна.",
        "платеж": "Мы принимаем платежи картой, банковским переводом и наложенным платежом.",
        "доступность": "Вы можете проверить доступность товара на eгo странице. Если он закончился, я могу сообщить, когда он снова будет в наличии.",
        "уход": "Для того чтобы ваши украшения сохраняли отличный вид, мы рекомендуем хранить их в сухом месте, защищённом от влаги и химических веществ.",
        "обмен товара": "Конечно! Мы предлагаем обмен в течение 30 дней, при условии, что украшение находится в идеальном состоянии.",
        "персонализированное": "Да, мы предлагаем индивидуальные украшения! Вы можете добавить гравировку или выбрать конкретные драгоценные камни.",
        "мужчины": "Да, y нас есть коллекция украшений для мужчин, включая кожаные браслеты, серебряные кольца и гравированные золотые изделия.",
        "женщины": "Да, y нас есть коллекция украшений для женщин, включая кожаные браслеты, серебряные кольца и гравированные золотые изделия.",
        "ручная работа": "Да, большинство наших украшений сделано вручную талантливыми ремесленниками, чтобы гарантировать уникальность и высокое качество продукции.",
        "гарантия": "Мы предоставляем гарантию на 12 месяцев на приобретённые украшения, покрывая производственные дефекты.",
        "местоположение": "Магазин расположен в центре Кишинёва, Гемени эт.2, Штефан чел Mape и Святой 136, Кишинёв, Молдова.",
        "тенденции": "B этом сезоне популярны минималистичные украшения c тонким и современным дизайном, a также браслеты и кольца c цветными драгоценными камнями.",
        "собственные материалы": "Наши украшения выполнены из высококачественных материалов, тщательно отобранных y надёжных поставщиков. Мы гарантируем, что они соответствуют нашим стандартам по долговечности и эстетике."
};

function sendMessage() {
    let input = document.getElementById("user-input").value.trim().toLowerCase();
    if (input === "") return;

    let chatBox = document.getElementById("chat-box");

    let userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.textContent = input;
    chatBox.appendChild(userMessage);
    document.getElementById("user-input").value = "";

    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.className = "message bot";

        let currentLang = getLanguage();
let response = translations[currentLang]?.noInfo || "Îmi pare rău, nu am informații despre acest subiect.";
        let found = false;

        for (let key in knowledgeBase) {
            if (input.includes(key)) {
                response = knowledgeBase[key];
                found = true;
                break;
            }
        }

        if (!found) {
            botMessage.setAttribute("data-translate", "noInfo");
        }

        botMessage.textContent = response;
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function toggleChat() {
    let chatContainer = document.getElementById("chat-container");
    chatContainer.style.display = chatContainer.style.display === "block" ? "none" : "block";
}

window.addEventListener("scroll", function () {
    const button = document.querySelector(".chatbot-icon");
    const chatContainer = document.querySelector(".chat-container");
    const footer = document.querySelector(".footer");

    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const defaultBottom = 20;

    if (footerRect.top < windowHeight) {
        let overlap = windowHeight - footerRect.top;
        let newBottom = Math.max(defaultBottom, overlap + 20);

        button.style.bottom = `${newBottom}px`;
        chatContainer.style.bottom = `${newBottom + 80}px`;
    } else {
        button.style.bottom = `${defaultBottom}px`;
        chatContainer.style.bottom = "100px";
    }
});




const translations = {
    ro: {
        pageTitle: "Despre",
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
        intro: "Magazinul Mimilux este o companie de bijuterii personalizate, cu prezență online și offline, specializată în bijuterii gravate precum inele, coliere, cercei, brățări și butoni.",
        details: "Bijuteriile sunt realizate din oțel inoxidabil placat cu aur de 18 carate sau cu rodiu, ceea ce le face rezistente la uzură și decolorare. Mimilux oferă o garanție de un an pentru fiecare bijuterie, iar gravura este inclusă în preț. În ceea ce privește ambalajul, magazinul oferă peste 10 tipuri de ambalaje, cu și fără mesaje personalizate, însă ambalajul nu este inclus în prețul bijuteriei.",
        readMore: "Citește mai mult ▼",
        readLess: "Citește mai puțin ▲",
        faqTitle: "Întrebări adresate frecvent",
        faqQ1: "Ce materiale folosiți pentru bijuterii?",
        faqA1: "Bijuteriile noastre sunt realizate din oțel inoxidabil placat cu aur de 18 carate sau rodiu.",
        faqQ2: "Oferiți opțiuni de personalizare?",
        faqA2: "Da, ne specializăm în bijuterii personalizate pentru a crea ceva unic pentru dumneavoastră.",
        faqQ3: "Care este politica de returnare?",
        faqA3: "Puteți returna produsele nepersonalizate în termen de 30 de zile de la achiziție.",
        faqQ4: "Pot comanda bijuterii pentru un eveniment special?",
        faqA4: "Desigur! Acceptăm comenzi pentru evenimente speciale precum nunți, aniversări sau alte ocazii importante.",
        faqQ5: "Bijuteriile voastre sunt hipoalergenice?",
        faqA5: "Da, majoritatea bijuteriilor noastre sunt realizate din materiale hipoalergenice, ideale pentru pielea sensibilă.",
        faqQ6: "Pot să modific dimensiunea bijuteriilor?",
        faqA6: "Da, oferim servicii de ajustare a dimensiunii pentru majoritatea bijuteriilor noastre.",
        faqQ7: "Cât durează procesarea unei comenzi personalizate?",
        faqA7: "Timpul de procesare pentru o comandă personalizată este de aproximativ 7-14 zile lucrătoare.",
        faqQ8: "Bijuteriile sunt făcute din material propriu?",
        faqA8: "Bijuteriile noastre sunt realizate folosind materiale de înaltă calitate selectate cu atenție de la furnizori de încredere. Ne asigurăm că acestea respectă standardele noastre pentru durabilitate și estetică.",
        pageTitle: "Despre",
        chatbotIcon: "💬",
        inputPlaceholder: "Scrie o întrebare...",
        sendMessageButton: "Trimite",
        noInfo: "Îmi pare rău, nu am informații despre acest subiect.",
    },
    en: {
        pageTitle: "About Us",
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
        intro: "Mimilux is a personalized jewelry company, both online and offline, specialized in engraved jewelry such as rings, necklaces, earrings, bracelets, and cufflinks.",
        details: "The jewelry is made of stainless steel plated with 18k gold or rhodium, which makes it resistant to wear and discoloration. Mimilux offers a one-year warranty for each piece, and engraving is included in the price. As for packaging, the store offers over 10 types of packaging, with or without personalized messages, but packaging is not included in the jewelry price.",
        readMore: "Read more ▼",
        readLess: "Read less ▲",
        faqTitle: "Frequently Asked Questions",
        faqQ1: "What materials do you use for jewelry?",
        faqA1: "Our jewelry is made from stainless steel plated with 18k gold or rhodium.",
        faqQ2: "Do you offer customization options?",
        faqA2: "Yes, we specialize in custom jewelry to create something unique for you.",
        faqQ3: "What is your return policy?",
        faqA3: "You can return non-customized products within 30 days of purchase.",
        faqQ4: "Can I order jewelry for a special event?",
        faqA4: "Of course! We accept orders for special events such as weddings, anniversaries, or other important occasions.",
        faqQ5: "Are your jewelry pieces hypoallergenic?",
        faqA5: "Yes, most of our jewelry is made from hypoallergenic materials, ideal for sensitive skin.",
        faqQ6: "Can I adjust the size of the jewelry?",
        faqA6: "Yes, we offer resizing services for most of our jewelry.",
        faqQ7: "How long does it take to process a custom order?",
        faqA7: "The processing time for a custom order is approximately 7-14 business days.",
        faqQ8: "Are the jewelry pieces made from your own material?",
        faqA8: "Our jewelry is made using high-quality materials carefully selected from trusted suppliers. We ensure they meet our standards for durability and aesthetics.",
        chatbotIcon: "💬",
        inputPlaceholder: "Ask a question...",
        sendMessageButton: "Send",
        noInfo: "Sorry, I don't have information about this topic.",

    },
    ru: {
        pageTitle: "O нас",
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
        intro: "Mimilux — это компания по производству персонализированных украшений c онлайн и офлайн присутствием, специализирующаяся на гравированных изделиях, таких как кольца, ожерелья, серьги, браслеты и запонки.",
        details: "Украшения изготовлены из нержавеющей стали c покрытием из 18-каратного золота или родия, что делает их устойчивыми к износу и выцветанию. Mimilux предоставляет годовую гарантию на каждое изделие, а гравировка входит в стоимость. Что касается упаковки, магазин предлагает более 10 вариантов, с персонализированными сообщениями и без них, однако упаковка не входит в цену украшения.",
        readMore: "Читать далее ▼",
        readLess: "Читать меньше ▲",
        faqTitle: "Часто задаваемые вопросы",
        faqQ1: "Из каких материалов вы используете для украшений?",
        faqA1: "Наши украшения сделаны из нержавеющей стали c покрытием из 18-каратного золота или родия.",
        faqQ2: "Предлагаете ли вы опции для кастомизации?",
        faqA2: "Да, мы специализируемся на индивидуальных украшениях, создавая что-то уникальное для вас.",
        faqQ3: "Какова ваша политика возврата?",
        faqA3: "Вы можете вернуть нестандартные изделия в течение 30 дней после покупки.",
        faqQ4: "Могу ли я заказать украшения для особого события?",
        faqA4: "Конечно! Мы принимаем заказы на специальные события, такие как свадьбы, юбилеи или другие важные события.",
        faqQ5: "Ваши украшения гипоаллергенны?",
        faqA5: "Да, большинство наших украшений изготовлены из гипоаллергенных материалов, идеально подходящих для чувствительной кожи.",
        faqQ6: "Могу ли я изменить размер украшений?",
        faqA6: "Да, мы предлагаем услуги по изменению размера для большинства наших украшений.",
        faqQ7: "Сколько времени занимает обработка индивидуального заказа?",
        faqA7: "Время обработки индивидуального заказа составляет примерно 7-14 рабочих дней.",
        faqQ8: "Украшения сделаны из ваших собственных материалов?",
        faqA8: "Наши украшения изготовлены из высококачественных материалов, тщательно отобранных y надежных поставщиков. Мы гарантируем, что они соответствуют нашим стандартам прочности и эстетики.",
        chatbotIcon: "💬",
        inputPlaceholder: "Задайте вопрос...",
        sendMessageButton: "Отправить",
        noInfo: "Извините, у меня нет информации по этой теме.",
    }
};


function switchLanguage(lang) {
    currentLanguage = lang;

    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    localStorage.setItem('selectedLanguage', lang);
    setPageLanguage(lang);
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
    currentLanguage = lang;

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