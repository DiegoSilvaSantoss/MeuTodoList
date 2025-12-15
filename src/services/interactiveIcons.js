export default function interactiveIconCheck() {
    const ul = document.querySelector('ul');
    
    if (!ul) return;

    // SE O MAUSE TIVER NO MEU ICONE, ALTERA MEU INPUT
    ul.addEventListener('mouseover', e => {
        const check = e.target.closest('.bi-check');
        if (!check) return;

        const li = check.closest('li');
        if (li) li.classList.add('active-check');
    });

    // SE REMOVER O MAUSE NO MEU ICONE, ALTERA MEU INPUT
    ul.addEventListener('mouseout', e => {
        const check = e.target.closest('.bi-check');
        if (!check) return;

        const li = check.closest('li');
        if (li) li.classList.remove('active-check');
    });


    // SE O MAUSE TIVER NO MEU ICONE, ALTERA MEU INPUT
    ul.addEventListener('mouseover', e => {
        const trash = e.target.closest('.bi-trash3');
        if (!trash) return;

        const li = trash.closest('li');
        if (li) li.classList.add('active-trash');
    });

    // SE REMOVER O MAUSE NO MEU ICONE, ALTERA MEU INPUT
    ul.addEventListener('mouseout', e => {
        const trash = e.target.closest('.bi-trash3');
        if (!trash) return;

        const li = trash.closest('li');
        if (li) li.classList.remove('active-trash');
    });
}
