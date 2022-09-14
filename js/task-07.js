const font = document.querySelector('#font-size-control');
const fontText = document.querySelector('#text');
fontText.style.fontSize = `${font.value}px`;
const changeText = () => {
    
    fontText.style.fontSize = ` ${event.target.value}px`;
}
font.addEventListener('input', changeText);

