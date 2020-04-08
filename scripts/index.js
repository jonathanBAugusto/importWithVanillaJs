function importar(path = '') {
    let elemento = document.createElement('script');
    elemento.src = path;
    document.head.appendChild(arquivo);
}

importar('scripts/teste/index.js');
importar('scripts/utils/common.js');
