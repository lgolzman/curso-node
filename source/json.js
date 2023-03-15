let amigos = ["Juan", "Pedro", "Martin", "Diego"];

let amigosJSON = JSON.stringify(amigos);

console.log(amigosJSON);

let amigosOriginal = JSON.parse(amigosJSON);

console.log(amigosOriginal);

let persona = {
    nombre : "Carlos",
    edad : 26,
    domicilio : "calle pp 239"

}

let personaJSON = JSON.stringify(persona);

console.log(personaJSON);

let personaOrig = JSON.parse(personaJSON);

console.log(personaOrig);