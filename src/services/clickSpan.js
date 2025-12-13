export default function clickSpan() {
    const span = document.querySelector('span');
    const input = document.querySelector('input');

    span.addEventListener('click', () => {
        input.focus();
    });
}