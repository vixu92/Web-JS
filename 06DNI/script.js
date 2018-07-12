function dni(){

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
var dni = prompt("Introduce tu numero de DNI");
var i;
i = dni % 23;

document.write("Tu DNI completo es: " + dni + letras[i]);
}