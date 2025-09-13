const translations = {
  en: {
    "services.title": "Services",
    "services.card-owner": "For liquor store owners",
    "services.card-provider": "For providers",
    "services.list-1": "Smart inventory management for your liquor store",
    "services.list-2": "Monitor your inventory in real time from any device.",
    "services.list-3":
      "Automatic alerts for products that are low in stock or close to expiration.",
    "services.list-4": "Integrated supplier and order management.",
    "services.list-5": "Sales reports and analysis of best-selling products.",
    "services.list-6": "Customer and sales management tools:",
    "services.list-7": "Detailed customer records and purchase history.",
    "services.list-8": "Customizable loyalty and discount system.",
    "services.list-9":
      "Analysis of purchasing behavior and customer preferences.",
    "services.list-10": "Sending personalized promotions and offers.",
  },
  es: {
    "services.title": "Servicios",
    "services.card-owner": "Para propietarios de licorerías",
    "services.card-provider": "Para proveedores",
    "services.list-1": "Gestión inteligente de inventario para su licorería",
    "services.list-2":
      "Supervise su inventario en tiempo real desde cualquier dispositivo",
    "services.list-3":
      "Alertas automáticas de productos con bajo stock o próximos a caducar",
    "services.list-4": "Gestión integrada de proveedores y pedidos",
    "services.list-5":
      "Informes de ventas y análisis de los productos más vendidos",
    "services.list-6": "Herramientas de gestión de clientes y ventas",
    "services.list-7":
      "Registros detallados de clientes e historial de compras",
    "services.list-8": "Sistema personalizable de fidelización y descuentos",
    "services.list-9":
      "Análisis del comportamiento de compra y de los clientes preferencias.",
    "services.list-10": "Envío de promociones y ofertas personalizadas.",
  },
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang][key];
    if (translation) {
      el.textContent = translation;
    }
  });
}

window.onload = () => {
  const userLang = navigator.language.startsWith("en") ? "es" : "en";
  setLanguage(userLang);
};

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
