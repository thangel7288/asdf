const body = document.body;
const formulario = document.querySelector('#formulario');
const nombre = document.getElementById('nombre');
const apellido = document.querySelector('#apellido');
const telefono = document.querySelector('#telefono');
const documento = document.querySelector('#documento');
const usuario = document.querySelector('#usuario');
const contraseña = document.querySelector('#contraseña');
const btn = document.querySelector('button');
const combos = document.querySelector('combo');

const ciudades = async () => {
  const data = await fetch('data.json');
  const ciudades = data.json();
console.log(ciudades);

}

const validar = (event) => {
    event.preventDefault();
    if (nombre.value == '') {
        alert("el nombre es obligatorio");
nombre.focus();
        
    }
    
}

ciudades();
// const keydown = (event) => {
//     console.log(event);
// }
// const keyup = (event) => {
    
//     console.log(event);
// }

// const contextmenu = () =>{
//     alert('?')
// }
// const dbclick = () => {
//     alert('doble click');
// }
btn.addEventListener('click', validar);

// btn.addEventListener('keydown', keydown);
// btn.addEventListener('keyup', keyup);
// const mousedown = () =>{
//     alert("el evento funciona cuando se presiona cualquier boton sobre el elemento");
// }

// btn.removeEventListener('click', validar);
// body.addEventListener('click', validar);

// body.addEventListener('mousedown', mousedown);
// const input = document.querySelector('input');
// const consena = document.querySelector('input[type="password"]');
// const formulario = document.querySelector('form');
// const button_validar = document.querySelector('button');

// console.log(consena);
// console.log(input);
// console.log(input.type);
// console.log(input.value);
// console.log(input.placeholder);
// input.value = "jhon freddy"

// const btn = document.createElement('a');
// btn.textContent = 'login';
// btn.classList.add('btn');
// btn.setAttribute('title', 'ir al login');
// btn.setAttribute('disabled', '');
// formulario.append(btn);
// const validar = (event) =>{
//     event.preventDefault()
//     if (consena.value === '123') {
//         formulario.submit()
        
//     }else{
//         alert("datos no validos")
//     }
// }
// btn_validar.addEventListener('click', validar);

