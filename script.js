/**
 * DARK/LIGHT MODE TOGGLE & PROFILE MANAGER
 */

// ========================================
// 1. INICIALIZAÇÃO E TEMA
// ========================================

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const preferredTheme = savedTheme || detectSystemTheme();
    applyTheme(preferredTheme);

    const button = document.getElementById('theme-toggle');
    if (button) {
        button.addEventListener('click', toggleTheme);
    }
}

function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'dark'; 
}

function applyTheme(theme) {
    const button = document.getElementById('theme-toggle');
    // Busca a span dentro do botão ou o próprio botão se não houver span
    const icon = button ? (button.querySelector('.theme-icon') || button) : null;

    if (theme === 'light') {
        document.body.classList.add('light-mode');
        if (icon) icon.textContent = '☀️';
    } else {
        document.body.classList.remove('light-mode');
        if (icon) icon.textContent = '🌙';
    }

    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const isCurrentlyLight = document.body.classList.contains('light-mode');
    applyTheme(isCurrentlyLight ? 'dark' : 'light');
}

// ========================================
// 2. GERENCIAMENTO DE PERFIL
// ========================================

function setupPerfilAtivo() {
    const perfilLinks = document.querySelectorAll('.profile-link');

    perfilLinks.forEach(link => {
        link.addEventListener('click', () => {
            const figure = link.querySelector('figure');
            if (!figure) return;

            const img = figure.querySelector('img');
            const caption = figure.querySelector('figcaption');

            if (img && caption) {
                localStorage.setItem('perfilAtivoNome', caption.textContent.trim());
                localStorage.setItem('perfilAtivoImagem', img.src);
            }
        });
    });
}

// ========================================
// 3. EXECUÇÃO
// ========================================

function init() {
    initializeTheme();
    setupPerfilAtivo();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}