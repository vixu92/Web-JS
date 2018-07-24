import * as x from './node_modules/js-cookie/src/js.cookie.js'

let numeroVisitas =  Cookies.get('NumeroVisitas');

if(numeroVisitas){

    // Existe la cookie NumVisitas
    Cookies.set('NumeroVisitas', ++numeroVisitas);
    console.log('Visita número', numeroVisitas);

}else{

    // No existe la cookie NumVisitas
    Cookies.set('NumeroVisitas', 1);
}
