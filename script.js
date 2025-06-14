document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.getElementById('titulo-site');
    const inicio = document.getElementById('home-div');

    setTimeout(() => {
        titulo.classList.add('visivel');
        inicio.classList.add('visivel');
    }, 200); 
    
    const about = document.getElementById('about');
    const contact = document.getElementById('contact');

    const opcoesDoObserver = {
        threshold: 0.3 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target); 
            }
        });
    }, opcoesDoObserver);

    observer.observe(about);
    observer.observe(contact);

    const botao = document.getElementById('alertButton');
    botao.addEventListener('click', () => {
        alert('Você clicou no botão!');
    });

});