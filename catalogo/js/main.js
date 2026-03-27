import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

/**
 * Aplica o tema (escuro/claro) baseado no que está salvo no localStorage
 */
function aplicarTemaSalvo() {
    const tema = localStorage.getItem('theme');
    if (tema === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sincroniza o tema antes de mostrar o conteúdo
    aplicarTemaSalvo();

    // 2. Recupera os dados do perfil ativo
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
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

    // 3. Injeção dos Carrosséis
    const container = document.getElementById('main-content');
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});