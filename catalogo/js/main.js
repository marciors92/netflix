import { categories } from '../../assets/img/data.js';
import { createCarousel } from './components/Carousel.js';

/**
 * Aplica o tema imediatamente para evitar o "FOUC" (Flash of Unstyled Content).
 */
function aplicarTemaSalvo() {
    const tema = localStorage.getItem('theme');
    // Usamos toggle para simplificar a lógica
    document.body.classList.toggle('light-mode', tema === 'light');
}

// Executa o tema antes do DOMContentLoaded se o script for importado corretamente
aplicarTemaSalvo();

/**
 * Atualiza os elementos de interface com os dados do perfil ativo
 */
function renderizarPerfil() {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (!nomePerfil || !imagemPerfil) return;

    const kidsLink = document.querySelector('.kids-link');
    const profileIcon = document.querySelector('.profile-icon');
    const activeProfileName = document.querySelector('.active-profile-name');
    const activeProfileImg = document.querySelector('.active-profile-img');

    if (kidsLink) kidsLink.textContent = nomePerfil;
    if (profileIcon) profileIcon.src = imagemPerfil;
    if (activeProfileName) activeProfileName.textContent = nomePerfil;

    if (activeProfileImg) {
        activeProfileImg.src = imagemPerfil;
        activeProfileImg.alt = `Perfil de ${nomePerfil}`;
    }
}

/**
 * Inicializa os carrosséis na página
 */
function inicializarCarrosseis() {
    const container = document.getElementById('main-content');
    if (!container) return;

    // Fragmento de documento melhora a performance ao inserir múltiplos elementos
    const fragment = document.createDocumentFragment();

    categories.forEach(category => {
        const carousel = createCarousel(category);
        fragment.appendChild(carousel);
    });

    container.appendChild(fragment);
}

// Listener principal
document.addEventListener('DOMContentLoaded', () => {
    renderizarPerfil();
    inicializarCarrosseis();
});