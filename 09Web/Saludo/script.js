function app(){

var botonSaludo = document.querySelector("#botonSaludo");
var botonDespido = document.querySelector("#botonDespido");
var botonBorrar = document.querySelector("#botonBorrar");

botonSaludo.addEventListener('click' , saludar);
botonDespido.addEventListener('click' , saludar);
botonBorrar.addEventListener('click' , saludar);

function saludar(evento){

    var oNombre = document.querySelector("#nombre").value;
    var parrafoSaludo = document.querySelector("#parrafoSaludo");

    if (evento.target.id === 'botonSaludo'){
        
        parrafoSaludo.innerHTML = "Hola " + oNombre;
    }
    else if(evento.target.id === 'botonDespido'){

        parrafoSaludo.innerHTML = "Adios " + oNombre;
    }
    else{

        parrafoSaludo.innerHTML = "";
    }
    }
}
document.addEventListener('DOMContentLoaded', app);
