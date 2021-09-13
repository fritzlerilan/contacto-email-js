// Variables
const btnEnviar = document.querySelector('#enviar');
const campoEmail = document.querySelector('#email');
const campoAsunto = document.querySelector('#asunto');
const campoMensaje = document.querySelector('#mensaje');

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
    }
}