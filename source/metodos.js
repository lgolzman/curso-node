let notas = [10, 4, 5, 8, 9, 2, 7];

let notasHastaEl100 = notas.map(function(numero) {
    return numero * 10;
});


let notasAprobadas = notas.filter(function(numero){
    return numero >= 7;
});

let sumaNotas = notas.reduce(function(estado, numero){
    return estado + numero;
});

notas.forEach(function(valor, indice){
    console.log(indice);
    console.log(valor);
});