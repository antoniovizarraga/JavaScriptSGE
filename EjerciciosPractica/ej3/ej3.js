window.onload = inicioEventos;

function inicioEventos() {
    document.getElementById("cars").addEventListener("change", saludar)
}

function saludar() {

    const audi = ["A4 Sedan", "A3 Sportback", "A6 Cabriolet", "TT Coupé"]
    const citroen = ["C3 Aircross", "C5 X", "Citroën C5 X", "Citroën C4"]
    const skoda = ["Octavia", "Superb", "Kodiaq", "Kamiq", "Enyaq iV"];
    const opel = ["Corsa", "Astra", "Mokka", "Grandland", "Crossland"];

    var listado = document.getElementById("listado")

    var elementoSeleccionado = document.getElementById("cars").value.toLowerCase();


    listado.innerHTML = ""
    

    switch(elementoSeleccionado) {
        case "audi":
            audi.forEach(rellenarListado);
            break;
        case "citroen":
            citroen.forEach(rellenarListado)
            break;
        case "skoda":
            skoda.forEach(rellenarListado)
            break;
        case "opel":
            opel.forEach(rellenarListado)
            break;
    }


    //alert(elementoSeleccionado)

}

function rellenarListado(coche) {
    var listado = document.getElementById("listado")

    let elemento = document.createElement("li")

    elemento.innerText = coche

    listado.appendChild(elemento)

}