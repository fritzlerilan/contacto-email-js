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
    if(e.target.value.length > 0) {
        console.log('si hay algo');
    }else {
        e.target.classList.add('border', 'border-red-500');

        mostrarError();
    }
}

function mostrarError(){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = 'Todos los campos son obligatorios';
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');

    if(!errores.length) {
        formulario.appendChild(mensajeError);
    }

}