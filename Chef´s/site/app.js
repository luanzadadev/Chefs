let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');
let logoSpan = document.querySelectorAll('.logo-parts'); // Corrigido para selecionar todos os spans

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1) * 100); // Correto: Usando o index
        });

        setTimeout(() => {
            logoSpan.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (index + 1) * 50); // Correto: Usando o index
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300);
    }, 0); // Intervalo inicial adicionado
});
