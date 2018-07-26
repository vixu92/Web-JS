class App{

    constructor(){

        let nodo1 = document.querySelector('div p')
        console.dir(nodo1);
        let nodo2 = document.querySelector('.importante')
        console.dir(nodo2);
        let nodo3 = document.querySelector('#p1')
        console.dir(nodo3);
        let aNodos = document.querySelectorAll('p')
        console.dir(aNodos);

     /*   aNodos.forEach(
            (node) => {

                node.innerHTML = 'Hola, que tal?';
            }
        )*/
        console.info('getElement...')
        console.dir(document.getElementById('p1'))
        console.dir(document.getElementsByTagName('p'))
        console.dir(document.getElementsByClassName('p'))
        console.dir(document.getElementsByName('nombre'))

        let nodoMenu = document.querySelector('#main-menu')
        console.dir(nodoMenu)
        console.dir(document.querySelectorAll('li'))
        console.dir(nodoMenu.querySelector('li'))

        console.dir(nodoMenu.childNodes) //NodeList
        console.dir(nodoMenu.children) //HTML Collection
        console.dir(nodoMenu.children[0].children[0]) 
        nodoMenu.children[0].children[0].style.color = "green"
        nodoMenu.children[0].children[1].style.color = "blue"
        nodoMenu.children[0].children[2].style.color = "red"
        nodoMenu.children[0].children[3].style.color = "yellow"
        nodoMenu.children[0].children[4].style.color = "purple"
    }
}
document.addEventListener('DOMContentLoaded', 
() => {new App()})