// Obtener el input de contraseña y el elemento de mensaje
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');

// Función para actualizar el mensaje según la longitud de la contraseña
function updateMessage() {
    const passwordLength = passwordInput.value.length;

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
}

// Asignar el evento 'keyup' para que actualice el mensaje cuando se escribe en el input
passwordInput.addEventListener('keyup', updateMessage);
