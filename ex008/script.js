//armazena
const btn = document.querySelector('#btn');
const entrada = document.querySelector('#entrada');
const saida = document.querySelector('#saida');
const textoSaida = document.querySelector('#texto-saida');

//gatilho
btn.addEventListener('click', evento);

//evento

function evento(){
    window.alert(entrada.value);
}