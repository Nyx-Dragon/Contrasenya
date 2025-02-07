// Obtener referencias a los elementos del DOM
const nombreInput = document.getElementById("usuario");
const contrasenyaInput = document.getElementById("contrasenya");
const parrafo = document.getElementById("texto");
const loginBtn = document.getElementById("login");

// Función principal que valida la contraseña y el nombre
function validarCampos() {
    const contrasenya = contrasenyaInput.value;
    const nombre = nombreInput.value;
    let mensajes = []; // Almacena los mensajes de validación
    let isSecure = true; // Indica si la contraseña es segura

    // Validaciones de la contraseña
    isSecure = validarLongitud(contrasenya, mensajes) && isSecure;
    isSecure = validarMayuscula(contrasenya, mensajes) && isSecure;
    isSecure = validarMinuscula(contrasenya, mensajes) && isSecure;
    isSecure = validarDigito(contrasenya, mensajes) && isSecure;
    isSecure = validarCaracterEspecial(contrasenya, mensajes) && isSecure;
    isSecure = validarEspacios(contrasenya, mensajes) && isSecure;

    // Validar si el nombre está vacío
    if (nombre.trim() === "") {
        mensajes.push("El nombre no puede estar vacío");
        isSecure = false;
    }

    // Mostrar los mensajes de validación
    mostrarMensajes(mensajes, isSecure);

    // Habilitar o deshabilitar el botón de login basado en la seguridad de la contraseña y el nombre
    loginBtn.disabled = !isSecure;
}

// Función para validar la longitud de la contraseña
function validarLongitud(contrasenya, mensajes) {
    if (contrasenya.length < 8) {
        mensajes.push("Esta contraseña es corta");
        return false;
    } else if (contrasenya.length <= 10) {
        mensajes.push("Esta contraseña es media");
        return false;
    } else {
        mensajes.push("Esta contraseña es segura");
        return true;
    }
}

// Función para validar si contiene al menos una letra mayúscula
function validarMayuscula(contrasenya, mensajes) {
    if (!/[A-Z]/.test(contrasenya)) {
        mensajes.push("Debe contener al menos una letra mayúscula");
        return false;
    }
    return true;
}

// Función para validar si contiene al menos una letra minúscula
function validarMinuscula(contrasenya, mensajes) {
    if (!/[a-z]/.test(contrasenya)) {
        mensajes.push("Debe contener al menos una letra minúscula");
        return false;
    }
    return true;
}

// Función para validar si contiene al menos un dígito
function validarDigito(contrasenya, mensajes) {
    if (!/\d/.test(contrasenya)) {
        mensajes.push("Debe contener al menos un dígito");
        return false;
    }
    return true;
}

// Función para validar si contiene al menos un carácter especial
function validarCaracterEspecial(contrasenya, mensajes) {
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(contrasenya)) {
        mensajes.push("Debe contener al menos un carácter especial");
        return false;
    }
    return true;
}

// Función para validar si no contiene espacios en blanco
function validarEspacios(contrasenya, mensajes) {
    if (/\s/.test(contrasenya)) {
        mensajes.push("No debe contener espacios en blanco");
        return false;
    }
    return true;
}

// Función para mostrar los mensajes de validación
function mostrarMensajes(mensajes, isSecure) {
    parrafo.innerHTML = mensajes.join('<br>');
    parrafo.style.color = isSecure ? 'green' : 'red';
}

// Añadir evento 'keyup' al campo de contraseña para validar en tiempo real
contrasenyaInput.addEventListener("keyup", validarCampos);

// Añadir evento 'keyup' al campo de nombre para validar en tiempo real
nombreInput.addEventListener("keyup", validarCampos);

// Añadir evento 'click' al botón de login para mostrar un saludo
loginBtn.addEventListener("click", function() {
    const nombre = nombreInput.value;
    if (nombre) { // Verificar si el nombre no está vacío
        alert(`¡Hola, ${nombre}!`); // Mostrar saludo con el nombre
    } else {
        alert("Por favor, introduce tu nombre.`"); // Solicitar al usuario que introduzca su nombre
    }
});
