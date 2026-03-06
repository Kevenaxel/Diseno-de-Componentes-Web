const inputNombre = document.getElementById('nombreUsuario');
const botonSaludar = document.getElementById('btnSaludar');
const mensajeSaludo = document.getElementById('mensaje')

botonSaludar.addEventListener('click', () =>{
    const nombre = inputNombre.value;

    if (nombre.trim() !== ''){
        mensajeSaludo.textContent = `Hola ${nombre} Ejercicio DOM 1`;

        inputNombre.value = '';
    }else{
        mensajeSaludo.textContent = "Coloque en un nombre correcto!!"
        inputNombre.value = '';
    }
}) /*Cuando el presione el boton saludar llamara el elemento escuchar*/

const formulario = document.getElementById('formSuscripcion')
const inputCorreo = document.getElementById('correoUsuario')
const mensajeExito = document.getElementById('mensajeEnviado')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    const correo = inputCorreo.value;
    mensajeExito.textContent = `Gracias, hemos registrado su correo, ${correo}`;

    formulario.reset();
})