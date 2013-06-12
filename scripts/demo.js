/**
 * @author adam-lynch
 */
var abbreviationField = document.getElementById('abbreviation'),
    resultContainer = document.getElementById('result-container'),
    resultField = document.getElementById('result'),
    nameField = document.getElementById('name'),
    resultElement = document.getElementById('result-element');

document.getElementsByTagName('form')[0].addEventListener('submit', function(e){
    e.preventDefault();

    resultField.value = emmetsMustache.render(abbreviationField.value, {name:  nameField.value});
    resultContainer.className = '';
});

document.getElementById('insert').addEventListener('click', function(){
    resultElement.innerHTML = resultField.value;
});