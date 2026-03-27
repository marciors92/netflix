import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
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
        if (activeProfileImg) activeProfileImg.src = imagemPerfil;
        if (activeProfileImg) activeProfileImg.alt = `${nomePerfil} (perfil ativo)`;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
