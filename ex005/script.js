//armazena
const entrada1 = document.querySelector('#entrada-1');
const entrada2 = document.querySelector('#entrada-2');
const btn = document.querySelector('#btn');
const saida = document.querySelector('#saida');
console.log(entrada1, entrada2, btn, saida);
//gatilho
btn.addEventListener('click', evento);

//evento

function evento(){
    const num1 = Number(entrada1.value);
    const num2 = Number(entrada2.value);
    const media = (num1+num2)/2;

    saida.innerText = `
    A primeira nota foi: ${num1}\n
    A segunda nota foi: ${num2}\n
    A média final foi: ${media.toFixed(2)}
    `;

}