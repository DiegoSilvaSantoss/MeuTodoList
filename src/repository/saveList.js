// SALVAR E CARREGAR NO LOCALSTORAGE

export function carregarLista() {
  return JSON.parse(localStorage.getItem('lista')) || [];
}

export function salvarLista(lista) {
  localStorage.setItem('lista', JSON.stringify(lista));
}