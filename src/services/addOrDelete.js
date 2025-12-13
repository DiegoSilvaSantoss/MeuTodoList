
export default function addOrDelete() {
    const ul = document.querySelector('ul');
    

    //CLICK NA LISTA
    ul.addEventListener('click', e => {

        // Apagar
        if (e.target.classList.contains('bi-trash3')) {
            e.target.closest('li').remove();
        }

        // Marcar como feito
        if (e.target.classList.contains('bi-check')) {
            const li = e.target.closest('li');
            li.classList.add('active');
        }
    });
}