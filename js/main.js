document.addEventListener("DOMContentLoaded", () => {
    const data = {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screenResolution: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        cookiesEnabled: navigator.cookieEnabled ? 1 : 0,
        currentUrl: window.location.href,
        referrer: document.referrer || null,
        themeMode: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
        siteLanguage: document.documentElement.lang || 'pt',
        browserDatetime: new Date().toISOString()
    };

    fetch('/api/save-visitor.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.id) {
            sessionStorage.setItem('visitantId', result.id);
        }
    })
    .catch(() => { });

    // Listener para cliques no WhatsApp
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', () => {
            const visitantId = sessionStorage.getItem('visitantId');
            if (visitantId) {
                fetch('/api/track-whatsapp.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ visitantId })
                }).catch(() => { });
            }
        });
    });
});

// Ano automático
document.getElementById("year").textContent = new Date().getFullYear();

// ===================================
// DATA & TRANSLATIONS
// ===================================

// Projects Data
const projectsData = {
    pt: [
        {
            name: "Control OnLine",
            description: "Sistema de gestão interna para empresa OnLine Contabilidade, que além de ter os recursos comuns a sistemas de gestão empresarial, conta com automatização de processos, ferramentas para integração de sistemas e gerenciamento de outros apps.",
            images: [
                { url: "https://buildbyjef.site/img/Tela de login.jpg", alt: "Tela de login do Sistema" },
                { url: "https://buildbyjef.site/img/Tela inicial-Ctrl.jpg", alt: "Tela inicial" },
                { url: "https://buildbyjef.site/img/utilitarios-Ctrl.jpg", alt: "Alguns utilitários dentre vários que o sistema vinha recebendo recorrentemente" },
                { url: "https://buildbyjef.site/img/submenus-Ctrl.jpg", alt: "A visão de submenus com ferramentas disponíveis para controle de pessoal" },
                { url: "https://buildbyjef.site/img/funcs-Ctrl.jpg", alt: "Exemplo de uma funcionalidade, neste caso, o controle de serviços extras prestados à clientes" }
            ],
            tech: ["JavaScript", "CSS", "Database", "SQL", "PHP"]
        },
        {
            name: "IdealCred",
            description: "CRM para controle e geração de propostas de empréstimos, com parte administrativa e parte com acesso ao público geral, consumindo várias APIs, desde governamentais a empresas de análise de crédito, também fornecia APIs para consumo de outros sistemas da empresa.",
            images: [
                { url: "https://buildbyjef.site/img/idealcred.jpg", alt: "Tela inicial" }
            ],
            tech: ["PHP", "Laravel", "Filament", "GitLab", "Docker", "APIs"]
        },
        {
            name: "Conexão OnLine",
            description: "App Android/iOS/Web feito com React Native na forma de um cartão de benefícios para os funcionários da empresa, onde mostrava o cartão virtual do usuário e também uma lista das empresas parceiras cadastradas e os beneficios oferecidos por cada uma. O controle de usuário e cadastro de empresas parceiras era feito no sistema Control OnLine, que envia a informação para o servidor e a mesma era resgatada pelo App via API.",
            images: [
                { url: "https://buildbyjef.site/img/CO-INICIAL.jpg", alt: "Tela principal" },
                { url: "https://buildbyjef.site/img/CO-LOGIN.jpg", alt: "Tela de Login" }
            ],
            tech: ["React Native", "JavaScript", "Node.js", "UX Design", "HTML5"]
        },
        {
            name: "Site para Empresa Forja Equipamentos",
            description: "Site completo, com parte institucional, local de contato e informações, além de apresentação de produtos com botão de ação para vendas.",
            images: [
                { url: "https://buildbyjef.site/img/FORJA.jpg", alt: "Tela principal" }
            ],
            tech: ["WordPress", "Elementor", "UX Design", "PHP", "CSS", "JavaScript"]
        },
        {
            name: "LandingPage para captura de leads",
            description: "Landing Page com questionário para classificação de leads",
            images: [
                { url: "https://buildbyjef.site/img/LP.jpg", alt: "Primeira dobra" }
            ],
            tech: ["JavaScript", "CSS", "PHP", "SQL", "HTML5"]
        },
        {
            name: "Site para ZNS Advogados",
            description: "Site completo, com parte institucional, local de contato e informações e ferramenta de validação de números telefonicos oficiais da empresa.",
            images: [
                { url: "https://buildbyjef.site/img/ZNS.jpg", alt: "Primeira dobra" }
            ],
            tech: ["HTML5", "HTML", "CSS", "JavaScript", "PHP", "SQL"]
        }
    ],
    en: [
        {
            name: "Control OnLine",
            description: "Internal management system for OnLine Contabilidade company, which in addition to having common resources of business management systems, has process automation, tools for system integration and management of other apps.",
            images: [
                { url: "https://buildbyjef.site/img/Tela de login.jpg", alt: "System login screen" },
                { url: "https://buildbyjef.site/img/Tela inicial-Ctrl.jpg", alt: "Home screen" },
                { url: "https://buildbyjef.site/img/utilitarios-Ctrl.jpg", alt: "Some utilities among many that the system was receiving recurrently" },
                { url: "https://buildbyjef.site/img/submenus-Ctrl.jpg", alt: "View of submenus with available tools for personnel control" },
                { url: "https://buildbyjef.site/img/funcs-Ctrl.jpg", alt: "Example of a functionality, in this case, the control of extra services provided to clients" }
            ],
            tech: ["JavaScript", "CSS", "Database", "SQL", "PHP"]
        },
        {
            name: "IdealCred",
            description: "CRM for control and generation of loan proposals, with administrative part and part with access to the general public, consuming various APIs, from government to credit analysis companies, also provided APIs for consumption by other company systems.",
            images: [
                { url: "https://buildbyjef.site/img/idealcred.jpg", alt: "Home screen" }
            ],
            tech: ["PHP", "Laravel", "Filament", "GitLab", "Docker", "APIs"]
        },
        {
            name: "OnLine Connection",
            description: "Android/iOS/Web App made with React Native in the form of a benefits card for company employees, where it showed the user's virtual card and also a list of registered partner companies and the benefits offered by each one. User control and registration of partner companies was done in the Control OnLine system, which sends the information to the server and is retrieved by the App via API.",
            images: [
                { url: "https://buildbyjef.site/img/CO-INICIAL.jpg", alt: "Main screen" },
                { url: "https://buildbyjef.site/img/CO-LOGIN.jpg", alt: "Login screen" }
            ],
            tech: ["React Native", "JavaScript", "Node.js", "UX Design", "HTML5"]
        },
        {
            name: "Website for Forja Equipamentos Company",
            description: "Complete website, with institutional part, contact and information location, in addition to product presentation with action button for sales.",
            images: [
                { url: "https://buildbyjef.site/img/FORJA.jpg", alt: "Main screen" }
            ],
            tech: ["WordPress", "Elementor", "UX Design", "PHP", "CSS", "JavaScript"]
        },
        {
            name: "Landing Page for lead capture",
            description: "Landing Page with questionnaire for lead classification",
            images: [
                { url: "https://buildbyjef.site/img/LP.jpg", alt: "First fold" }
            ],
            tech: ["JavaScript", "CSS", "PHP", "SQL", "HTML5"]
        },
        {
            name: "Website for ZNS Advogados",
            description: "Complete website, with institutional part, contact and information location and validation tool for the company's official phone numbers.",
            images: [
                { url: "https://buildbyjef.site/img/ZNS.jpg", alt: "First fold" }
            ],
            tech: ["HTML5", "HTML", "CSS", "JavaScript", "PHP", "SQL"]
        }
    ]
};

// Translations
const translations = {
    pt: {
        nav_home: "Início",
        nav_about: "Sobre",
        nav_skills: "Habilidades",
        nav_experience: "Experiência",
        nav_projects: "Projetos",
        nav_contact: "Contato",
        hero_greeting: "Olá, eu sou",
        hero_title: "Desenvolvedor Full Stack | Automação & Integrações",
        hero_description: "Desenvolvedor com experiência em automação de processos, integrações entre sistemas e criação de soluções web completas. Transformo ideias em código funcional e eficiente.",
        hero_btn_projects: "Ver Projetos",
        hero_btn_contact: "Entre em Contato",
        about_title: "Sobre Mim",
        about_subtitle: "Conheça um pouco mais sobre minha trajetória profissional",
        about_who: "Quem sou eu?",
        about_text: "Ao longo da minha carreira, atuei em diversas frentes da Informática: suporte ao cliente, infraestrutura e, principalmente, desenvolvimento de software. Tenho paixão por comunicar de forma clara, sintetizar problemas complexos e propor melhorias contínuas nas soluções adotadas.",
        about_text2: "Minha experiência abrange desde o desenvolvimento full stack de sistemas de gestão empresarial até a criação de aplicativos mobile e automação de processos. Trabalho com código limpo, boas práticas e foco em entregar valor real para os usuários.",
        stat_years: "Anos de Experiência",
        stat_tech: "Tecnologias",
        stat_projects: "Projetos Desenvolvidos",
        stat_dedication: "Dedicação",
        skills_title: "Habilidades & Tecnologias",
        skills_subtitle: "Tecnologias e ferramentas que domino e utilizo no desenvolvimento",
        skills_frontend: "Frontend",
        skills_backend: "Backend",
        skills_database: "Database & APIs",
        skills_tools: "DevOps & Tools",
        skills_other: "Outros",
        skills_infrastructure: "Infraestrutura",
        exp_title: "Experiência Profissional",
        exp_subtitle: "Minha trajetória profissional e principais conquistas",
        exp1_role: "Desenvolvedor de Software",
        exp1_item1: "Desenvolvimento full stack com foco em software de gestão empresarial e automação",
        exp1_item2: "Criação, desde o início, do software de gestão interna e automação de processos da empresa (Control OnLine)",
        exp1_item3: "Integrações de sistemas e desenvolvimento de utilitários e apps web, desktop e mobile (Conexão OnLine)",
        exp1_item4: "Criação de sites e Landing Pages, além de configuração e gerenciamento de servidores",
        exp2_role: "Supervisor de TI",
        exp2_item1: "Gerenciamento de servidores, sites, antivírus e infraestrutura de hardware",
        exp2_item2: "Desenvolvimento de aplicações para processos seletivos, portal de transparência, banco de currículos e pesquisas",
        exp2_item3: "Coordenação de manutenção e contratações locais para alterações necessárias",
        projects_title: "Projetos em Destaque",
        projects_subtitle: "Alguns dos principais projetos que desenvolvi",
        contact_title: "Entre em Contato",
        contact_subtitle: "Vamos trabalhar juntos? Envie-me uma mensagem!",
        form_name: "Nome",
        form_email: "Email",
        form_subject: "Assunto",
        form_select: "Selecione...",
        form_opt1: "Desenvolvimento de Software",
        form_opt2: "Consultoria",
        form_opt3: "Automação de Processos",
        form_opt4: "Trabalho Freelance",
        form_opt5: "Outro",
        form_message: "Mensagem",
        form_send: "Enviar Mensagem",
        form_success: "Mensagem enviada com sucesso! Retornarei em breve.",
        form_error: "Erro ao enviar mensagem. Por favor, tente novamente.",
        footer_text: " Jeferson Santos. Todos os direitos reservados.",
        easter_found: "🎉 Easter Egg descoberto!",
        easter_dev: "🚀 Modo Desenvolvedor ativado!",
        easter_konami: "🎮 Código Konami! Você é old school!",
        easter_click: "🖱️ Você encontrou o clique secreto!"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Hello, I'm",
        hero_title: "Full Stack Developer | Automation & Integrations",
        hero_description: "Developer with experience in process automation, system integrations and creation of complete web solutions. I transform ideas into functional and efficient code.",
        hero_btn_projects: "View Projects",
        hero_btn_contact: "Get in Touch",
        about_title: "About Me",
        about_subtitle: "Learn more about my professional journey",
        about_who: "Who am I?",
        about_text: "Throughout my career, I have worked on several fronts of Information Technology: customer support, infrastructure and, mainly, software development. I have a passion for communicating clearly, synthesizing complex problems and proposing continuous improvements in adopted solutions.",
        about_text2: "My experience ranges from full stack development of business management systems to mobile application creation and process automation. I work with clean code, best practices and focus on delivering real value to users.",
        stat_years: "Years of Experience",
        stat_tech: "Technologies",
        stat_projects: "Developed Projects",
        stat_dedication: "Dedication",
        skills_title: "Skills & Technologies",
        skills_subtitle: "Technologies and tools I master and use in development",
        skills_frontend: "Frontend",
        skills_backend: "Backend",
        skills_database: "Database & APIs",
        skills_tools: "DevOps & Tools",
        skills_other: "Others",
        skills_infrastructure: "Infrastructure",
        exp_title: "Professional Experience",
        exp_subtitle: "My professional journey and main achievements",
        exp1_role: "Software Developer",
        exp1_item1: "Full stack development with focus on business management software and automation",
        exp1_item2: "Creation, from the beginning, of the company's internal management and process automation software (Control OnLine)",
        exp1_item3: "System integrations and development of utilities and web, desktop and mobile apps (OnLine Connection)",
        exp1_item4: "Creation of websites and Landing Pages, in addition to server configuration and management",
        exp2_role: "IT Supervisor",
        exp2_item1: "Management of servers, websites, antivirus and hardware infrastructure",
        exp2_item2: "Development of applications for selection processes, transparency portal, resume database and surveys",
        exp2_item3: "Coordination of local maintenance and hiring for necessary changes",
        projects_title: "Featured Projects",
        projects_subtitle: "Some of the main projects I developed",
        contact_title: "Get in Touch",
        contact_subtitle: "Let's work together? Send me a message!",
        form_name: "Name",
        form_email: "Email",
        form_subject: "Subject",
        form_select: "Select...",
        form_opt1: "Software Development",
        form_opt2: "Consulting",
        form_opt3: "Process Automation",
        form_opt4: "Freelance Work",
        form_opt5: "Other",
        form_message: "Message",
        form_send: "Send Message",
        form_success: "Message sent successfully! I'll get back to you soon.",
        form_error: "Error sending message. Please try again.",
        footer_text: " Jeferson Santos. All rights reserved.",
        easter_found: "🎉 Easter Egg found!",
        easter_dev: "🚀 Developer Mode activated!",
        easter_konami: "🎮 Konami Code! You're old school!",
        easter_click: "🖱️ You found the secret click!"
    }
};

// ===================================
// APP STATE
// ===================================
let currentLang = 'pt';
let currentTheme = 'dark';

// Easter Eggs state
const easterEggs = {
    konamiCode: [],
    konamiSequence: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
    devModeClicks: 0,
    found: {
        konami: false,
        devMode: false,
        secretClick: false
    }
};

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initMobileMenu();
    initScrollAnimations();
    initProjects();
    initContactForm();
    initModal();
    initHeaderScroll();
    initParallax();
    initSmoothScroll();
    initCounterAnimation();
    initEasterEggs();
});

// ===================================
// THEME MANAGEMENT
// ===================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    currentTheme = savedTheme;
    
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        updateThemeIcon('light');
    }
    
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    // Add transition effect
    document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ===================================
// LANGUAGE MANAGEMENT
// ===================================
function initLanguage() {
    const savedLang = localStorage.getItem('language') || 'pt';
    currentLang = savedLang;
    updateLanguage(savedLang);
    
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
}

function toggleLanguage() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    localStorage.setItem('language', currentLang);
    updateLanguage(currentLang);
    renderProjects();
}

function updateLanguage(lang) {
    document.getElementById('currentLang').textContent = lang.toUpperCase();
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// ===================================
// MOBILE MENU
// ===================================
function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const menu = document.getElementById('navMenu');
    
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        const icon = toggle.querySelector('i');
        icon.className = menu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.querySelector('i').className = 'fas fa-bars';
        });
    });
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger counter animation for stats
                if (entry.target.id === 'about') {
                    animateCounters();
                }
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// ===================================
// HEADER SCROLL EFFECT
// ===================================
function initHeaderScroll() {
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ===================================
// PARALLAX EFFECT
// ===================================
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-section, .parallax-element');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ===================================
// SMOOTH SCROLL
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===================================
// COUNTER ANIMATION
// ===================================
function initCounterAnimation() {
    // Will be triggered when about section becomes visible
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-card[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.count);
        const numberElement = counter.querySelector('.number');
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                numberElement.textContent = Math.floor(current) + (target === 100 ? '' : '+');
                requestAnimationFrame(updateCounter);
            } else {
                numberElement.textContent = target + (target === 100 ? '%' : '+');
            }
        };
        
        updateCounter();
    });
}

// ===================================
// PROJECTS
// ===================================
function initProjects() {
    renderProjects();
}

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    const projects = projectsData[currentLang];
    
    grid.innerHTML = projects.map((project, index) => `
        <div class="project-card" onclick="openModal(${index})">
            <img src="${project.images[0].url}" alt="${project.images[0].alt}" class="project-image" loading="lazy">
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description.substring(0, 120)}...</p>
                <div class="project-tech">
                    ${project.tech.slice(0, 4).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// ===================================
// MODAL
// ===================================
function initModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.getElementById('modalClose');
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function openModal(index) {
    const modal = document.getElementById('projectModal');
    const project = projectsData[currentLang][index];
    
    document.getElementById('modalTitle').textContent = project.name;
    document.getElementById('modalDescription').textContent = project.description;
    
    const imagesHtml = project.images.map(img => 
        `<img src="${img.url}" alt="${img.alt}" loading="lazy">`
    ).join('');
    document.getElementById('modalImages').innerHTML = imagesHtml;
    
    const techHtml = project.tech.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    document.getElementById('modalTech').innerHTML = techHtml;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===================================
// CONTACT FORM
// ===================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        try {
            const response = await fetch('api/send-mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (result.success) {
                showAlert('success', translations[currentLang].form_success);
                form.reset();
            } else {
                showAlert('error', translations[currentLang].form_error);
            }
        } catch (error) {
            showAlert('error', translations[currentLang].form_error);
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

function showAlert(type, message) {
    const alert = document.getElementById('formAlert');
    alert.className = `form-alert ${type} show`;
    alert.textContent = message;
    
    setTimeout(() => {
        alert.classList.remove('show');
    }, 5000);
}

// ===================================
// EASTER EGGS
// ===================================
function initEasterEggs() {
    // Konami Code
    document.addEventListener('keydown', handleKonamiCode);
    
    // Triple click on logo (Dev Mode)
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', handleDevModeClick);
    
    // Secret click on profile image
    const profileImg = document.getElementById('profileImage');
    if (profileImg) {
        let clickCount = 0;
        profileImg.addEventListener('click', (e) => {
            e.stopPropagation();
            clickCount++;
            if (clickCount === 5 && !easterEggs.found.secretClick) {
                triggerEasterEgg('secretClick', translations[currentLang].easter_click);
                launchConfetti();
            }
            setTimeout(() => clickCount = 0, 2000);
        });
    }
    
    // Typing "dev" anywhere triggers easter egg
    let typedKeys = '';
    document.addEventListener('keypress', (e) => {
        typedKeys += e.key;
        if (typedKeys.includes('dev') && !easterEggs.found.devMode) {
            triggerEasterEgg('devMode', translations[currentLang].easter_dev);
            console.log('%c🚀 DEV MODE ACTIVATED!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
            console.log('%cPortfolio by Jeferson Santos', 'font-size: 14px; color: #8b5cf6;');
            console.log('%cTech Stack: HTML5, CSS3, JavaScript (Vanilla)', 'font-size: 12px; color: #ec4899;');
        }
        if (typedKeys.length > 10) typedKeys = typedKeys.slice(-10);
    });
}

function handleKonamiCode(e) {
    easterEggs.konamiCode.push(e.key);
    if (easterEggs.konamiCode.length > 10) {
        easterEggs.konamiCode.shift();
    }
    
    if (JSON.stringify(easterEggs.konamiCode) === JSON.stringify(easterEggs.konamiSequence)) {
        if (!easterEggs.found.konami) {
            triggerEasterEgg('konami', translations[currentLang].easter_konami);
            launchConfetti();
            makeItRain();
        }
    }
}

function handleDevModeClick() {
    easterEggs.devModeClicks++;
    if (easterEggs.devModeClicks === 3 && !easterEggs.found.devMode) {
        triggerEasterEgg('devMode', translations[currentLang].easter_dev);
    }
    setTimeout(() => easterEggs.devModeClicks = 0, 1000);
}

function triggerEasterEgg(type, message) {
    easterEggs.found[type] = true;
    showEasterEggNotification(message);
}

function showEasterEggNotification(message) {
    const notification = document.getElementById('easterEggNotification');
    const text = document.getElementById('easterEggText');
    text.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

// ===================================
// CONFETTI EFFECT
// ===================================
function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 150;
    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * particleCount,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 10,
            tiltAngleIncremental: Math.random() * 0.07 + 0.05,
            tiltAngle: 0
        });
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, i) => {
            ctx.beginPath();
            ctx.lineWidth = p.r / 2;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
            ctx.stroke();
        });
        
        update();
    }
    
    function update() {
        particles.forEach((p, i) => {
            p.tiltAngle += p.tiltAngleIncremental;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.tilt = Math.sin(p.tiltAngle - i / 3) * 15;
            
            if (p.y > canvas.height) {
                particles[i] = { ...p, y: -10, x: Math.random() * canvas.width };
            }
        });
    }
    
    let animationId;
    let frameCount = 0;
    function animate() {
        draw();
        frameCount++;
        if (frameCount < 300) { // Run for ~5 seconds
            animationId = requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    
    animate();
}

// ===================================
// MAKE IT RAIN (Bonus effect)
// ===================================
function makeItRain() {
    const colors = ['#6366f1', '#8b5cf6', '#ec4899'];
    const duration = 3000;
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '10px';
            particle.style.height = '10px';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = '-10px';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '10000';
            particle.style.opacity = '0.8';
            
            document.body.appendChild(particle);
            
            const fallDuration = Math.random() * 2000 + 1000;
            const startTime = Date.now();
            
            function fall() {
                const elapsed = Date.now() - startTime;
                const progress = elapsed / fallDuration;
                
                if (progress < 1) {
                    particle.style.top = (progress * window.innerHeight) + 'px';
                    particle.style.opacity = 1 - progress;
                    requestAnimationFrame(fall);
                } else {
                    particle.remove();
                }
            }
            
            fall();
        }, i * (duration / particleCount));
    }
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    const canvas = document.getElementById('confettiCanvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}, 250));

// Log welcome message
console.log('%c👋 Olá! Bem-vindo ao meu portfólio!', 'font-size: 16px; color: #6366f1; font-weight: bold;');
console.log('%c🎮 Tente encontrar todos os Easter Eggs!', 'font-size: 14px; color: #8b5cf6;');
console.log('%cDica: Experimente o Konami Code... 😉', 'font-size: 12px; color: #ec4899;');
