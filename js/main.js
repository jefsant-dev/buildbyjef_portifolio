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
    }).catch(() => {
        // Silencioso, não impacta UX
    });
});

// Ano automático
document.getElementById("year").textContent = new Date().getFullYear();

// Tema
document.getElementById("themeToggle").onclick = () => {
  document.documentElement.classList.toggle("light");
};

// Idioma
document.getElementById("langToggle").onclick = () => {
  document.querySelectorAll("[data-pt]").forEach(el => {
    el.textContent = el.textContent === el.dataset.pt
      ? el.dataset.en
      : el.dataset.pt;
  });
};

// Formulário AJAX
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const form = e.target;
  fetch("php/send-mail.php", {
    method: "POST",
    body: new FormData(form)
  })
  .then(r => r.json())
  .then(res => {
    document.getElementById("formMsg").textContent =
      res.success ? "Mensagem enviada!" : "Erro ao enviar";
    form.reset();
  });
});
