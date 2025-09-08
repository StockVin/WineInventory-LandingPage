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
    },
    es: {
        "nav.home": "Inicio",
        "nav.about": "Nosotros",
        "nav.services": "Servicios",
        "nav.plans": "Planes",
        "nav.faq": "FAQ",
        "nav.contact": "Contacto",
        "nav.aboutapps": "Acerca de",
        "home.title": "Optimiza tu inventario de forma inteligente con WineInventory",
        "home.description": "Optimice su stock para reducir el desperdicio y maximizar la calidad de sus productos",
        "home.button": "Empezar",
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translations[lang][key];
        if (translation) {
            el.textContent = translation;
        }
    });
}

window.onload = () => {
    const userLang = navigator.language.startsWith('en') ? 'es' : 'en';
    setLanguage(userLang);
};

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});