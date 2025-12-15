export default function spanActive() {

    const span = document.querySelector('span');
    const input = document.querySelector('input');

    // SE MEU INPUT RECEBE UM FOCO, MEU ICONE ALTERA
    input.addEventListener('focus', () => {
        span.classList.add('active');
    })

    // SE MEU INPUT PARAR DE RECEBER O FOCO, MEU ICONE ALTERA
    input.addEventListener('blur', () => {
        span.classList.remove('active');
    });
}