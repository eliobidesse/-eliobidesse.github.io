const menu = document.querySelector('.menu');
const navMenu= document.querySelector('.nav-menu')

menu.addEventListener('click',()=> {
    navMenu.classList.toggle('nav-menu_visible')
})

const form = document.querySelector('#form');
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let nombre = document.querySelector('#nombre').value;
    let email = document.querySelector('#email').value;
    let mensaje = document.querySelector('#mensaje').value;
    console.log(nombre,email,mensaje);
    alert('Mensaje enviado. Gracias');

})