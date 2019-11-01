//armazena
const entrada = document.querySelector('#entrada');
const btn = document.querySelector('#btn');
const saida = document.querySelector('#saida');
console.log(entrada, btn, saida);
//gatilho
btn.addEventListener('click', evento);

//evento

function evento(){
    const num = Number(entrada.value);
    let lista = '';

    for(let contador = 0; contador <= 10; contador ++){
       lista += `${num} X ${contador} = ${num*contador}<br>`;
    }  
    console.log(lista);
    saida.innerHTML = lista;
}