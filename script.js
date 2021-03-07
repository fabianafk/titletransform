/* 

fundo noite
background-image: url(img/night.png);

fundo tarde
background-image: url(img/afternoon.jpg);
background-size: 1920px 970px;
*/

var input = document.querySelector('.input-titulo')
var resultText = document.querySelector('.result-text')
var minuscula = document.querySelector('#min-btn')
var maiuscula = document.querySelector('#mai-btn')
var resultTitle = document.querySelector('.result-title')

minuscula.addEventListener('click', () => {
    var resultLower = input.value.toLowerCase();
    resultText.innerHTML = resultLower;
    resultTitle.innerHTML = 'minúsculas';
})

maiuscula.addEventListener('click', () => {
    var resultUpper = input.value.toUpperCase();
    resultText.innerHTML = resultUpper;
    resultTitle.innerHTML = 'maiúsculas';
})