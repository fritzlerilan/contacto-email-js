// Variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const campoEmail = document.querySelector('#email');
const campoAsunto = document.querySelector('#asunto');
const campoMensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail');

const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);


    // Campos del formulario
    campoEmail.addEventListener('blur', validarFormulario);
    campoAsunto.addEventListener('blur', validarFormulario);
    campoMensaje.addEventListener('blur', validarFormulario);

    // Enviar email
    formulario.addEventListener('submit', enviarEmail);

    // Reinicia el formulario 
    btnReset.addEventListener('click', limpiarFormulario);
}

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e) {

    if (e.target.value.length > 0) {
        const error = document.querySelector('p.error');
        if (error) {
            error.remove();
        }
        e.target.classList.remove('border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        e.target.classList.remove('border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }

    if (e.target.type === 'email') {


        if (email_regex.test(e.target.value)) {
            const error = document.querySelector('p.error');
            if (error) {
                error.remove();
            }
            e.target.classList.remove('border-red-500');
            e.target.classList.add('border', 'border-green-500');
            console.log('Email valido');
        } else {
            e.target.classList.remove('border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('Email no válido');
        }
    }
    if (email_regex.test(campoEmail.value) && campoAsunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    } else {
        iniciarApp();
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

function enviarEmail(e) {
    e.preventDefault();
    // Mostrar spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    // Despues de 3 segundos ocultar el spinner y mostrar el mensaje
    setTimeout(() => {
        spinner.style.display = 'none';
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envio correctamente';
        parrafo.classList.add('text-center', 'mt-10', 'p-5', 'bg-green-500', 'text-white', 'uppercase', 'mb-10');
        formulario.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove();
            limpiarFormulario();
            iniciarApp();
        }, 5000);
    }, 3000);
}

function limpiarFormulario() {
    formulario.reset();
}