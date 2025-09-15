const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About us",
    "nav.services": "Services",

    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.aboutapps": "About app",
    "home.title": "Optimize your inventory intelligently with Wine Inventory",
    "home.description": "Optimize your inventory to reduce waste and maximize product quality.",

    "services.title": "Services",
    "services.card-owner": "For liquor store owners",
    "services.card-provider": "For providers",
    "services.list-1": "Smart inventory management for your liquor store",
    "services.list-2": "Monitor your inventory in real time from any device.",

    "services.list-4": "Integrated supplier and order management.",
    "services.list-5": "Sales reports and analysis of best-selling products.",
    "services.list-6": "Customer and sales management tools:",
    "services.list-7": "Detailed customer records and purchase history.",
    "services.list-8": "Customizable loyalty and discount system.",

  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.plans": "Planes",
    "nav.faq": "FAQ",
    "nav.contact": "Contacto",
    "nav.aboutapps": "Acerca de",

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
