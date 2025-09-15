const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About us",
    "nav.services": "Services",
    "nav.plans": "Plans",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.aboutapps": "About app",
    "home.title": "Optimize your inventory intelligently with Wine Inventory",
    "home.description": "Optimize your inventory to reduce waste and maximize product quality.",
    "home.button": "Get started",
    "services.title": "Services",
    "services.card-owner": "For liquor store owners",
    "services.card-provider": "For providers",
    "services.list-1": "Smart inventory management for your liquor store",
    "services.list-2": "Monitor your inventory in real time from any device.",
    "services.list-3": "Automatic alerts for products that are low in stock or close to expiration.",
    "services.list-4": "Integrated supplier and order management.",
    "services.list-5": "Sales reports and analysis of best-selling products.",
    "services.list-6": "Customer and sales management tools:",
    "services.list-7": "Detailed customer records and purchase history.",
    "services.list-8": "Customizable loyalty and discount system.",
    "services.list-9": "Analysis of purchasing behavior and customer preferences.",
    "services.list-10": "Sending personalized promotions and offers.",
    "about-app.title":"About app",
    "about-app.title-1":"Smart Wine and Pisco Management",
    "about-app.subtitle":"WineInventory is designed to adapt to the specific needs of each user, providing key tools for effective management of the wine and pisco production process, improving efficiency and optimizing the experience for both producers and distributors.",
    "about-app.description-1":"Inventory Management",
    "about-app.description-2":"Real-time tracking of your wine and pisco inventory.",
    "about-app.description-3":"Sales Analysis",
    "about-app.description-4":"Detailed reports and performance metrics.",
    "about-app.description-5":"Smart Alerts",
    "about-app.description-6":"Notifications about low stock and important updates.",
    "about-app.download":"Download it now at:"
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.plans": "Planes",
    "nav.faq": "FAQ",
    "nav.contact": "Contacto",
    "nav.aboutapps": "Acerca de",
    "home.title":"Optimiza tu inventario de forma inteligente con WineInventory",
    "home.description": "Optimice su stock para reducir el desperdicio y maximizar la calidad de sus productos",
    "home.button": "Empezar",
    "services.title": "Servicios",
    "services.card-owner": "Para propietarios de licorerías",
    "services.card-provider": "Para proveedores",
    "services.list-1": "Gestión inteligente de inventario para su licorería",
    "services.list-2": "Supervise su inventario en tiempo real desde cualquier dispositivo",
    "services.list-3": "Alertas automáticas de productos con bajo stock o próximos a caducar",
    "services.list-4": "Gestión integrada de proveedores y pedidos",
    "services.list-5": "Informes de ventas y análisis de los productos más vendidos",
    "services.list-6": "Herramientas de gestión de clientes y ventas",
    "services.list-7": "Registros detallados de clientes e historial de compras",
    "services.list-8": "Sistema personalizable de fidelización y descuentos",
    "services.list-9": "Análisis del comportamiento de compra y de los clientes preferencias.",
    "services.list-10": "Envío de promociones y ofertas personalizadas.",
    "about-app.title":"Acerca de la app",
    "about-app.title-1":"Gestión inteligente de vinos y piscos",
    "about-app.subtitle":"WineInventory está diseñado para adaptarse a las necesidades específicas de cada usuario, proporcionando herramientas clave para una gestión eficaz del proceso de producción de vino y pisco, mejorando la eficiencia y optimizando la experiencia tanto de productores como de distribuidores.",
    "about-app.description-1":"Gestión de inventario",
    "about-app.description-2":"Seguimiento en tiempo real de su inventario de vinos y piscos.",
    "about-app.description-3":"Análisis de ventas",
    "about-app.description-4":"Informes detallados y métricas de rendimiento.",
    "about-app.description-5":"Alertas inteligentes",
    "about-app.description-6":"Notificaciones sobre stock bajo y actualizaciones importantes.",
    "about-app.download":"Descargala ahora en:"
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
