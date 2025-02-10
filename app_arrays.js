let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
        elementoHTML.innerHTML= texto;  
        return;
}

function verificarIntento() {
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);/*tiene que ir dentro de la funcion que queremos contar intentos*/
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste al número secreto en ${intentos} ${(intentos===1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
        return;
}
  
function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sorteraon todos los numeros posibles');

    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function condicionesIniciales() {
    asignarTextoElemento('h1', 'Number Secret Game');
    asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute('disabled','true');
}

condicionesIniciales();
