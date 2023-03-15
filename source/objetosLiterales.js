let curso = {
    cantidadDeAlumnos : 32,
    docentes : ["Nacho", "Javier"],
    horario : "de 19 a 21",
    notificaciones : function() {
        return "El horario de la cursada es " + this.horario;
    }
}


//console.log(curso);

//console.log(curso.cantidadDeAlumnos);

//console.log(curso.notificaciones());

function Curso(cantidadDeAlumnos, docentes, horario) {
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario;

}

let cursoDeProgramacion = new Curso(50,["Juan", "Diego"], "de 18 a 20 hs");

console.log(cursoDeProgramacion);


