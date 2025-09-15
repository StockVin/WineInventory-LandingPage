document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    

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

/*FORMULARIO*/

 const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Regex para validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (name.value.trim() === '') {
                alert('Por favor, ingresa tu nombre.');
                name.focus();
                return;
            }

            if (!emailRegex.test(email.value.trim())) {
                alert('Por favor, ingresa un correo válido.');
                email.focus();
                return;
            }

            if (message.value.trim() === '') {
                alert('Por favor, ingresa un mensaje.');
                message.focus();
                return;
            }

            
            alert('¡Gracias por contactarnos, ' + name.value + '! Pronto te responderemos.');
            contactForm.reset();
        });
    }

    /* IDIOMA */
    window.setLanguage = function(lang) {
        const buttons = document.querySelectorAll('.language-selector button');
        buttons.forEach(btn => btn.classList.remove('active'));

        if (lang === 'es') {
            document.querySelector('.language-selector .es').classList.add('active');
            alert('Idioma cambiado a Español (aquí podrías traducir contenido)');
        } else if (lang === 'en') {
            document.querySelector('.language-selector .en').classList.add('active');
            alert('Language switched to English (here you could translate content)');
        }
    };
});
