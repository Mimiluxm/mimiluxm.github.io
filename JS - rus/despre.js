function toggleReadMore() {
    const hiddenText = document.querySelector('.mai-mult .ascuns');
    const toggleButton = document.querySelector('.mai-mult .mai');

    if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
        hiddenText.style.display = 'block';
        toggleButton.textContent = 'Читать меньше ▲'; 
    } else {
        hiddenText.style.display = 'none';
        toggleButton.textContent = 'Читать далее ▼'; 
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const faqTiles = document.querySelectorAll(".faq-tile");

    faqTiles.forEach((tile) => {
        tile.addEventListener("click", function () {
            this.classList.toggle("open");
        });
    });
});


const knowledgeBase = {
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
        "местоположение": "Магазин расположен в центре Кишинёва, Гемени эт.2, Штефан чел Mape и Сфинт 136, Кишинёв, Молдова.",
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
        
        let response = "Извините, y меня нет информации по этой теме.";
        
        for (let key in knowledgeBase) {
            if (input.includes(key)) {
                response = knowledgeBase[key];
                break;
            }
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
  