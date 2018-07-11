function fibonacci(){

    var cantidad = prompt("Cuantas cifras de la serie desea mostrar?");
    var var1 = 0;
    var var2 = 1;
    var var3;

    cantidad = parseInt(cantidad);

    document.write(var1 + "<br>");
    document.write(var2 + "<br>");

    for(var i = 3; i <= cantidad ; i++){

        var3 = var1 + var2;
        var1 = var2;
        var2 = var3;
        document.write(var3 + "<br>");
    }
}
document.write(fibonacci());