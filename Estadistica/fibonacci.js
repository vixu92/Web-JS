function fibonacci(numero){

    var cantidad = prompt("Cuantas cifras de la serie desea mostrar?");
    var var1 = 0;
    var var2 = 1;
    var var3;

cantidad = parseInt(cantidad);

    document.write(var1 + "");
    document.write(var2 + "");

    for(var i = 3; i <= numero ; i++)
    {
        var3 = var1 + var2;
        var1 = var2;
        var2 = var3;
        document.write(var3 + "");
    }
}
 
document.write(fibonacci(numero));