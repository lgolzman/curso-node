let laMitad = numero => numero / 2;

console.log(laMitad(8));

let tengoQueTrabajar = dia => {
    if(dia=='Sabado' || dia=='Domingo') {
        return "No tengo que trabajar";
    } else {
        return 'Tengo que trabajar';
    }
}

console.log(tengoQueTrabajar('Lunes'));