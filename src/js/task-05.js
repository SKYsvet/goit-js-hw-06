const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', inputChange);
function inputChange(inputText) {
    outputRef.textContent =
        inputText.currentTarget.value.trim();
    if (inputText.currentTarget.value.trim() === '') {
       return outputRef.textContent = 'Anonymous';
    }
}