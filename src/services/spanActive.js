export default function spanActive() {

    const span = document.querySelector('span');
    const input = document.querySelector('input');

    input.addEventListener('focus', () => {
        span.classList.add('active');
    })

    input.addEventListener('blur', () => {
        span.classList.remove('active');
    });
}