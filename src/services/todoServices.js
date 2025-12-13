import { carregarLista, salvarLista } from "../repository/saveList.js";

export default function initForm() {
    const form = document.body.querySelector('form');
    const campoInput = document.body.querySelector('input');
    const ul = document.body.querySelector('ul');


    form.addEventListener('submit', (e) => {
        e.preventDefault();


        const li = document.createElement('li');

        li.innerHTML = `
        ${campoInput.value}
        <span><i class="bi-check"></i></span>
        <span><i class="bi-trash3"></i></span>
        `;

        ul.appendChild(li);

        campoInput.value = "";
        campoInput.focus();
    });
}