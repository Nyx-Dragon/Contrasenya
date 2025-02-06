const passwordInput = document.getElementById('password');
const message = document.getElementById('message');

passwordInput.addEventListener('input', () => {
    const passwordLength = passwordInput.value.length;
    if (passwordLength < 8) {
        message.textContent = 'Contraseña demasiado corta';
        message.style.color = 'red';
    } else if (passwordLength >= 8 && passwordLength <= 10) {
        message.textContent = 'Contraseña intermedia';
        message.style.color = 'yellow';
    } else {
        message.textContent = 'Contraseña segura';
        message.style.color = 'green';
    }
});
