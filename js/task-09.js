function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  colorBtn: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
  body: document.querySelector('body'),
}
ref.colorBtn.addEventListener('click', colorBtnClick);

function colorBtnClick() {
  const currentColor = getRandomHexColor();
  ref.color.textContent = currentColor;
  ref.body.style.backgroundColor = currentColor;
}


