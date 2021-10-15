const Button = document.getElementsByClassName(".btn1");
const Nombre = document.getElementById("name");
const Apellido = document.getElementById("surname");
const Cin = document.getElementById("cin");
const Email = document.getElementById("email");
const Nivel = document.getElementById("level");
const Modulos = document.getElementById("formation");
const Formulario = document.getElementById("form");
const errorElement = document.getElementById("error");

Formulario.addEventListener('submit', (e) => {
    let messages = []
    if (Nombre.value === '' || Nombre.value == null) {
        messages.push(' Name is required')
    }

    if (Apellido.value === '' || Apellido.value == null) {
        messages.push('Surname is required')
    }

    if (Cin.value === '' || Cin.value == null) {
        messages.push('A CIN is required')
    }

    if (Email.value === '' || Email.value == null) {
        messages.push('An email is required')
    }

    if (Cin.value.length < 8) {

        messages.push('CIN must contain 8 digits')

    }

    if (Cin.value.length > 8) {

        messages.push('CIN must contain exactly 8 digits')

    }

    if (Email.inc("@")) {

        messages.push('hniya3lik')

    } else {
        messages.push('haha')
    }


    if (messages.length > 0) {


        errorElement.innerText = messages.join(', ')


    }





});