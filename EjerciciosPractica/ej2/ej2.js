class Persona {
    constructor(nombre, apellidos) {
        this.nombre = nombre
        this.apellidos = apellidos
    }
}

window.onload = inicioEventos;

function inicioEventos() {
    document.getElementById("btnEnviar").addEventListener("click", saludar)
}

function saludar() {

    campoNombre = document.getElementById("fname")
    campoApellidos = document.getElementById("lname")

    textoNombre = document.getElementById("textNombre")
    textoApellidos = document.getElementById("textApellidos")


    var persona = new Persona(campoNombre.value, campoApellidos.value)

    textoNombre.innerText = "Nombre: " + persona.nombre
    textoApellidos.innerText = "Apellidos: " + persona.apellidos

    //alert("Nombre: " + persona.nombre + "\n" + "Apellidos: " + persona.apellidos)
}