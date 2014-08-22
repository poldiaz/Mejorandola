var peso;
var pesoEnMarte; // CamelCase

alert ("¿Quieres saber tu peso en Marte?");
peso = prompt("¿Cuál es tu peso?", "100");
peso = parseInt(peso);

pesoEnMarte = (peso / 9.81) *3.711;

alert( "Tu peso en Marte es:" + " " + pesoEnMarte + " " + "Kg" );

//alerta: Función
// () : Parámetros de la Función
// "" : Cadenas de texto
// var nombre = "Freddy";
// var apellido = "Vega";
// var edad = 28;

//alert(nombre + " " + apellido +  "\n" + edad + " años.");
