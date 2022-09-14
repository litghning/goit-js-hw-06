const elementsBtn = document.querySelector("#counter");
const decrementBtn = elementsBtn.firstElementChild;
const incrementBtn = elementsBtn.lastElementChild;
const counterValue = document.querySelector("#value");
let counter = 0;
decrementBtn.addEventListener("click", () => {
    counter -= 1;
    counterValue.textContent = counter;
});
incrementBtn.addEventListener("click", () => {
    counter += 1;
    counterValue.textContent = counter;
});





