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

    function capitalize(str) {
       return `${str[0].toUpperCase()}${str.substr(1)}`;
    }

    resultText.innerHTML = capitalize(resultLower);
    resultTitle.innerHTML = 'minúsculas';  
})

maiuscula.addEventListener('click', () => {
    resultText.innerHTML = input.value.toUpperCase();
    resultTitle.innerHTML = 'maiúsculas'; 
})