function toggleReadMore() {
    const hiddenText = document.querySelector('.mai-mult .ascuns');
    const toggleButton = document.querySelector('.mai-mult .mai');

    if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
        hiddenText.style.display = 'block';
        toggleButton.textContent = 'Citește mai puțin ▲'; 
    } else {
        hiddenText.style.display = 'none';
        toggleButton.textContent = 'Citește mai mult ▼'; 
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
    "material": "Bijuteriile noastre sunt realizate din oțel inoxidabil placat cu aur de 18 carate sau rodiu.",
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
    "material propriu": "Bijuteriile noastre sunt realizate folosind materiale de înaltă calitate selectate cu atenție de la furnizori de încredere. Ne asigurăm că acestea respectă standardele noastre pentru durabilitate și estetică."
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
        
        let response = "Îmi pare rău, nu am informații despre acest subiect.";
        
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