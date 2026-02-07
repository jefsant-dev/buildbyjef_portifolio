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

    fetch('/php/save-visitor.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).catch(() => {});
});

// Ano automático
document.getElementById("year").textContent = new Date().getFullYear();

/* ===============================
   CONFIGURAÇÕES INICIAIS
================================ */
const body = document.body;
const themeBtn = document.querySelector('.theme-btn');
const langBtn = document.querySelector('.lang-btn');

let currentLang = localStorage.getItem('lang') || 'pt';
let currentTheme = localStorage.getItem('theme') || 'dark';

/* ===============================
   DARK / LIGHT MODE
================================ */
function applyTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light');
        themeBtn.textContent = '☀️';
    } else {
        body.classList.remove('light');
        themeBtn.textContent = '🌙';
    }
    localStorage.setItem('theme', theme);
}

themeBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
});

applyTheme(currentTheme);

/* ===============================
   IDIOMA PT / EN
================================ */
function applyLanguage(lang) {
    document.querySelectorAll('[data-pt]').forEach(el => {
        el.textContent = lang === 'pt'
            ? el.dataset.pt
            : el.dataset.en || el.dataset.pt;
    });

    localStorage.setItem('lang', lang);
}

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    applyLanguage(currentLang);
});

applyLanguage(currentLang);

/* ===============================
   ANIMAÇÕES E INTERAÇÕES
================================ */
const animatedElements = document.querySelectorAll('.section, .project-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
},{threshold:0.15});
animatedElements.forEach(el=>{el.classList.add('pre-animate');observer.observe(el)});

/* ===============================
   MODAL DE PROJETOS
================================ */
const projectsData = {
  control: {
    title: 'Control OnLine',
    description: 'Sistema de gestão interna com automação de processos, integrações e gerenciamento de aplicações.',
    images: [
      'https://buildbyjef.site/img/Tela%20de%20login.jpg',
      'https://buildbyjef.site/img/Tela%20inicial-Ctrl.jpg'
    ]
  },

  idealcred: {
    title: 'IdealCred',
    description: 'CRM para controle e geração de propostas de empréstimos com integração de múltiplas APIs.',
    images: [
      'https://buildbyjef.site/img/idealcred.jpg'
    ]
  },

  conexao: {
    title: 'Conexão OnLine',
    description: 'Aplicação mobile e web para cartão de benefícios de funcionários.',
    images: [
      'https://buildbyjef.site/img/CO-INICIAL.jpg'
    ]
  }
};

const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.modal-close');

let currentImages = [];
let currentIndex = 0;

document.querySelectorAll('.project-card').forEach(card => {
  card.querySelector('.project-btn').addEventListener('click', () => {
    const key = card.dataset.project;
    const project = projectsData[key];

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    currentImages = project.images;
    currentIndex = 0;
    modalImage.src = currentImages[0];

    modal.classList.add('active');
  });
});

document.querySelector('.slide-btn.next').onclick = () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  modalImage.src = currentImages[currentIndex];
};

document.querySelector('.slide-btn.prev').onclick = () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  modalImage.src = currentImages[currentIndex];
};

closeBtn.onclick = () => modal.classList.remove('active');
modal.onclick = e => { if (e.target === modal) modal.classList.remove('active'); };

/* ===============================
   FORMULÁRIO E WHATSAPP
================================ */
const contactForm = document.getElementById('contactForm');
const whatsappBtn = document.getElementById('whatsappBtn');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const payload = Object.fromEntries(formData.entries());

  // Envia email via PHP
  const res = await fetch('/php/send-mail.php', { method: 'POST', body: formData });
  const json = await res.json().catch(()=>({success:false}));

  // Log visitante com campos do form
  const visitor = {
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
    browserDatetime: new Date().toISOString(),
    form_name: payload.name || null,
    form_email: payload.email || null,
    form_message: payload.message || null
  };

  fetch('/php/save-visitor.php', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(visitor)}).catch(()=>{});

  if (json.success) {
    alert('Mensagem enviada — obrigado!');
    contactForm.reset();
  } else {
    alert('Erro ao enviar mensagem, tente novamente.');
  }
});

// WhatsApp open and log
whatsappBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const phone = '5511994158467';
  const url = `https://wa.me/${phone}`;
  window.open(url, '_blank');

  const data = { whatsappClicked: 1 };
  fetch('/php/save-visitor.php', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)}).catch(()=>{});
});

});

// Ano automático
document.getElementById("year").textContent = new Date().getFullYear();

/* ===============================
   CONFIGURAÇÕES INICIAIS
================================ */
const body = document.body;
const themeBtn = document.querySelector('.theme-btn');
const langBtn = document.querySelector('.lang-btn');

let currentLang = localStorage.getItem('lang') || 'pt';
let currentTheme = localStorage.getItem('theme') || 'dark';

/* ===============================
   DARK / LIGHT MODE
================================ */
function applyTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light');
        themeBtn.textContent = '☀️';
    } else {
        body.classList.remove('light');
        themeBtn.textContent = '🌙';
    }
    localStorage.setItem('theme', theme);
}

themeBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
});

applyTheme(currentTheme);

/* ===============================
   IDIOMA PT / EN
================================ */
function applyLanguage(lang) {
    document.querySelectorAll('[data-pt]').forEach(el => {
        el.textContent = lang === 'pt'
            ? el.dataset.pt
            : el.dataset.en;
    });

    localStorage.setItem('lang', lang);
}

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    applyLanguage(currentLang);
});

applyLanguage(currentLang);

/* ===============================
   ANIMAÇÕES DE SCROLL
================================ */
const animatedElements = document.querySelectorAll(
    '.section, .project-card, .experience-item'
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach(el => {
    el.classList.add('pre-animate');
    observer.observe(el);
});

/* ===============================
   SCROLL SUAVE PARA ÂNCORAS
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* ===============================
   MODAL DE PROJETOS
================================ */

const projectsData = {
  control: {
    title: 'Control OnLine',
    description: 'Sistema de gestão interna com automação de processos, integrações e gerenciamento de aplicações.',
    images: [
      'https://media.licdn.com/dms/image/v2/D4D2DAQExUzT7Z_F89A/profile-treasury-image-shrink_800_800/B4DZinP.I.H4AY-/0/1755152639377?e=1771030800&v=beta&t=ygg9r_wEcvak-AGisJm-vYMizJnx2-IvJNMwpF7reMA',
      'https://media.licdn.com/dms/image/v2/D4D2DAQEUHkKwf8rhLw/profile-treasury-image-shrink_800_800/B4DZinQIv1GkAc-/0/1755152682720?e=1771030800&v=beta&t=_sCcpbM8c9C9rsZF4xH3p8r9A70e85MjqChysT9SpZo',
      'https://media.licdn.com/dms/image/v2/D4D2DAQGqPijiZYymZQ/profile-treasury-image-shrink_800_800/B4DZinQ35MHsAc-/0/1755152875896?e=1771030800&v=beta&t=B6N_KHlW7S--mP_q6eJx1BSNOolz0CMSLs-zzzlm7rc',
      'https://media.licdn.com/dms/image/v2/D4D2DAQHdc81nvAcKxg/profile-treasury-image-shrink_800_800/B4DZinQlGwH8Ag-/0/1755152799103?e=1771030800&v=beta&t=O-r4hwOl3X67zRzb6Se7wKumhCRCHxgNxYRP_QM0rBI',
      'https://media.licdn.com/dms/image/v2/D4D2DAQEoK2BPpd1kJg/profile-treasury-image-shrink_800_800/B4DZinQO79G8Ac-/0/1755152708123?e=1771030800&v=beta&t=34RBOFdQSJYXlDblGffOc6SaEISTmLDnKMuoqeagyN0'
    ]
  },

  idealcred: {
    title: 'IdealCred',
    description: 'CRM para controle e geração de propostas de empréstimos com integração de múltiplas APIs.',
    images: [
      'https://buildbyjef.site/img/idealcred.jpg'
    ]
  },

  conexao: {
    title: 'Conexão OnLine',
    description: 'Aplicação mobile e web para cartão de benefícios de funcionários.',
    images: [
      'https://media.licdn.com/dms/image/v2/D4D2DAQHvLuic8hZPfw/profile-treasury-image-shrink_1920_1920/B4DZinTudaHsAg-/0/1755153623522?e=1771034400&v=beta&t=O_VWfKY6O0yQr-Z5qo7qzKIyeDpA7qSk8Wci1XoJhYA',
      'https://media.licdn.com/dms/image/v2/D4D2DAQHN-h5LLr1tmQ/profile-treasury-image-shrink_8192_8192/B4DZinTmTxHwAk-/0/1755153590132?e=1771034400&v=beta&t=XY9PTWDQt8eo__GQk4bv0VaVs1beAWSxglXDj7gcqZM'
    ]
  }
};

const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.modal-close');

let currentImages = [];
let currentIndex = 0;

document.querySelectorAll('.project-card').forEach(card => {
  card.querySelector('.project-btn').addEventListener('click', () => {
    const key = card.dataset.project;
    const project = projectsData[key];

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    currentImages = project.images;
    currentIndex = 0;
    modalImage.src = currentImages[0];

    modal.classList.add('active');
  });
});

document.querySelector('.slide-btn.next').onclick = () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  modalImage.src = currentImages[currentIndex];
};

document.querySelector('.slide-btn.prev').onclick = () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  modalImage.src = currentImages[currentIndex];
};

closeBtn.onclick = () => modal.classList.remove('active');
modal.onclick = e => {
  if (e.target === modal) modal.classList.remove('active');
};

const translations = {
  pt: {
    heroTitle: 'Full Stack Developer',
    heroSub: 'Desenvolvimento de sistemas, APIs, aplicações web e mobile, com foco em performance, escalabilidade e experiência do usuário.',
    projects: 'Projetos',
    contact: 'Contato'
  },
  en: {
    heroTitle: 'Full Stack Developer',
    heroSub: 'Development of systems, APIs, web and mobile applications, focused on performance, scalability and user experience.',
    projects: 'Projects',
    contact: 'Contact'
  }
};

function setLanguage(lang) {
  document.querySelector('.hero h1 span').textContent = translations[lang].heroTitle;
  document.querySelector('.hero-sub').textContent = translations[lang].heroSub;

  document.querySelectorAll('.lang-switch button')
    .forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));

  localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang-switch button').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

setLanguage(localStorage.getItem('lang') || 'pt');
