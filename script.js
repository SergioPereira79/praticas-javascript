// document.addEventListener('DOMContentLoaded', () => {
    
//     const titulo = document.getElementById('titulo-site');
//     const inicio = document.getElementById('home-div');
//     const botao = document.getElementById('alertButton');
//     const about = document.getElementById('about');

//         titulo.classList.add('visivel');
//         inicio.classList.add('visivel');
//     botao.addEventListener('click', () => {
//         alert('Você clicou no botão!');
//     });
//     new IntersectionObserver((entries) => 
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visivel');
//             }
//         })
//         , {
//             threshold: 0.3
//         }).observe(about); 
// });
document.addEventListener('DOMContentLoaded', () => {

    // --- ANIMAÇÕES DE CARREGAMENTO (para elementos visíveis no topo) ---
    const titulo = document.getElementById('titulo-site');
    const inicio = document.getElementById('home-div');

    // Usamos um pequeno atraso para garantir que a animação CSS seja executada
    setTimeout(() => {
        titulo.classList.add('visivel');
        inicio.classList.add('visivel');
    }, 200); // Um atraso bem pequeno, como 100ms, já é o suficiente.


    // --- ANIMAÇÃO DE SCROLL (para elementos que aparecem depois) ---
    const about = document.getElementById('about');

    // 1. Definimos as opções para o nosso "vigia"
    const opcoesDoObserver = {
        threshold: 0.3 // Dispara quando 30% do elemento estiver visível
    };

    // 2. Criamos o nosso "vigia" com o nome CORRETO (I e O maiúsculos)
    const observer = new IntersectionObserver((entries) => {
        // Esta é a função que o vigia executa quando vê algo
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target); // Opcional: para a animação não repetir
            }
        });
    }, opcoesDoObserver);

    // 3. Mandamos o "vigia" observar o elemento 'about'
    observer.observe(about);


    // --- LÓGICA DO BOTÃO (separada da animação) ---
    const botao = document.getElementById('alertButton');
    botao.addEventListener('click', () => {
        alert('Você clicou no botão!');
    });

});