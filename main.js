function getPasswordInput() {
    return document.getElementById('password');
}

function getMessageElement() {
    return document.getElementById('message');
}

function updateMessage() {
    const passwordLength = getPasswordInput().value.length
    const message = getMessageElement();
    if (passwordLength < 8) {
        message.innerHTML = 'Contraseña demasiado corta';
        message.style.color = 'red';
    } else if (passwordLength >= 8 && passwordLength <= 10) {
        message.textContent = 'Contraseña intermedia';
        message.style.color = 'yellow';
    } else {
        message.textContent = 'Contraseña segura';
        message.style.color = 'green';
    }
}

function handlePasswordInput() {
    const passwordInput = getPasswordInput();
    passwordInput.addEventListener('keyup', updateMessage);
}


// Asignar el evento al input de la contraseña
handlePasswordInput();
