//armazena
const entrada = window.document.querySelector('#entrada');
const btn = window.document.querySelector('#btn');
const saida = window.document.querySelector('#saida');
console.log(entrada, btn, saida);
//gatilho
btn.addEventListener('click', evento);

//evento

function evento(){
    let num = Number(entrada.value);
    saida.innerText = `
    Você digitou ${num}\n
    O dobro de ${num} vale ${num * 2}\n
    O triplo de ${num} vale ${num * 3}\n
    A raíz quadrada de ${num} é ${Math.sqrt(num, 2)}\n
    `;
}