/**
 * #formulario - container do form
 * #qtd - quantidade de alunos
 * 
 */

//armazena
const qtd = document.querySelector('#qtd');
const btnQtd = document.querySelector('#btn-qtd');
const formulario = document.querySelector('#formulario');
const saida = document.querySelector('#saida');

//gatilho
btnQtd.addEventListener('click', armazenar);

//evento

function armazenar(){
    window.document.alert(Number(qtd.value));
}