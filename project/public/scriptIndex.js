// document.getElementById("inputForm").disabled = true;
// document.getElementById('buttonForm').disabled = true; 
// document.getElementById('inputEmail').disabled = true; 
let inputsForm = document.querySelectorAll('input[type="text"]')
document.getElementById('buttonForm').disabled = true;
document.getElementById('textareaForm').disabled = true; 
for (let i = 0; i < inputsForm.length; i++){
    inputsForm[i].disabled = true; 
}