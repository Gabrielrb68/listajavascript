function adicionarItem() {
    const novoItem = itemInput.value;
    if (novoItem) {
      const itemLi = document.createElement('li');
      itemLi.textContent = novoItem;
      itemLista.appendChild(itemLi);
    }
  }
   const itemInput = document.querySelector('#itemInput');
    const itemLista = document.querySelector('#itemLista');

