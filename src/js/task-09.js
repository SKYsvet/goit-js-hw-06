
const refs = {
  changeBody: document.querySelector('body'),
  changeBtn: document.querySelector('.change-color'),
  changeSpan: document.querySelector('.color'),
};

refs.changeBtn.addEventListener('click', handleColorChange);

function handleColorChange(color) {
  refs.changeSpan.textContent = getRandomHexColor();
  refs.changeBody.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
