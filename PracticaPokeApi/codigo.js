function pedirDatos() {

    let contador = 1
    let pokemon = "https://pokeapi.co/api/v2/pokemon"

    let miLlamada = new XMLHttpRequest();

    miLlamada.open("GET", pokemon);

    //Definicion estados

    miLlamada.onreadystatechange = function () {

        if (miLlamada.readyState < 4) {

        //aquí se puede poner una imagen de un reloj o un texto “Cargando”

        } else if (miLlamada.readyState == 4 && miLlamada.status == 200) {

            let arrayPokemons = JSON.parse(miLlamada.responseText);
            
            //losPokemon(arrayPokemons);
            alert(arrayPokemons.results[17].name);

        }

    };

    miLlamada.send();

}