const sizeInput = document.querySelector('#font-size-control');
const sizeSpan = document.querySelector('#text');

sizeInput.addEventListener('input', handleInputChange);

function handleInputChange(event) {
    console.log(event);
     sizeSpan.style.fontSize = event.currentTarget.value + "px";
    
}
