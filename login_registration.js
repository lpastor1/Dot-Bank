const ojosMostrar = document.getElementsByName('mostrar-pass');
const ojosOcultar = document.getElementsByName('ocultar-pass');
const passwords = document.getElementsByName('password');

passwords.forEach((password) => {
    password.onkeyup = (e) => {
        e.target.nextElementSibling.classList.remove('invisible');
        password.onkeyup = null;
    }
});

[...ojosMostrar, ...ojosOcultar].forEach((ojo) => {
    ojo.addEventListener('click', passShowHide);
    ojo.addEventListener('click', passShowHide);
})

function passShowHide(e) {
    e.target.classList.toggle('invisible');
    if(e.target.classList.contains('bi-eye-fill')) {
        e.target.nextElementSibling.classList.toggle('invisible');
        e.target.previousElementSibling.setAttribute('type', 'text');
    } else {
        e.target.previousElementSibling.classList.toggle('invisible');
        e.target.previousElementSibling.previousElementSibling.setAttribute('type', 'password');
    }
}

const formRegister = document.querySelector('#register');
formRegister.addEventListener('submit', () => {
    console.log('hola')
    const password1 = document.getElementById('register-password-1').value;
    const password2 = document.getElementById('register-password-2').value;
    if (password1 !== password2) {
        alert('Las contraseñas no coinciden');
    }
})