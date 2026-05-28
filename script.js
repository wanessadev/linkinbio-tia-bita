document.getElementById("currentYear").textContent = new Date().getFullYear();

const modalContent = {
  kits: {
    title: "Kits da Tia Bita",
    type: "kits",
    items: [
      {
        name: "KIT 1",
        price: "R$ 145,00",
        details: ["Bolo 10 cm (4 a 6 fatias)", "1 topo simples", "10 brigadeiros", "2 cupcakes"]
      },
      {
        name: "KIT 2",
        price: "R$ 175,00",
        details: ["Bolo 12 cm (8 a 10 fatias)", "1 topo simples", "15 brigadeiros", "4 cupcakes"]
      },
      {
        name: "KIT 3",
        price: "R$ 200,00",
        details: ["Bolo 15 cm (12 a 15 fatias)", "1 topo simples", "15 brigadeiros", "4 cupcakes"]
      },
      {
        name: "KIT 4",
        price: "R$ 250,00",
        details: ["Bolo 18 cm (17 a 20 fatias)", "1 topo simples", "20 brigadeiros", "4 cupcakes"]
      },
      {
        name: "KIT 5",
        price: "R$ 310,00",
        details: ["Bolo 20 cm (19 a 23 fatias)", "1 topo simples", "25 brigadeiros", "6 cupcakes"]
      }
    ]
  },
  easter: {
    title: "Cardápio on-line",
    type: "menu",
    sections: [
      {
        title: "Bolos decorados",
        layout: "price",
        items: [
          ["Bolo aro 10 cm (4 a 6 fatias)", "R$ 100,00"],
          ["Bolo aro 12 cm (8 a 10 fatias)", "R$ 140,00"],
          ["Bolo aro 15 cm (12 a 15 fatias)", "R$ 180,00"],
          ["Bolo aro 18 cm (17 a 20 fatias)", "R$ 220,00"],
          ["Bolo aro 20 cm (19 a 23 fatias)", "R$ 280,00"],
          ["Bolo aro 25 cm (21 a 33 fatias)", "R$ 330,00"],
          ["Bolo aro 30 cm (30 a 45 fatias)", "R$ 430,00"]
        ]
      },
      {
        title: "Massas",
        items: ["Amanteigada", "Red velvet", "Chocolate", "Cenoura", "Limão", "Laranja", "Baunilha", "Mesclado"]
      },
      {
        title: "Recheios",
        items: [
          "Chocolate meio amargo",
          "Chocolate ao leite",
          "Chocolate branco",
          "Negresco",
          "Leite Ninho",
          "Quatro leites",
          "Mousse sensação de morango",
          "Mousse sensação de maracujá",
          "Mousse de limão",
          "Brigadeiro de limão",
          "Brigadeiro de maracujá",
          "Ninho com abacaxi",
          "Ninho com morango",
          "Ninho com geleia de morango",
          "Ninho com avelã",
          "Ferrero Rocher"
        ]
      },
      {
        title: "Recheios adicionais",
        items: ["Geleia artesanal de morango", "Crocante de amendoim", "Chocolate triturado", "Frutas (a definir)", "Brigadeiro"]
      },
      {
        title: "Docinhos gourmet",
        items: [
          "Brigadeiro tradicional",
          "Prestígio",
          "Brigadeiro de limão",
          "Beijinho",
          "Casadinho",
          "Leite Ninho",
          "Olho de sogra",
          "Fini - sabor desejado",
          "Moranguinho",
          "Crocobol",
          "Crocante de amendoim"
        ],
        note: "O cento de docinho R$ 140,00 • Meio cento de docinho R$ 80,00"
      },
      {
        title: "Sobremesas",
        layout: "price",
        items: [
          ["Limão tradicional", "R$ 120,00"],
          ["Torta de limão c/ chocolate", "R$ 120,00"],
          ["Holandesa", "R$ 140,00"],
          ["Casadinho", "R$ 120,00"],
          ["Morango", "R$ 140,00"],
          ["Banoffe", "R$ 140,00"],
          ["Chocolate com morango", "R$ 140,00"],
          ["Maracujá", "R$ 120,00"],
          ["Prestígio", "R$ 120,00"],
          ["Bombom de uva", "R$ 120,00"],
          ["Pavê tradicional", "R$ 120,00"],
          ["Pavê 2 amores", "R$ 140,00"],
          ["Delícia de abacaxi", "R$ 120,00"],
          ["Bombom na travessa", "R$ 140,00"]
        ]
      }
    ]
  },
  website: {
    title: "Nosso Website",
    items: [
      "O site oficial da Doces da Tia Bita está sendo preparado com carinho.",
      "Enquanto isso, você pode ver novidades no Instagram ou fazer seu pedido pelo WhatsApp."
    ]
  },
  payments: {
    title: "Formas de Pagamento",
    items: [
      "Pix",
      "Cartão de débito",
      "Cartão de crédito",
      "Pagamento combinado no momento do pedido"
    ]
  }
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalList = document.getElementById("modalList");
const modalClose = document.getElementById("modalClose");

function openModal(type) {
  const content = modalContent[type];
  if (!content) return;

  modalTitle.textContent = content.title;
  modalList.className = "modal-list";

  if (content.type === "kits") {
    modalList.classList.add("kit-list");
    modalList.innerHTML = content.items.map((kit) => `
        <li class="kit-item">
          <div class="kit-heading">
            <strong>${kit.name}</strong>
            <span>${kit.price}</span>
          </div>
          <ul>
            ${kit.details.map((detail) => `<li>${detail}</li>`).join("")}
          </ul>
        </li>
      `).join("");
  } else if (content.type === "menu") {
    modalList.classList.add("menu-list");
    modalList.innerHTML = content.sections.map((section) => `
      <li class="menu-section">
        <h3>${section.title}</h3>
        ${section.layout === "price"
          ? `<div class="price-list">
              ${section.items.map(([name, price]) => `
                <div class="price-row">
                  <span>${name}</span>
                  <strong>${price}</strong>
                </div>
              `).join("")}
            </div>`
          : `<ul>
              ${section.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>`}
        ${section.note ? `<p class="menu-note">${section.note}</p>` : ""}
      </li>
    `).join("");
  } else {
    modalList.innerHTML = content.items.map((item) => `<li>${item}</li>`).join("");
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll("[data-modal]").forEach((button) => {
  button.addEventListener("click", () => openModal(button.dataset.modal));
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});
