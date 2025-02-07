// Obtener el input de contraseña y el elemento de mensaje
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');

// Función para actualizar el mensaje según la longitud y tipos de caracteres de la contraseña y otros criterios
function updateMessage() {
    const password = passwordInput.value;
    const passwordLength = password.length;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNoWhitespace = !/\s/.test(password);

    if (passwordLength < 8) {
        message.innerHTML = 'Contraseña demasiado corta';
        message.style.color = 'red';
    } else if (passwordLength >= 8 && passwordLength <= 10) {
        message.innerHTML = 'Contraseña intermedia';
        message.style.color = 'yellow';
    } else {
        message.innerHTML = 'Contraseña segura';
        message.style.color = 'green';
    }

    if (!hasUpperCase) {
        message.innerHTML += '<br>Debe contener al menos una letra mayúscula';
        message.style.color = 'red';
    }

    if (!hasLowerCase) {
        message.innerHTML += '<br>Debe contener al menos una letra minúscula';
        message.style.color = 'red';
    }

    if (!hasDigit) {
        message.innerHTML += '<br>Debe contener al menos un dígito';
        message.style.color = 'red';
    }

    if (!hasSpecialChar) {
        message.innerHTML += '<br>Debe contener al menos un carácter especial';
        message.style.color = 'red';
    }

    if (!hasNoWhitespace) {
        message.innerHTML += '<br>No debe contener espacios en blanco';
        message.style.color = 'red';
    }
}

// Asignar el evento 'keyup' para que actualice el mensaje cuando se escribe en el input
passwordInput.addEventListener('keyup', updateMessage);
