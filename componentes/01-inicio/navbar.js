const fondo = document.getElementById('fondo-navbar');

window.addEventListener('scroll',() => {
    if (window.scrollY > 100) {
        fondo.style.maxHeight = '80px';
    } else if (window.scrollY <= 100) {
        fondo.style.removeProperty('max-height');
    }
});
