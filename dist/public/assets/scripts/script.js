document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const languageButtons = document.querySelectorAll('.language-selector button');
    const contactSection = document.querySelector('#contact');
    const contactInfo = document.querySelector('.contact-info');
    const faqItems = document.querySelectorAll('.faq-item');
    function isInViewport(element) {
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        return (
            rect.top <= (windowHeight * 0.8) &&
            (rect.top + rect.height) >= (windowHeight * 0.2)
        );
    }

    function handleContactScroll() {
        if (isInViewport(contactSection)) {
            contactInfo.classList.add('visible');
        } else if (window.scrollY < contactSection.offsetTop) {
            contactInfo.classList.remove('visible');
        }
    }

    function initScrollHandlers() {
        handleContactScroll();
        let isScrolling;
        window.addEventListener('scroll', function() {
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(handleContactScroll, 50);
        }, { passive: true });
    }
    
    setTimeout(initScrollHandlers, 300);
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
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherButton = otherItem.querySelector('.faq-question');
                    const otherContent = otherItem.querySelector('.faq-answer');
                    otherButton.setAttribute('aria-expanded', 'false');
                    otherContent.style.maxHeight = null;
                }
            });
            
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            const content = item.querySelector('.faq-answer');
            
            if (isExpanded) {
                item.classList.remove('active');
                question.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = null;
            } else {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
    
    window.addEventListener('resize', () => {
        document.querySelectorAll('.faq-item.active .faq-answer').forEach(openContent => {
            openContent.style.maxHeight = openContent.scrollHeight + 'px';
        });
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question-wrapper').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');
    });
});
