export default function interactiveIconCheck() {
    const ul = document.querySelector('ul');
    
    if (!ul) return;

    ul.addEventListener('mouseover', e => {
        const check = e.target.closest('.bi-check');
        if (!check) return;

        const li = check.closest('li');
        if (li) li.classList.add('active-check');
    });

    ul.addEventListener('mouseout', e => {
        const check = e.target.closest('.bi-check');
        if (!check) return;

        const li = check.closest('li');
        if (li) li.classList.remove('active-check');
    });



    ul.addEventListener('mouseover', e => {
        const trash = e.target.closest('.bi-trash3');
        if (!trash) return;

        const li = trash.closest('li');
        if (li) li.classList.add('active-trash');
    });

    ul.addEventListener('mouseout', e => {
        const trash = e.target.closest('.bi-trash3');
        if (!trash) return;

        const li = trash.closest('li');
        if (li) li.classList.remove('active-trash');
    });
}
