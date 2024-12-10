window.onload = inicioEventos;

function inicioEventos() {
    document.getElementById("btnSaludo").addEventListener("click", saludar)
}

function saludar() {
    document.getElementById("holaMundo").innerText = "Hola mundo"
}