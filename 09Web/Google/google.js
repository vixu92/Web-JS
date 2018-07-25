class App {
    constructor() {
        this.query = document.querySelector('#query')
        this.btnBuscar = document.querySelector('#btnBuscar')
    
        this.btnBuscar.addEventListener('click', () => {
            console.log(this)
            let clave = this.query.value
            const url = 'https://www.google.es/search?q='
            if (clave) {
                location.href = url + clave
            }
        } )
    }
}
document.addEventListener('DOMContentLoaded', 
    () => {new App()})