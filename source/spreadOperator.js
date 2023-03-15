let peliculasAccion = ["End Game", "Iron Man", "Capitan America"];
let peliculasComedia = ["Mi Pobre Angelito", "Que pasó ayer",];

let peliculas = [...peliculasAccion, ...peliculasComedia]

console.log(peliculas);



let generoComedias = {
genero : "Comedia",
popularidad : 3 
}

let miPobreAngelito = {
    nombre : "Mi pobre Angelito",
    duracion : 120,
    ...generoComedias
}

let quePasoAyer = {
    nombre : "Que paso ayer",
    duracion : 115,
    ...generoComedias
}

//console.log(miPobreAngelito);

function peliculasVistas(...nombresDePeliculas) {
    for(let i = 0; i > nombresDePeliculas.length; i++){
        console.log(nombresDePeliculas[i].nombre);
    }
    

}

peliculasVistas("End Game", "Iron Man", "Mi pobre angelito");



