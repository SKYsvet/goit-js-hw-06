const inputRef = document.querySelector('#validation-input');
const inputLength = inputRef.dataset.length;

inputRef.addEventListener('blur', onFocusInput);

function onFocusInput(e) {
    const textLength = e.target.value;

    if (textLength.length >= +inputLength) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
};