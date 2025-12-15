export default function addOrDelete() {
    const ul = document.querySelector('ul');
    if (!ul) return;

    ul.addEventListener('click', e => {

        // APAGAR MINHA LISTA
        const trash = e.target.closest('.bi-trash3');
        if (trash) {
            const li = trash.closest('li');
            if (li) li.remove();
            return;
        }

        // MARCAR E DESMARCAR A MINHA LISTA COMO FEITO
        const check = e.target.closest('.bi-check');
        if (check) {
            const li = check.closest('li');
            if (li) li.classList.toggle('active');
        }
    });
}