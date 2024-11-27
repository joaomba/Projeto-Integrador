$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x'); 
    });
});
const estrelas = document.querySelectorAll('.estrela');
const resultado = document.querySelector('.resultado');

estrelas.forEach(estrela => {
    estrela.addEventListener('click', () => {
        const valor = estrela.getAttribute('data-valor');

        estrelas.forEach(e => e.classList.remove('checked'));

        
        for (let i = 0; i < valor; i++) {
            estrelas[i].classList.add('checked');
        }

        resultado.textContent = `Você avaliou com ${valor} estrela(s)`;
    });
});