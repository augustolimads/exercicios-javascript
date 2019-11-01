/**
 * #formulario - container do form
 * #qtd - quantidade de alunos
 * 
 */

//armazena
const qtd = document.querySelector('#qtd');
const btnArmazenar = document.querySelector('#armazenar');
const formulario = document.querySelector('#formulario'); //n sei pra q
const listaNomes = document.querySelector('#lista-nomes');
const nome = document.querySelector('#nome');
const btnSortear = document.querySelector('#sortear');
const saida = document.querySelector('#saida');

//gatilho
btnArmazenar.addEventListener('click', armazenar);
btnSortear.addEventListener('click', sortear)
//evento

function armazenar(){
    window.alert(Number(qtd.value));
    let nomeLabel;
    let nomeInput;
    if(qtd.value > 1){
        nomeLabel = document.createElement('label');
        nomeINput = document.createElement('input');
        nomeLabel.setAttribute('class', 'form-control form-item form-control-sm');
        nomeLabel.setAttribute('type', 'text');
        nomeLabel.setAttribute('id', 'nome');
        listaNomes.appendChild(nomeLabel);

    }
}

function sortear(){
    window.alert(String(nome.value));
}