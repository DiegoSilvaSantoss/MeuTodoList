export default function clickSpan() {
    const span = document.querySelector('span');
    const input = document.querySelector('input');

    // QUANDO CLICAR NO ICONE KEYBOARD, MEU INPUT RECEBE O FOCO
    span.addEventListener('click', () => {
        input.focus();
    });
}