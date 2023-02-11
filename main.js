let nombreAlumnoNuevo = prompt("Ingrese su nombre alumno");
console.log(nombreAlumnoNuevo)
let notaUno = parseFloat (prompt("Ingrese su primer nota"));
let notaDos = parseFloat (prompt("Ingrese su segunda nota"));
let notaTres = parseFloat (prompt("Ingrese su tercera nota"));
let promedio = (notaUno + notaDos + notaTres)/3;
console.log (promedio)
let resultado = (nombreAlumnoNuevo + " tu promedio es de " + promedio);
alert (resultado);