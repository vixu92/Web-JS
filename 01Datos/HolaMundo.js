//var saludo = "Hola Mundo"

//console.log(saludo);

function mueveReloj(){ 
    momentoActual = new Date() 
    hora = momentoActual.getHours() 
    minuto = momentoActual.getMinutes() 
    segundo = momentoActual.getSeconds() 

    document.getElementById("reloj").innerHTML = (hora + " : " + minuto + " : " + segundo);

    setTimeout("mueveReloj()",1000) 
} 

mueveReloj()
