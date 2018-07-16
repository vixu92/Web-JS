function app(){

var botonSaludo = document.querySelector("#botonSaludo");
var botonDespido = document.querySelector("#botonDespido");
var botonBorrar = document.querySelector("#botonBorrar");

botonSaludo.addEventListener('click' , saludar);
botonDespido.addEventListener('click' , despedir);
botonBorrar.addEventListener('click' , borrar);

function saludar(){

    var oNombre = document.querySelector("#nombre").value;
    var parrafoSaludo = document.querySelector("#parrafoSaludo");
    
    parrafoSaludo.innerHTML = "Hola " + oNombre;
}

function despedir(){
    
    var oNombre = document.querySelector("#nombre").value;
    var parrafoSaludo = document.querySelector("#parrafoSaludo");
    
    parrafoSaludo.innerHTML = "Adios " + oNombre;
}

function borrar(){

    var parrafoSaludo = document.querySelector("#parrafoSaludo"); parrafoSaludo.innerHTML = "";
}
}

document.addEventListener('DOMContentLoaded', app);