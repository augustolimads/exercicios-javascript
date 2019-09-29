const botao = window.document.querySelector('#button');
botao.addEventListener('click', evento);

function evento(){
    //formulario
    let textoEntrada = window.document.querySelector('#entrada').value;
    
    //saida
    let textoSaida = window.document.querySelector('#saida');
    textoSaida.innerText = `Olá, ${textoEntrada}!`;
}