class App {
    constructor () {
        this.btnAceptar = ''
        setTimeout(this.addInfoEnMedio.bind(this),2000)
    }

    addInfo () {
        let nodoElement = document.createElement('p')
        let nodoTexto = document.createTextNode('Este sitio utiliza cookies')
        nodoElement.appendChild(nodoTexto)

        document.body.appendChild(nodoElement)
    }

    addInfoModerno() {
        document.body.innerHTML += `
        <div class="aviso">
            <p>Este sitio utiliza cookies</p>
            <button type="button" id="btnAceptar">Aceptar</button>
        </div>`

        this.addBoton()
    }

    addInfoEnMedio() {
        document.querySelector('#desaparecere').innerHTML = `
        <div class="aviso">
            <p>Este sitio utiliza cookies</p>
            <button type="button" id="btnAceptar">Aceptar</button>
        </div>`

        this.addBoton()
    }

    addBoton() {
        this.btnAceptar = document.querySelector('#btnAceptar')
        this.btnAceptar.addEventListener('click', () => {
            let nodo = document.querySelector('.aviso')
            nodo.parentNode.removeChild(nodo)
        })
    }
}

document.addEventListener('DOMContentLoaded', 
    () => { new App () })