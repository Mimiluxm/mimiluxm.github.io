function toggleReadMore() {
    const hiddenText = document.querySelector('.mai-mult .ascuns');
    const toggleButton = document.querySelector('.mai-mult .mai');

    if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
        hiddenText.style.display = 'block';
        toggleButton.textContent = 'Read less ▲'; 
    } else {
        hiddenText.style.display = 'none';
        toggleButton.textContent = 'Read more ▼'; 
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
    "material": "Our jewelry is made of stainless steel plated with 18 karat gold or rhodium.",
    "discounts": "Yes, we have periodic discounts and special offers for certain collections.",
    "discount": "Yes, we have periodic discounts and special offers for certain collections.",
    "sale": "Yes, we have periodic discounts and special offers for certain collections.",
    "sales": "Yes, we have periodic discounts and special offers for certain collections.",
    "international": "Yes, we ship to many countries. The cost and delivery time depend on your location.",
    "international": "Yes, we ship to many countries. The cost and delivery time depend on your location.",
    "abroad": "Yes, we deliver to many countries. The cost and delivery time depend on your location.",
    "outside": "Yes, we deliver to many countries. The cost and delivery time depend on your location.",
    "country": "Yes, we ship to many countries. The cost and delivery time depend on your location.",
    "personalization": "Yes, we specialize in personalized jewelry to create something unique for you.",
    "return": "You can return non-personalized products within 30 days of purchase.",
"return": "You can return non-personalized products within 30 days of purchase.",
"return": "You can return non-personalized products within 30 days of purchase.",
"refund": "You can return non-personalized products within 30 days of purchase.",
"refund": "You can return non-personalized products within 30 days of purchase.",
"event": "Of course! We accept orders for special events such as weddings, anniversaries or other important occasions.",
"hypoallergenic": "Yes, most of our jewelry is made of hypoallergenic materials, ideal for sensitive skin.",
"size": "Yes, we offer size adjustment services for most of our jewelry.",
"processing": "The processing time for a order is approximately 7-14 business days.",
"durareza": "The processing time for an order is approximately 7-14 business days.",
"durareza": "The processing time for an order is approximately 7-14 business days.",
"tim": "The processing time for an order is approximately 7-14 business days.",
"delivery": "The delivery time for an order is approximately 7-14 business days.",
"deliver": "The delivery time for an order is approximately 7-14 business days.",
"deliver": "The delivery time for an order is approximately 7-14 business days.",
"deliver": "The delivery time for an order is approximately 7-14 business days.",
"policia": "You can return non-personalized products within 30 days from purchase.",
"popular": "The most popular jewelry in our store includes diamond gold rings, personalized bracelets and silver earrings.",
"sold": "The most popular jewelry in our store includes diamond gold rings, personalized bracelets and silver earrings.",
"sold": "The most popular jewelry in our store includes diamond gold rings, personalized bracelets and silver earrings.",
"prices": "Our prices vary depending on the material and design.",
"prices": "Our prices vary depending on the material and design.",
"price": "Our prices vary depending on the material and design.",
"price": "Our prices vary depending on the material and design.",
"payment": "We accept card payments, bank transfer and cash on delivery.",
"payment": "We accept card payments, bank transfer and cash on delivery.",
"payment": "We accept card payments, bank transfers and cash on delivery.",
"payments": "We accept card payments, bank transfers and cash on delivery.",
   "available": " You can check the availability of the product on its page. If it is out of stock, I can tell you when it will be back in stock.",
"stock": " You can check the availability of the product on its page. If it is out of stock, I can tell you when it will be back in stock.",
"care": "To keep your jewelry in perfect condition, we recommend that you store it in a dry place, away from moisture and chemicals.",
"care": "To keep your jewelry in perfect condition, we recommend that you store it in a dry place, away from moisture and chemicals.",
"exchange": "Sure! We offer exchanges within 30 days, provided that the jewelry is in perfect condition.",
"availability": "You can check the stock directly on our website or I can tell you if a product is available.",
"available": "You can check the stock directly on our website or I can tell you if a product is available.",
"personalized": "Yes, we offer personalized jewelry! You can add engravings or choose specific gemstones.",
"men": " Yes, we have a selection of men's jewelry, including leather bracelets, silver rings and engraved gold.",
"man": " Yes, we have a selection of men's jewelry, including leather bracelets, silver rings and engraved gold.",
"man": " Yes, we have a selection of men's jewelry, including leather bracelets, silver rings and engraved gold.",
"women": " Yes, we have a selection of women's jewelry, including leather bracelets, silver rings and engraved gold.",
"made": " Yes, most of our jewelry is handmade by talented artisans, to ensure a unique and quality product.",
"manual": " Yes, most of our jewelry is handmade by talented artisans, to ensure a unique and quality product.",
"warranty": " We offer a 12-month warranty on our jewelry purchased, covering manufacturing defects.",
"warranty": " We offer a 12-month warranty for purchased jewelry, covering manufacturing defects.",
"location": " The store is located in the Center of Chisinau, Gemeni et.2, Ștefan cel mare și sfint 136, Chisinau, Moldova",
"location": " The store is located in the Center of Chișinău, Gemeni et.2, Ștefan cel mare şi sfînt 136, Chișinău, Moldova",
"trends": " This season, trends include minimalist jewelry, with fine and modern designs, but also bracelets and rings with colored gemstones.",
"trends": " This season, trends include minimalist jewelry, with fine and modern designs, but also bracelets and rings with colored gemstones.",
"own material": "Our jewelry is made using high-quality materials carefully selected from trusted suppliers. We ensure that they meet our standards for durability and aesthetics."
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
        
        let response = "Sorry, I have no information on this topic.";
        
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
  