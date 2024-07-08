let listaNumerosSorteados=[];
let numeroMaximo=10;
let numeroSecreto = generarNumeroSecreto();
let intentos=1;

function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos==1)? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acierta
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor');
        }else{
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.getElementById('valorUsuario').value='';
}
function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('P','YA SE SORTEARON TODOS LOS NUMEROS');
    }else{
        //si el numero generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}
function condicionesIniciales() {
    asignarTextoElemento('h1',"JUEGO DEL NUMERO SECRETO");
    asignarTextoElemento('P',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //mensaje de inicio
    //generar el numero aleatorio
    //inicializar intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
/*
EJERCICIOS ADICIONALES
function holaMundo(){
    console.log("hola mundo");
}
function nombre(nom) {
    console.log(`hola ${nom}`);    
}
function dobleNumero(num){
    console.log(parseFloat(num^2))
}
function promedio(num1,num2,num3){
    console.log(parseFloat((num1+num2+num3)/3))
}
function mayor(num1,num2){
    if(num1>num2){
        console.log(`el numero ${num1} es mayor que el numero ${num2}`);
    }else{
        if(num2>num1){
            console.log(`el numero ${num2} es mayor que el numero ${num1}`);
        }else{
            console.log('los numeros son iguales');
        }
    }
}
function multiplicacion(num) {
    console.log(parseFloat(num*num));
}
holaMundo();
nombre('lesly');
dobleNumero(2);
promedio(9,9,10);
mayor(2,3);
multiplicacion(3);
metros=parseFloat(prompt("ingrese cuanto mide en metros"));
peso=parseFloat(prompt("ingrese su peso en kg"));
function IMC(metros, peso) {
    resultado=parseFloat((peso/(metros*metros)));  
    return console.log(resultado);
}
IMC(metros,peso);
function factorial(num) {
    if(num==0 || num==1){
        return 1;
    }else{
        return num*factorial(num-1);
    }
}
let num=5;
let resultado= factorial(num);
console.log(`el factorial de ${num} es ${resultado}`);
function dolares(pesos) {
    resultado=parseFloat(pesos/18.11);
    return resultado;
}
let pesos=200;
res=dolares(pesos);
console.log(res);*/