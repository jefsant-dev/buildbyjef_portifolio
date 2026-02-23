# 🚀 Portfólio Jeferson Santos - Versão Final

> Portfólio profissional com animações avançadas, parallax, transições e easter eggs interativos!

## ✨ Características

### 🎨 Visual & Design
- ✅ Design moderno e profissional
- ✅ Tema Dark/Light totalmente funcional
- ✅ Bilíngue (Português/Inglês)
- ✅ 100% Responsivo (Mobile-first)
- ✅ Animações CSS suaves
- ✅ Background animado com 4 camadas:
  - Mesh Gradient flutuante
  - **Efeito Plexus** animado (pontos conectados por linhas — Canvas 2D)
  - Grid Pattern em movimento
  - 3 Glowing Orbs

### ⚡ Funcionalidades Avançadas
- ✅ **Efeito Parallax** ao scroll
- ✅ **Transições suaves** entre seções
- ✅ **Smooth scroll** nos links de navegação (offset corrigido)
- ✅ **Counter animation** nas estatísticas (corrigido para iOS/iPhone)
- ✅ **Easter Eggs interativos** (4 secretos!)
- ✅ Menu fixo com efeito de transparência
- ✅ Modal de projetos com galeria
- ✅ Formulário de contato com API PHP
- ✅ **Botão de download do currículo PDF** (na Hero e na seção Contato)

### 🎯 Easter Eggs Escondidos

1. **Konami Code** 🎮
   - Digite: ↑ ↑ ↓ ↓ ← → ← → B A
   - Efeito: Confetti + Animação especial

2. **Dev Mode** 💻
   - Clique 3x no logo
   - OU digite "dev" em qualquer lugar
   - Efeito: Mensagem especial no console

3. **Secret Click** 🖱️
   - Clique 5x na foto de perfil
   - Efeito: Confetti colorido

4. **Easter Egg Surpresa** 🎁
   - Descubra por conta própria! 😉

## 📁 Estrutura de Arquivos

```
portfolio/
├── index.html                        # HTML limpo e semântico
├── css/
│   └── style.css                     # Todo o CSS (animações, responsivo, temas)
├── main.js                           # JavaScript (funcionalidades + easter eggs + plexus)
├── arquivos/
│   └── Currículo_Jeferson_Santos.pdf # Currículo para download
├── api/
│   └── send-email.php                # API para envio de emails
└── README.md                         # Este arquivo
```

## 🛠️ Instalação

### Requisitos
- Servidor web com PHP 7.0+
- Função `mail()` habilitada

### Passo a Passo

1. **Upload dos arquivos**
   ```bash
   # Faça upload de todos os arquivos para seu servidor
   # Mantenha a estrutura de pastas
   ```

2. **Configure o email** (opcional)
   ```php
   // Em api/send-email.php, linha 52
   $to = 'seu-email@exemplo.com';
   ```

3. **Teste**
   - Acesse seu domínio no navegador
   - Teste todas as funcionalidades
   - Tente encontrar os easter eggs! 🎮

## ⚙️ Personalização

### Cores

```css
/* Em css/style.css */
:root {
    --accent-primary: #6366f1;    /* Azul Índigo */
    --accent-secondary: #8b5cf6;  /* Roxo */
    --accent-tertiary: #ec4899;   /* Rosa */
}
```

### Efeito Plexus

```javascript
// Em main.js, função initPlexus()
const PARTICLE_COUNT = 60;  // Quantidade de pontos
const MAX_DIST = 150;       // Distância máxima para conectar
```

### Velocidade do Parallax

```html
<!-- No index.html, ajuste data-speed -->
<section class="parallax-section" data-speed="0.5">
<!-- Valores menores = movimento mais sutil -->
```

### Desabilitar Easter Eggs

```javascript
// Em main.js, comente a linha
// initEasterEggs();
```

### Adicionar Novos Projetos

```javascript
// Em main.js, adicione no array projectsData
{
    name: "Nome do Projeto",
    description: "Descrição...",
    images: [
        { url: "caminho/imagem.jpg", alt: "Descrição" }
    ],
    tech: ["Tech1", "Tech2"]
}
```

### Currículo PDF

```
// Coloque o arquivo em:
arquivos/Currículo_Jeferson_Santos.pdf
```

## 🎨 Recursos Visuais Detalhados

### Animações de Background

| Elemento | Tipo | Efeito |
|----------|------|--------|
| Mesh Gradient | CSS | Movimento flutuante |
| Plexus | Canvas JS | Pontos conectados animados |
| Grid Pattern | CSS | Movimento diagonal |
| Glowing Orbs | CSS | Flutuação orbital |

### Efeitos de Hover

- **Botões**: Shimmer effect (luz passando)
- **Cards**: Overlay gradient + scale
- **Links**: Underline animado
- **Social Icons**: Círculo expandindo
- **Skill Tags**: Transformação de cor

### Transições entre Seções

Cada seção tem:
- Fade in ao aparecer no viewport
- Slide up suave (30px)
- Duração: 0.8s
- Easing: ease

## 🚀 Recursos JavaScript

### Funcionalidades Principais

```javascript
// Theme Toggle
toggleTheme()              // Alterna dark/light

// Language Toggle
toggleLanguage()           // Alterna PT/EN

// Parallax
initParallax()            // Efeito ao scroll

// Smooth Scroll
initSmoothScroll()        // Navegação suave (offset corrigido)

// Counter Animation
animateCounters()         // Números crescendo (corrigido para iOS)

// Plexus Background
initPlexus()              // Efeito plexus no canvas

// Easter Eggs
initEasterEggs()          // Ativa os segredos
```

### APIs Utilizadas

- **localStorage**: Salva preferências (tema/idioma)
- **IntersectionObserver**: Animações ao scroll
- **Canvas API**: Efeito plexus + confetti
- **Fetch API**: Envio de formulário

## 📱 Responsividade

### Breakpoints

```css
/* Tablet */
@media (max-width: 968px) {
    /* Grid para 1 coluna */
    /* Menu mobile ativado */
}

/* Mobile */
@media (max-width: 640px) {
    /* Tipografia reduzida */
    /* Orbs desabilitadas */
    /* Botões full-width */
}
```

### Otimizações Mobile

- Orbes desabilitadas (performance)
- Plexus com poucas partículas (performance)
- Menu hamburger responsivo
- Toques otimizados
- Imagens com lazy loading

## 🎯 Performance

### Otimizações Implementadas

✅ **CSS**
- Animações GPU-accelerated
- Transform e opacity only
- Will-change em elementos parallax

✅ **JavaScript**
- Event listeners com debounce
- IntersectionObserver para scroll
- Lazy loading nas imagens
- Counter animation corrigido (performance.now)

✅ **Assets**
- Fontes via CDN (Google Fonts)
- Sem imagens locais pesadas

## 🧪 Testes

### Checklist de Funcionalidades

- [ ] Tema dark/light funciona
- [ ] Troca de idioma funciona
- [ ] Menu mobile abre/fecha
- [ ] Scroll suave nos links (títulos visíveis)
- [ ] Parallax está ativo
- [ ] Contadores animam (inclusive em iPhones)
- [ ] Modal de projetos abre
- [ ] Formulário envia email
- [ ] Efeito Plexus visível no background
- [ ] Botão Download CV (Hero) funciona
- [ ] Botão Download CV (Contato) funciona
- [ ] Todos os easter eggs funcionam

### Browsers Testados

- ✅ Chrome/Edge (v100+)
- ✅ Firefox (v90+)
- ✅ Safari (v14+)
- ✅ Mobile browsers (iOS/Android)

## 🐛 Troubleshooting

### Parallax não funciona
```javascript
// Verifique se os elementos têm as classes corretas
<section class="parallax-section" data-speed="0.5">
```

### Plexus não aparece
```javascript
// Verifique se o canvas existe no HTML
<canvas id="plexusCanvas"></canvas>
// Abra o console (F12) para ver erros de contexto
```

### Easter eggs não ativam
```javascript
// Abra o console (F12) e verifique erros
// Os easter eggs logam mensagens no console
```

### Confetti não aparece
```javascript
// Verifique se o canvas existe no HTML
<canvas id="confettiCanvas"></canvas>
```

### Formulário não envia
```bash
# Verifique se a função mail() está habilitada
php -r "echo (function_exists('mail') ? 'OK' : 'ERRO');"
```

### Download do currículo não funciona
```
# Verifique se o arquivo existe em:
arquivos/Currículo_Jeferson_Santos.pdf
```

## 📊 Estatísticas do Projeto

- **HTML**: ~400 linhas
- **CSS**: ~1450 linhas
- **JavaScript**: ~730 linhas
- **Total de animações**: 16+
- **Easter eggs**: 4
- **Idiomas**: 2 (PT/EN)
- **Temas**: 2 (Dark/Light)

## 🎓 Aprendizados

Este projeto demonstra:

✅ HTML semântico e acessível
✅ CSS avançado (animations, transforms, gradients)
✅ JavaScript vanilla (sem frameworks)
✅ Canvas 2D API (efeito Plexus)
✅ Responsive design
✅ Performance optimization
✅ User experience (UX)
✅ Easter eggs e gamificação
✅ Compatibilidade cross-browser (iOS Safari)

## 📞 Suporte

**Desenvolvedor**: Jeferson Santos

- **Email**: jef.jeferson.sant@gmail.com
- **LinkedIn**: [jeferson-santos-dev](https://www.linkedin.com/in/jeferson-santos-dev/)
- **GitHub**: [jefsant-dev](https://github.com/jefsant-dev)

## 📄 Licença

Este projeto foi desenvolvido por Jeferson Santos.

Sinta-se livre para se inspirar, mas por favor, dê os devidos créditos! 😊

---

**Desenvolvido com ❤️, muito ☕ e uma pitada de ✨ magia**

*"Código limpo é aquele que parece ter sido escrito por alguém que se importa." - Robert C. Martin*

## 🎮 Dica Final

Não se esqueça de procurar todos os Easter Eggs! Existem 4 escondidos no site.

**Dica secreta**: Experimente o código clássico dos videogames... 🎮👾

> Portfólio profissional com animações avançadas, parallax, transições e easter eggs interativos!

## ✨ Características

### 🎨 Visual & Design
- ✅ Design moderno e profissional
- ✅ Tema Dark/Light totalmente funcional
- ✅ Bilíngue (Português/Inglês)
- ✅ 100% Responsivo (Mobile-first)
- ✅ Animações CSS suaves
- ✅ Background animado com 4 camadas:
  - Mesh Gradient flutuante
  - 10 Partículas animadas
  - Grid Pattern em movimento
  - 3 Glowing Orbs

### ⚡ Funcionalidades Avançadas
- ✅ **Efeito Parallax** ao scroll
- ✅ **Transições suaves** entre seções
- ✅ **Smooth scroll** nos links de navegação
- ✅ **Counter animation** nas estatísticas
- ✅ **Easter Eggs interativos** (4 secretos!)
- ✅ Menu fixo com efeito de transparência
- ✅ Modal de projetos com galeria
- ✅ Formulário de contato com API PHP

### 🎯 Easter Eggs Escondidos

1. **Konami Code** 🎮
   - Digite: ↑ ↑ ↓ ↓ ← → ← → B A
   - Efeito: Confetti + Animação especial

2. **Dev Mode** 💻
   - Clique 3x no logo
   - OU digite "dev" em qualquer lugar
   - Efeito: Mensagem especial no console

3. **Secret Click** 🖱️
   - Clique 5x na foto de perfil
   - Efeito: Confetti colorido

4. **Easter Egg Surpresa** 🎁
   - Descubra por conta própria! 😉

## 📁 Estrutura de Arquivos

```
portfolio/
├── index.html          # HTML limpo e semântico
├── style.css           # Todo o CSS (animações, responsivo, temas)
├── main.js            # JavaScript (funcionalidades + easter eggs)
├── api/
│   └── send-email.php # API para envio de emails
└── README.md          # Este arquivo
```

## 🛠️ Instalação

### Requisitos
- Servidor web com PHP 7.0+
- Função `mail()` habilitada

### Passo a Passo

1. **Upload dos arquivos**
   ```bash
   # Faça upload de todos os arquivos para seu servidor
   # Mantenha a estrutura de pastas
   ```

2. **Configure o email** (opcional)
   ```php
   // Em api/send-email.php, linha 52
   $to = 'seu-email@exemplo.com';
   ```

3. **Teste**
   - Acesse seu domínio no navegador
   - Teste todas as funcionalidades
   - Tente encontrar os easter eggs! 🎮

## ⚙️ Personalização

### Cores

```css
/* Em style.css, linhas 9-22 */
:root {
    --accent-primary: #6366f1;    /* Azul Índigo */
    --accent-secondary: #8b5cf6;  /* Roxo */
    --accent-tertiary: #ec4899;   /* Rosa */
}
```

### Velocidade do Parallax

```html
<!-- No index.html, ajuste data-speed -->
<section class="parallax-section" data-speed="0.5">
<!-- Valores menores = movimento mais sutil -->
```

### Desabilitar Easter Eggs

```javascript
// Em main.js, comente a linha 310
// initEasterEggs();
```

### Adicionar Novos Projetos

```javascript
// Em main.js, adicione no array projectsData
{
    name: "Nome do Projeto",
    description: "Descrição...",
    images: [
        { url: "caminho/imagem.jpg", alt: "Descrição" }
    ],
    tech: ["Tech1", "Tech2"]
}
```

## 🎨 Recursos Visuais Detalhados

### Animações de Background

| Elemento | Duração | Efeito |
|----------|---------|--------|
| Mesh Gradient | 20s | Movimento flutuante |
| Partículas | 15-23s | Subida com rotação |
| Grid Pattern | 30s | Movimento diagonal |
| Glowing Orbs | 20s | Flutuação orbital |

### Efeitos de Hover

- **Botões**: Shimmer effect (luz passando)
- **Cards**: Overlay gradient + scale
- **Links**: Underline animado
- **Social Icons**: Círculo expandindo
- **Skill Tags**: Transformação de cor

### Transições entre Seções

Cada seção tem:
- Fade in ao aparecer no viewport
- Slide up suave (30px)
- Duração: 0.8s
- Easing: ease

## 🚀 Recursos JavaScript

### Funcionalidades Principais

```javascript
// Theme Toggle
toggleTheme()              // Alterna dark/light

// Language Toggle
toggleLanguage()           // Alterna PT/EN

// Parallax
initParallax()            // Efeito ao scroll

// Smooth Scroll
initSmoothScroll()        // Navegação suave

// Counter Animation
animateCounters()         // Números crescendo

// Easter Eggs
initEasterEggs()          // Ativa os segredos
```

### APIs Utilizadas

- **localStorage**: Salva preferências (tema/idioma)
- **IntersectionObserver**: Animações ao scroll
- **Canvas API**: Efeito confetti
- **Fetch API**: Envio de formulário

## 📱 Responsividade

### Breakpoints

```css
/* Tablet */
@media (max-width: 968px) {
    /* Grid para 1 coluna */
    /* Menu mobile ativado */
}

/* Mobile */
@media (max-width: 640px) {
    /* Tipografia reduzida */
    /* Orbs desabilitadas */
    /* Botões full-width */
}
```

### Otimizações Mobile

- Orbes desabilitadas (performance)
- Partículas reduzidas visualmente
- Menu hamburger responsivo
- Toques otimizados
- Imagens com lazy loading

## 🎯 Performance

### Otimizações Implementadas

✅ **CSS**
- Animações GPU-accelerated
- Transform e opacity only
- Will-change em elementos parallax

✅ **JavaScript**
- Event listeners com debounce
- IntersectionObserver para scroll
- Lazy loading nas imagens

✅ **Assets**
- Fontes via CDN (Google Fonts)
- Sem imagens locais pesadas

## 🧪 Testes

### Checklist de Funcionalidades

- [ ] Tema dark/light funciona
- [ ] Troca de idioma funciona
- [ ] Menu mobile abre/fecha
- [ ] Scroll suave nos links
- [ ] Parallax está ativo
- [ ] Contadores animam
- [ ] Modal de projetos abre
- [ ] Formulário envia email
- [ ] Todos os easter eggs funcionam

### Browsers Testados

- ✅ Chrome/Edge (v100+)
- ✅ Firefox (v90+)
- ✅ Safari (v14+)
- ✅ Mobile browsers

## 🐛 Troubleshooting

### Parallax não funciona
```javascript
// Verifique se os elementos têm as classes corretas
<section class="parallax-section" data-speed="0.5">
```

### Easter eggs não ativam
```javascript
// Abra o console (F12) e verifique erros
// Os easter eggs logam mensagens no console
```

### Confetti não aparece
```javascript
// Verifique se o canvas existe no HTML
<canvas id="confettiCanvas"></canvas>
```

### Formulário não envia
```bash
# Verifique se a função mail() está habilitada
php -r "echo (function_exists('mail') ? 'OK' : 'ERRO');"
```

## 📊 Estatísticas do Projeto

- **HTML**: ~400 linhas
- **CSS**: ~1500 linhas
- **JavaScript**: ~650 linhas
- **Total de animações**: 15+
- **Easter eggs**: 4
- **Idiomas**: 2 (PT/EN)
- **Temas**: 2 (Dark/Light)

## 🎓 Aprendizados

Este projeto demonstra:

✅ HTML semântico e acessível
✅ CSS avançado (animations, transforms, gradients)
✅ JavaScript vanilla (sem frameworks)
✅ Responsive design
✅ Performance optimization
✅ User experience (UX)
✅ Easter eggs e gamificação

## 📞 Suporte

**Desenvolvedor**: Jeferson Santos

- **Email**: jef.jeferson.sant@gmail.com
- **LinkedIn**: [jeferson-santos-dev](https://www.linkedin.com/in/jeferson-santos-dev/)
- **GitHub**: [jefsant-dev](https://github.com/jefsant-dev)

## 📄 Licença

Este projeto foi desenvolvido por Jeferson Santos.

Sinta-se livre para se inspirar, mas por favor, dê os devidos créditos! 😊

---

**Desenvolvido com ❤️, muito ☕ e uma pitada de ✨ magia**

*"Código limpo é aquele que parece ter sido escrito por alguém que se importa." - Robert C. Martin*

## 🎮 Dica Final

Não se esqueça de procurar todos os Easter Eggs! Existem 4 escondidos no site.

**Dica secreta**: Experimente o código clássico dos videogames... 🎮👾