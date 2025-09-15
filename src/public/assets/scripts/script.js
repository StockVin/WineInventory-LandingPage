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

    // ==== Scroll Reveal (Reusable) ====
    function setupScrollReveal(targetSelector, staggerSelector) {
        const targets = document.querySelectorAll(targetSelector);
        if (!targets.length) return;

        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (staggerSelector) {
            const staggered = document.querySelectorAll(staggerSelector);
            staggered.forEach((el, i) => {
                el.style.transitionDelay = `${i * 120}ms`;
                el.setAttribute('data-reveal-delay', '');
            });
        }

        if (prefersReduced) {
            targets.forEach(el => el.classList.add('is-visible'));
            return;
        }

        targets.forEach(el => el.classList.add('reveal-on-scroll'));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('is-visible');
                    else entry.target.classList.remove('is-visible');
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
        );

        targets.forEach(el => observer.observe(el));
    }

    // About App
    setupScrollReveal(
        '#about-app, #about-app .about-app-title, #about-app .information-container, #about-app .text-container, #about-app .video-container, #about-app .buttons-container',
        '#about-app .about-app-title, #about-app .text-container, #about-app .video-container, #about-app .buttons-container'
    );

    // Services Section (header + service cards)
    setupScrollReveal(
        '#services, #services .services-header h1, #services .service-card',
        '#services .service-card'
    );
});
