//pega todos os elementos
let numA = window.document.querySelector('#numA');
let numB = window.document.querySelector('#numB');
let btn = window.document.querySelector('#btn');
let saida = window.document.querySelector('#saida');

//snipper
btn.addEventListener('click', evento);

//evento
function evento(){
    a = Number(numA.value);
    b = Number(numB.value);
    saida.innerText = a + b;
}