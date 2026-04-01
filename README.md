# Netflix Clone - Imersão Front-End & IA

## 📺 Sobre o Projeto
Desenvolvi um clone da interface do catálogo da Netflix, focando em uma experiência de usuário (UX) fluida e em um código limpo e escalável. Meu objetivo foi replicar a estética visual da plataforma, garantindo que a aplicação fosse responsiva, dinâmica e fiel ao design original, utilizando conceitos modernos de Front-End.

## 🛠️ Decisões Técnicas e Arquitetura
Optei por uma abordagem de **Vanilla JavaScript** com uma estrutura modular. Acredito que dominar o comportamento nativo do navegador é fundamental antes de abstrair para frameworks complexos.

- **Modularização de Dados:** Centralizei todas as informações do catálogo (títulos, miniaturas e metadados) em um arquivo `data.js`. Isso facilita a manutenção e simula como os dados seriam consumidos de uma API real no futuro.
- **Componentização:** Desenvolvi componentes de carrossel reutilizáveis para renderizar as categorias de forma dinâmica, evitando a repetição de código HTML e garantindo que novas seções possam ser adicionadas em segundos.
- **Gestão de Estado e Tema:** Implementei um sistema de troca de temas (Light/Dark Mode) utilizando `localStorage` para persistir a preferência do usuário entre as sessões, além de gerenciar a identidade do perfil ativo.

## 🎨 Interface e Experiência do Usuário
Busquei padronizar o layout para que a interface se adaptasse a diferentes resoluções. 
- Utilizei **CSS Grid** e **Flexbox** para garantir que os cards de filmes estivessem sempre alinhados e centralizados.
- Refinei os espaçamentos e a hierarquia visual, eliminando gargalos comuns de layout (como o Flash of Unstyled Content) ao sincronizar o tema antes do carregamento completo do DOM.
- Adicionei uma camada de interatividade onde cada título direciona o usuário para uma experiência multimídia via YouTube, elevando o projeto de um layout estático para uma aplicação funcional.

## 🚀 Tecnologias Utilizadas
- **HTML5 & CSS3:** Estruturação semântica e estilização avançada com variáveis CSS.
- **JavaScript (ES6+):** Manipulação de DOM, Módulos (import/export) e persistência de dados local.
- **Git & GitHub:** Versionamento atômico e profissional seguindo padrões de mercado.
