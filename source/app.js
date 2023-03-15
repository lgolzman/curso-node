let fs = require('fs');

let heroes = require('./superheroes');

//let moment = require('moment');


let datos = fs.readFileSync(__dirname + "/prueba.txt", "utf-8");

console.log(datos);

//console.log(moment().format('MMM DD YYYY'));

console.log(heroes);
