let o ={
    nombre: "Pepe",
    mostrar: function(){

        console.log(this);
    }
}

o.mostrar();

function CosaRara(){

    console.log(this);
}
new CosaRara()
