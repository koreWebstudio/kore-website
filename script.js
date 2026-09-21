// 1. Força o scroll a ir para o topo (Y: 0) ao recarregar a página
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// 2. Limpa o '#contacto' da URL sem recarregar a página
if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
}

// -------------------------------------------------------------
// Dicionário de Traduções (Multilíngue)
// -------------------------------------------------------------
const translations = {
    ES: {
        // Navigation
        "nav.about": "Nosotros",
        "nav.projects": "Proyectos",
        "nav.contact": "Contacto",
        "nav.lang_label": "Seleccionar idioma",

        // Hero
        "hero.badge": "&lt;Web_Studio /&gt;",
        "hero.title": "Código <span class=\"highlight\">escrito</span> a mano, no generado en serie.",
        "hero.text": "Mientras la web se llena de copias automáticas y plantillas repetidas, nosotros diseñamos y programamos desde cero. Un estudio boutique donde cada línea de código tiene una intención real.",
        "hero.btn": "Agendá tu primera charla",

        // About / Manifesto
        "about.badge": "&lt;El Manifiesto & El Equipo /&gt;",
        "about.title": "Sin intermediarios, sin atajos. <span class=\"highlight\">Solo nosotros</span> y tu proyecto.",
        "about.text": "Acá no hay agencias gigantes ni intermediarios. Somos un estudio de dos personas enfocado en lo esencial: diseñar con criterio y programar cada proyecto desde cero, hablando siempre de igual a igual.",
        "roles.card1_title": "Código a Medida",
        "roles.card1_text": "Desarrollo técnico a medida, limpio y estructurado línea por línea desde cero.",
        "roles.card2_title": "Diseño & UX",
        "roles.card2_text": "Interfaces cuidadas al detalle para retener y convertir a tus clientes.",
        "roles.card3_title": "Comunicación Real",
        "roles.card3_text": "Acompañamiento directo sin intermediarios en todo el proceso.",

        // Projects
        "projects.badge": "&lt;Proyectos /&gt;",
        "projects.title": "Una muestra de cómo <span class=\"highlight\">llevamos el desarrollo</span> a medida a la práctica.",
        "projects.prev": "Anterior",
        "projects.next": "Siguiente",
        "project1.title": "Lucas Favieri Portafolio",
        "project1.description": "Interactive Web & 3D",
        "coming-soon.title": "Próximamente",
        "coming-soon.text": "Estamos preparando un nuevo proyecto increíble.",

        // Contact & Form
        "contact.title": "¿Tenés <span class=\"highlight\">ganas</span> de ver qué podemos <span class=\"step-title-highight\">hacer juntos?</span> <br>Hablemos de tu proyecto...",
        "contact.name": "¿Cómo te llamas?",
        "contact.company": "¿Cuál es el nombre de tu proyecto?",
        "contact.email": "¿Cuál es tu dirección de correo electrónico?",
        "contact.message": "¿Cómo podemos ayudarte?",
        "step.placeholder_type": "Empieza a escribir...",
        "step.success_title": "¡Gracias!",
        "step.success_text": "Hemos recibido su solicitud y nos pondremos en contacto con usted en breve.",

        // Footer
        "footer.privacy": "Privacidad",
        "footer.cookies": "Cookies",
        "footer.rights": "&copy; 2026 Kore. Todos los derechos reservados.",
        "footer.email": "E-mail",

        // Privacy Modal
        "privacy.title": "Política de Privacidad",
        "privacy.intro": "En <strong>Kore Web Studio</strong> utilizamos cookies esenciales y tecnologías de terceros únicamente para garantizar el correcto funcionamiento de nuestro sitio web, mejorar tu experiencia de navegación y permitir la gestión interactiva de nuestros servicios.",
        "privacy.h3_types": "1. ¿Qué tipo de cookies utilizamos?",
        "privacy.types_p": "<strong>Cookies Estrictamente Necesarias y Funcionales:</strong> Son aquellas imprescindibles para navegar por el sitio web y utilizar sus funciones básicas. No almacenamos cookies con fines publicitarios, de rastreo ni para la venta de datos a terceros.",
        "privacy.h3_services": "2. Servicios de Terceros e Integraciones",
        "privacy.services_p": "Para ofrecerte una experiencia completa, integramos los siguientes servicios externos que pueden generar cookies técnicas o de sesión durante su uso:",
        "privacy.calendly": "<strong>Calendly:</strong> Al interactuar con nuestro sistema de agendamiento de reuniones, Calendly puede procesar cookies técnicas y de sesión necesarias para verificar la disponibilidad de calendario y gestionar la reserva de tu cita.",
        "privacy.formspree": "<strong>Formspree:</strong> Al enviar formularios a través de la web, Formspree procesa cookies estrictamente necesarias de seguridad para prevenir el spam e interactuar de forma segura.",
        "privacy.h3_management": "3. Gestión y Desactivación de Cookies",
        "privacy.management_p1": "Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador web. Sin embargo, ten en cuenta que la desactivación de cookies técnicas puede afectar el correcto funcionamiento de herramientas interactivas como el agendamiento directo.",
        "privacy.management_p2": "Si tienes alguna duda sobre nuestra Política de Cookies, puedes contactarnos a través de nuestro formulario de contacto.",

        // Cookies Modal
        "cookies.title": "Política de Cookies",
        "cookies.intro": "Esta web utiliza cookies y tecnologías similares para garantizar el correcto funcionamiento del sitio y mejorar tu experiencia de navegación.",
        "cookies.h3_definition": "1. ¿Qué es una cookie?",
        "cookies.definition_p": "Una cookie es un pequeño archivo de texto que se almacena en tu navegador cuando visitas nuestra página web.",
        "cookies.h3_types": "2. Tipos de cookies que utilizamos",
        "cookies.type_technical": "<strong>Cookies Técnicas / Necesarias:</strong> Permiten la navegación a través de la página web y el uso de las diferentes opciones o servicios que en ella existen (como la animación fluida y el envío del formulario).",
        "cookies.type_third_party": "<strong>Cookies de Terceros:</strong> Actualmente no utilizamos cookies de rastreo publicitario ni analítica invasiva de terceros."
    },
    PT: {
        // Navigation
        "nav.about": "Sobre Nós",
        "nav.projects": "Projetos",
        "nav.contact": "Contacto",
        "nav.lang_label": "Selecionar idioma",

        // Hero
        "hero.badge": "&lt;Web_Studio /&gt;",
        "hero.title": "Código <span class=\"highlight\">escrito</span> à mão, não gerado em série.",
        "hero.text": "Enquanto a web se enche de cópias automáticas e modelos repetidos, nós desenhamos e programamos do zero. Um estúdio boutique onde cada linha de código tem uma intenção real.",
        "hero.btn": "Agenda a tua primeira conversa",

        // About / Manifesto
        "about.badge": "&lt;O Manifesto & A Equipa /&gt;",
        "about.title": "Sem intermediários, sem atalhos. <span class=\"highlight\">Apenas nós</span> e o teu projeto.",
        "about.text": "Aqui não há agências gigantes nem intermediários. Somos um estúdio focado no essencial: desenhar com critério e programar cada projeto do zero, falando sempre de igual para igual.",
        "roles.card1_title": "Código à Medida",
        "roles.card1_text": "Desenvolvimento técnico à medida, limpo e estruturado linha por linha do zero.",
        "roles.card2_title": "Design & UX",
        "roles.card2_text": "Interfaces cuidadas ao pormenor para reter e converter os teus clientes.",
        "roles.card3_title": "Comunicação Real",
        "roles.card3_text": "Acompanhamento direto sem intermediários em todo o processo.",

        // Projects
        "projects.badge": "&lt;Projetos /&gt;",
        "projects.title": "Uma amostra de como <span class=\"highlight\">levamos o desenvolvimento</span> à medida à prática.",
        "projects.prev": "Anterior",
        "projects.next": "Seguinte",
        "project1.title": "Portfólio Lucas Favieri",
        "project1.description": "Web Interativa & 3D",
        "coming-soon.title": "Em breve",
        "coming-soon.text": "Estamos a preparar um novo projeto incrível.",

        // Contact & Form
        "contact.title": "Tens <span class=\"highlight\">vontade</span> de ver o que podemos <span class=\"step-title-highight\">fazer juntos?</span> <br>Vamos falar do teu projeto...",
        "contact.name": "Como te chamas?",
        "contact.company": "Qual é o nome do teu projeto?",
        "contact.email": "Qual é o teu endereço de e-mail?",
        "contact.message": "Como podemos ajudar-te?",
        "step.placeholder_type": "Começa a escrever...",
        "step.success_title": "Obrigado!",
        "step.success_text": "Recebemos o teu pedido e entraremos em contacto em breve.",

        // Footer
        "footer.privacy": "Privacidade",
        "footer.cookies": "Cookies",
        "footer.rights": "&copy; 2026 Kore. Todos os direitos reservados.",
        "footer.email": "E-mail",

        // Privacy Modal
        "privacy.title": "Política de Privacidade",
        "privacy.intro": "Na <strong>Kore Web Studio</strong> utilizamos cookies essenciais e tecnologias de terceiros apenas para garantir o correto funcionamento do nosso site, melhorar a tua experiência de navegação e permitir a gestão interativa dos nossos serviços.",
        "privacy.h3_types": "1. Que tipo de cookies utilizamos?",
        "privacy.types_p": "<strong>Cookies Estritamente Necessários e Funcionais:</strong> São aqueles indispensáveis para navegar pelo site e utilizar as suas funções básicas. Não armazenamos cookies para fins publicitários, rastreio ou venda de dados a terceiros.",
        "privacy.h3_services": "2. Serviços de Terceiros e Integrações",
        "privacy.services_p": "Para te oferecer uma experiência completa, integramos os seguintes serviços externos que podem gerar cookies técnicos ou de sessão durante a sua utilização:",
        "privacy.calendly": "<strong>Calendly:</strong> Ao interagir com o nosso sistema de agendamento de reuniões, o Calendly pode processar cookies técnicos e de sessão necessários para verificar a disponibilidade de calendário e gerir a marcação da tua conversa.",
        "privacy.formspree": "<strong>Formspree:</strong> Ao enviar formulários através do site, o Formspree processa cookies estritamente necessários de segurança para prevenir spam e interagir de forma segura.",
        "privacy.h3_management": "3. Gestão e Desativação de Cookies",
        "privacy.management_p1": "Podes permitir, bloquear ou eliminar os cookies instalados no teu dispositivo através das definições do teu navegador web. No entanto, tem em conta que a desativação de cookies técnicos pode afetar o correto funcionamento de ferramentas interativas como o agendamento direto.",
        "privacy.management_p2": "Se tiveres alguma dúvida sobre a nossa Política de Cookies, podes contactar-nos através do nosso formulário de contacto.",

        // Cookies Modal
        "cookies.title": "Política de Cookies",
        "cookies.intro": "Este site utiliza cookies e tecnologias semelhantes para garantir o correto funcionamento do site e melhorar a tua experiência de navegação.",
        "cookies.h3_definition": "1. O que é um cookie?",
        "cookies.definition_p": "Um cookie é um pequeno ficheiro de texto armazenado no teu navegador quando visitas a nossa página web.",
        "cookies.h3_types": "2. Tipos de cookies que utilizamos",
        "cookies.type_technical": "<strong>Cookies Técnicos / Necessários:</strong> Permitem a navegação através da página web e a utilização das diferentes opções ou serviços nela existentes (como animação fluida e envio do formulário).",
        "cookies.type_third_party": "<strong>Cookies de Terceiros:</strong> Atualmente não utilizamos cookies de rastreio publicitário nem analítica invasiva de terceiros."
    },
    EN: {
        // Navigation
        "nav.about": "About Us",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "nav.lang_label": "Select language",

        // Hero
        "hero.badge": "&lt;Web_Studio /&gt;",
        "hero.title": "Code <span class=\"highlight\">crafted</span> by hand, not mass-produced.",
        "hero.text": "While the web gets filled with automated copies and repeated templates, we design and code from scratch. A boutique studio where every line of code has a real purpose.",
        "hero.btn": "Schedule your first call",

        // About / Manifesto
        "about.badge": "&lt;The Manifesto & Team /&gt;",
        "about.title": "No middlemen, no shortcuts. <span class=\"highlight\">Just us</span> and your project.",
        "about.text": "No giant agencies or intermediaries here. We are a studio focused on the essentials: thoughtful design and coding every project from scratch, always communicating transparently.",
        "roles.card1_title": "Custom Code",
        "roles.card1_text": "Custom technical development, clean and structured line by line from scratch.",
        "roles.card2_title": "Design & UX",
        "roles.card2_text": "Crafted interfaces designed to retain and convert your visitors.",
        "roles.card3_title": "Direct Communication",
        "roles.card3_text": "Direct collaboration without project managers or middle management.",

        // Projects
        "projects.badge": "&lt;Projects /&gt;",
        "projects.title": "A showcase of how <span class=\"highlight\">we put custom code</span> into practice.",
        "projects.prev": "Previous",
        "projects.next": "Next",
        "project1.title": "Lucas Favieri Portfolio",
        "project1.description": "Interactive Web & 3D",
        "coming-soon.title": "Coming Soon",
        "coming-soon.text": "We are preparing an incredible new project.",

        // Contact & Form
        "contact.title": "Looking <span class=\"highlight\">forward</span> to seeing what we can <span class=\"step-title-highight\">build together?</span> <br>Let's talk about your project...",
        "contact.name": "What is your name?",
        "contact.company": "What is the name of your project?",
        "contact.email": "What is your email address?",
        "contact.message": "How can we help you?",
        "step.placeholder_type": "Start typing...",
        "step.success_title": "Thank you!",
        "step.success_text": "We have received your request and will get back to you shortly.",

        // Footer
        "footer.privacy": "Privacy",
        "footer.cookies": "Cookies",
        "footer.rights": "&copy; 2026 Kore. All rights reserved.",
        "footer.email": "E-mail",

        // Privacy Modal
        "privacy.title": "Privacy Policy",
        "privacy.intro": "At <strong>Kore Web Studio</strong> we use essential cookies and third-party technologies solely to ensure the proper functioning of our website, enhance your browsing experience, and enable interactive management of our services.",
        "privacy.h3_types": "1. What type of cookies do we use?",
        "privacy.types_p": "<strong>Strictly Necessary & Functional Cookies:</strong> These are essential for browsing the website and utilizing its basic features. We do not store cookies for advertising, tracking, or selling data to third parties.",
        "privacy.h3_services": "2. Third-Party Services & Integrations",
        "privacy.services_p": "To provide a complete experience, we integrate the following external services that may generate technical or session cookies during use:",
        "privacy.calendly": "<strong>Calendly:</strong> When interacting with our meeting scheduling system, Calendly may process necessary technical and session cookies to check calendar availability and manage your appointment booking.",
        "privacy.formspree": "<strong>Formspree:</strong> When submitting forms through the website, Formspree processes strictly necessary security cookies to prevent spam and ensure safe interaction.",
        "privacy.h3_management": "3. Cookie Management & Deactivation",
        "privacy.management_p1": "You can allow, block, or delete cookies installed on your device through your web browser settings. However, please note that disabling technical cookies may affect the proper functionality of interactive tools like direct scheduling.",
        "privacy.management_p2": "If you have any questions about our Cookie Policy, feel free to reach out via our contact form.",

        // Cookies Modal
        "cookies.title": "Cookie Policy",
        "cookies.intro": "This website uses cookies and similar technologies to ensure proper site performance and improve your browsing experience.",
        "cookies.h3_definition": "1. What is a cookie?",
        "cookies.definition_p": "A cookie is a small text file stored in your browser when you visit our website.",
        "cookies.h3_types": "2. Types of cookies we use",
        "cookies.type_technical": "<strong>Technical / Necessary Cookies:</strong> These enable navigation through the website and the use of different options or services available (such as smooth animations and form submission).",
        "cookies.type_third_party": "<strong>Third-Party Cookies:</strong> We currently do not use third-party advertising tracking or invasive analytics cookies."
    }
};

// Função atualizada para aplicar as traduções nos textos, aria-labels e placeholders
function applyLanguage(lang) {
    if (!translations[lang]) return;

    // 1. Atualiza elementos de texto e HTML
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // 2. Atualiza atributos aria-label
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (translations[lang][key]) {
            el.setAttribute('aria-label', translations[lang][key]);
        }
    });

    // 3. Atualiza os placeholders dos inputs
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // 4. Atualiza o texto do botão principal do seletor de idioma
    const currentLangText = document.getElementById('currentLangText');
    if (currentLangText) {
        currentLangText.textContent = lang;
    }

    // 5. Mostra apenas os idiomas QUE NÃO SÃO o atual no dropdown
    document.querySelectorAll('.lang-option').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.style.display = 'none'; // Esconde a língua atual das opções
        } else {
            btn.style.display = 'block'; // Mostra as outras
        }
    });

    // 6. Reativa o observador das palavras destacadas (.highlight)
    const highlights = document.querySelectorAll('.highlight');
    if (highlights.length > 0) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

        highlights.forEach(highlight => observer.observe(highlight));
    }

    localStorage.setItem('kore_lang', lang);
    document.documentElement.lang = lang.toLowerCase();
}


document.addEventListener('DOMContentLoaded', () => {

    /* 1. GSAP ANIMATION ON SCROLL */
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".hero-content", {
            y: -40,
            opacity: 0.8,
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }

    /* 2. REVEAL OBSERVER */
    const observerOptions = {
        root: null,
        threshold: 0.25
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach(el => revealObserver.observe(el));

    /* 3. 3D VIDEO CONTROL FOLLOWING MOUSE MOVEMENT */
    const video = document.querySelector('#characterVideo');
    if (video) {
        let targetTime = 0;
        let prevX = null;
        let isSeeking = false;
        const sensitivity = 0.9;

        video.addEventListener('loadedmetadata', () => {
            video.currentTime = 0;
        });

        video.addEventListener('seeked', () => {
            if (Math.abs(video.currentTime - targetTime) > 0.01) {
                video.currentTime = targetTime;
            } else {
                isSeeking = false;
            }
        });

        window.addEventListener('mousemove', (e) => {
            if (!video.duration || Number.isNaN(video.duration)) {
                prevX = e.clientX;
                return;
            }

            if (prevX === null) {
                prevX = e.clientX;
                return;
            }

            const delta = e.clientX - prevX;
            prevX = e.clientX;

            if (delta === 0) return;

            const timeOffset = (delta / window.innerWidth) * sensitivity * video.duration;
            let nextTarget = targetTime + timeOffset;

            nextTarget = Math.max(0, Math.min(video.duration, nextTarget));
            targetTime = nextTarget;

            if (!isSeeking) {
                isSeeking = true;
                video.currentTime = nextTarget;
            }
        }, { passive: true });

        window.addEventListener('mouseleave', () => {
            prevX = null;
        });
    }

    /* 4. HIGHLIGHT */
    const highlights = document.querySelectorAll('.highlight');

    if (highlights.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        highlights.forEach(highlight => observer.observe(highlight));
    }

    /* 5. MOUSE SPOTLIGHT ON GLASS CARDS */
    document.querySelectorAll('.glass-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    /* 6. PROJECTS CAROUSEL (3 : 3) */
    const track = document.getElementById('projectsTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const wrapper = document.querySelector('.carousel-wrapper');

    if (track && prevBtn && nextBtn && wrapper) {
        let currentIndex = 0;

        const isMobile = () => window.innerWidth <= 768;

        const updateCarousel = () => {
            const card = track.querySelector('.project-card');
            if (!card) return;

            if (isMobile()) {
                const cardWidth = card.getBoundingClientRect().width + 16;
                wrapper.scrollTo({
                    left: currentIndex * cardWidth,
                    behavior: 'smooth'
                });
            } else {
                const cardsPerView = 3;
                const cardWidth = card.getBoundingClientRect().width + 24;
                track.style.transform = `translateX(-${currentIndex * cardWidth * cardsPerView}px)`;
            }
        };

        nextBtn.addEventListener('click', () => {
            const totalCards = track.children.length;
            const maxIndex = isMobile() ? totalCards - 1 : Math.max(0, Math.ceil(totalCards / 3) - 1);

            if (currentIndex < maxIndex) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            const totalCards = track.children.length;
            const maxIndex = isMobile() ? totalCards - 1 : Math.max(0, Math.ceil(totalCards / 3) - 1);

            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = maxIndex;
            }
            updateCarousel();
        });

        wrapper.addEventListener('scroll', () => {
            if (isMobile()) {
                const card = track.querySelector('.project-card');
                if (card) {
                    const cardWidth = card.getBoundingClientRect().width + 16;
                    currentIndex = Math.round(wrapper.scrollLeft / cardWidth);
                }
            }
        });

        window.addEventListener('resize', updateCarousel);
    }

    /* 7. STEP CONTACT FORM WITH ANIMATIONS & SUBMISSION */
    const steps = document.querySelectorAll('.step-item');
    let currentStep = 0;

    function showStep(index) {
        steps.forEach((step, idx) => {
            step.classList.remove('exit');
            if (idx === index) {
                step.classList.add('active');
                const input = step.querySelector('.step-input');
                if (input && index > 0) {
                    setTimeout(() => input.focus(), 300);
                }
            } else {
                step.classList.remove('active');
            }
        });
    }

    function nextStep() {
        const activeStep = steps[currentStep];
        const currentInput = activeStep.querySelector('.step-input');
        
        if (currentInput && !currentInput.checkValidity()) {
            currentInput.reportValidity();
            return;
        }

        activeStep.classList.add('exit');
        activeStep.classList.remove('active');

        setTimeout(() => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            } else {
                submitForm();
            }
        }, 300);
    }

    async function submitForm() {
        const formData = {
            name: document.getElementById('userName')?.value || '',
            company: document.getElementById('userCompany')?.value || '',
            email: document.getElementById('userEmail')?.value || '',
            project: document.getElementById('userProject')?.value || ''
        };

        try {
            const response = await fetch('https://formspree.io/f/xrpbeepy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                steps.forEach(step => {
                    step.classList.remove('active');
                    step.classList.remove('exit');
                });
                
                const stepHeader = document.querySelector('.step-header');
                if (stepHeader) stepHeader.style.display = 'none';

                const successMessage = document.getElementById('stepSuccess');
                if (successMessage) {
                    successMessage.classList.add('active');
                }
            } else {
                alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro de envio:', error);
            alert('Erro de ligação ao servidor.');
        }
    }

    steps.forEach((step) => {
        const btnNext = step.querySelector('.btn-step-next');
        const input = step.querySelector('.step-input');

        if (btnNext) {
            btnNext.addEventListener('click', nextStep);
        }

        if (input) {
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    nextStep();
                }
            });
        }
    });

    if (steps.length > 0) {
        showStep(0);
    }

    /* 8. LEGAL MODAIS (PRIVACY & COOKIES) */
    const privacyModal = document.getElementById('privacyModal');
    const cookiesModal = document.getElementById('cookiesModal');

    const openPrivacy = document.getElementById('openPrivacy');
    const openCookies = document.getElementById('openCookies');

    const closePrivacy = document.getElementById('closePrivacy');
    const closeCookies = document.getElementById('closeCookies');

    if (openPrivacy && privacyModal) {
        openPrivacy.addEventListener('click', () => privacyModal.classList.add('active'));
    }

    if (openCookies && cookiesModal) {
        openCookies.addEventListener('click', () => cookiesModal.classList.add('active'));
    }

    if (closePrivacy && privacyModal) {
        closePrivacy.addEventListener('click', () => privacyModal.classList.remove('active'));
    }

    if (closeCookies && cookiesModal) {
        closeCookies.addEventListener('click', () => cookiesModal.classList.remove('active'));
    }

    window.addEventListener('click', (e) => {
        if (e.target === privacyModal) privacyModal.classList.remove('active');
        if (e.target === cookiesModal) cookiesModal.classList.remove('active');
    });

    /* 10. CARROUSEL MOBILE */
    if (window.innerWidth <= 768) {
        const track = document.querySelector('.projects-track');
        const cards = document.querySelectorAll('.project-card:not(.card-coming-soon)');
        const carouselWrapper = document.querySelector('.carousel-wrapper');

        if (track && cards.length > 0) {
            const observerOptions = {
                root: carouselWrapper || null,
                threshold: 0.5
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        cards.forEach(c => c.classList.remove('is-active'));
                        entry.target.classList.add('is-active');
                    }
                });
            }, observerOptions);

            cards.forEach(card => observer.observe(card));

            let swipeTimeout;

            track.addEventListener('touchstart', () => {
                track.classList.add('is-swiping');
                clearTimeout(swipeTimeout);
            }, { passive: true });

            track.addEventListener('touchend', () => {
                swipeTimeout = setTimeout(() => {
                    track.classList.remove('is-swiping');
                }, 150);
            });
        }
    }

    /* 11. LANGUAGES & MULTILANGUAGE SELECTOR */
    const langSelector = document.getElementById("langSelector");
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            // tua lógica aqui
        });
    }
    const currentLangText = document.getElementById("currentLangText");
    const langOptionsContainer = document.querySelector(".lang-options");

    // Carrega idioma salvo ou usa ES
    const initialLang = localStorage.getItem('kore_lang') || 'ES';
    if (currentLangText) currentLangText.textContent = initialLang;
    applyLanguage(initialLang);

    if (langSelector && langBtn) {
        langBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            langSelector.classList.toggle("open");
        });

        document.addEventListener("click", (e) => {
            if (!langSelector.contains(e.target)) {
                langSelector.classList.remove("open");
            }
        });

        if (langOptionsContainer) {
            langOptionsContainer.addEventListener("click", (e) => {
                const option = e.target.closest(".lang-option");
                if (!option) return;

                const oldLang = currentLangText.textContent;
                const newLang = option.getAttribute("data-lang");

                currentLangText.textContent = newLang;

                option.setAttribute("data-lang", oldLang);
                option.textContent = oldLang;

                langSelector.classList.remove("open");

                // Aplica as traduções
                applyLanguage(newLang);
            });
        }
    }

});