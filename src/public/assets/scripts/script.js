document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const languageButtons = document.querySelectorAll('.language-selector button');
    
    function scrollToSection(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            });
        }
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });
    
    function handleLanguageSwitch(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        const languageSelector = document.querySelector('.language-selector');
        
        languageSelector.classList.add('changing');
        
        languageButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.disabled = true;
        });
        
        this.classList.add('active');
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        setTimeout(() => {
            setLanguage(lang);
            setTimeout(() => {
                languageSelector.classList.remove('changing');
                languageButtons.forEach(btn => {
                    btn.disabled = false;
                });
            }, 300);
            
        }, 200);
    }
    languageButtons.forEach(button => {
        button.addEventListener('click', handleLanguageSwitch);
    });
    
    const currentLang = document.documentElement.lang || 'en';
    const activeButton = document.querySelector(`.language-selector button[data-lang="${currentLang}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
});
