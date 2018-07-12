function esPalindromo(){
     var reversoPalabra = "";
    var palabra = prompt("Introduce una cadena de texto para comprobar si es un palindromo");
    palabra = palabra.toLowerCase();

    while(palabra.indexOf(" ") != -1){ 
        palabra = palabra.replace(" ", ""); 
    } 

    reversoPalabra = palabra.join('').split(' ')
        document.write(reversoPalabra);
}      

    /*  palabra = palabra
        var reversoPalabra = palabra.split('|'); 

    var  = .join('|');
    reversoPalabra = reversoPalabra.reverse()
     */

