/**
 * DARK/LIGHT MODE TOGGLE
 * Gerencia alternância entre modo escuro e claro com armazenamento em localStorage
 */

// ========================================
// INICIALIZAÇÃO DO TEMA
// ========================================

/**
 * Inicializa o tema ao carregar a página
 * Prioridade: localStorage > preferência do sistema > dark mode padrão
 */
function initializeTheme() {
    const htmlElement = document.documentElement;
    const button = document.getElementById('theme-toggle');
    
    // Verifica se há tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Se houver tema salvo, usa ele; caso contrário, detecta preferência do sistema
    const preferredTheme = savedTheme || detectSystemTheme();
    
    // Aplica o tema
    applyTheme(preferredTheme);
    
    // Adiciona listener ao botão
    if (button) {
        button.addEventListener('click', toggleTheme);
    }
}

// ========================================
// DETECTAR PREFERÊNCIA DO SISTEMA
// ========================================

/**
 * Detecta se o usuário prefere dark mode ou light mode no sistema operacional
 * @returns {string} 'dark' ou 'light'
 */
function detectSystemTheme() {
    // Verifica se o navegador suporta prefers-color-scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    // Padrão: dark mode
    return 'dark';
}

// ========================================
// APLICAR TEMA
// ========================================

/**
 * Aplica o tema escolhido ao documento
 * @param {string} theme - 'dark' ou 'light'
 */
function applyTheme(theme) {
    const htmlElement = document.documentElement;
    const button = document.getElementById('theme-toggle');
    const icon = button ? button.querySelector('.theme-icon') : null;
    
    if (theme === 'light') {
        // Aplica modo claro
        htmlElement.setAttribute('data-theme', 'light');
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        
        // Atualiza ícone do botão
        if (icon) {
            icon.textContent = '☀️';
            icon.title = 'Mudar para modo escuro';
        }
    } else {
        // Aplica modo escuro
        htmlElement.setAttribute('data-theme', 'dark');
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        
        // Atualiza ícone do botão
        if (icon) {
            icon.textContent = '🌙';
            icon.title = 'Mudar para modo claro';
        }
    }
    
    // Salva no localStorage
    localStorage.setItem('theme', theme);
}

// ========================================
// TOGGLE ENTRE TEMAS
// ========================================

/**
 * Alterna entre dark e light mode
 */
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || detectSystemTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

// ========================================
// DETECTAR MUDANÇAS NA PREFERÊNCIA DO SISTEMA
// ========================================

/**
 * Monitora mudanças nas preferências do sistema operacional
 * Atualiza o tema se o usuário não salvou uma preferência manual
 */
function watchSystemTheme() {
    if (window.matchMedia) {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Listener para mudanças de preferência do sistema
        darkModeQuery.addEventListener('change', (e) => {
            // Só atualiza se não há tema salvo no localStorage
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                applyTheme(newTheme);
            }
        });
    }
}

// ========================================
// EXECUTAR AO CARREGAR A PÁGINA
// ========================================

// Aguarda o DOM estar pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeTheme();
        watchSystemTheme();
    });
} else {
    // DOM já está pronto (se script for carregado no final do body)
    initializeTheme();
    watchSystemTheme();
}
