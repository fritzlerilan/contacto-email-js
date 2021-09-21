// Variables
const btnEnviar = document.querySelector('#enviar');
const campoEmail = document.querySelector('#email');
const campoAsunto = document.querySelector('#asunto');
const campoMensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail');


eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);


    // Campos del formulario
    campoEmail.addEventListener('blur', validarFormulario);
    campoAsunto.addEventListener('blur', validarFormulario);
    campoMensaje.addEventListener('blur', validarFormulario);
}

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e) {

    const error = document.querySelector('p.error');

    //Elimina errores
    if (error) {
        error.remove();
    }

    if (e.target.value.length > 0) {

        e.target.classList.remove('border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        e.target.classList.remove('border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }

    if (e.target.type === 'email') {
        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


        if (er.test(e.target.value)) {
            e.target.classList.remove('border-red-500');
            e.target.classList.add('border', 'border-green-500');
            console.log('Email valido');
        } else {
            e.target.classList.remove('border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('Email no válido');
        }
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');

    if (!errores.length) {
        formulario.appendChild(mensajeError);
    }

}