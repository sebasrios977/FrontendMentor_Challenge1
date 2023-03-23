(function() {
    const navegacion = document.querySelector('.nav');
    const botonCerrar = document.querySelector('.close_menu');
    const botonMenu = document.querySelector('.btn_menu');
    const backMenu = document.querySelector('.back_menu');

    addEventListener('DOMContentLoaded', estadoInicial);
    botonCerrar.addEventListener('click', cerrarMenu);
    botonMenu.addEventListener('click', mostrarMenu);
    backMenu.addEventListener('click', cerrarMenu);

    function estadoInicial() {
        backMenu.style.display = 'none';
    }

    function cerrarMenu() {
        navegacion.style.right = '-50%';
        backMenu.style.display = 'none';
    }

    function mostrarMenu() {
        navegacion.style.right = '0px';
        backMenu.style.display = 'block';
    }
})();