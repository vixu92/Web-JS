/*let o ={
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
*/

function Factura(empresa, total){

    this.empresa = empresa;
    this.total = total;
} 
 Factura.prototype.mostrar = function(){

        console.log(this)
    }

let f1 = new Factura("Boracay", 200);
f1.concepto = 'Libros'
let f2 = new Factura("Ghoogle", 3000);

f1.mostrar();
f2.mostrar();