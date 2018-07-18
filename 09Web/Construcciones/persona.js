//Objeto literal creado con notacion JSON.
//Por dejajo se ejecuta now Object.

persona1={
    nombre: "Javi",
    edad: 25,
    profesion: "informatico",
    saludar: function(){

        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`)
    }
}
persona1.saludar()


//Funciones constructoras y clases.
//Uso de Pascalcase.

function Persona(){

    let persona2 = new Persona()

}