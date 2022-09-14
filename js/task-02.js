const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredient = document.querySelector('#ingredients');

const elements = ingredients.map(ingredien => {
  const ingredienEl = document.createElement('li');
  ingredienEl.classList.add('item');
  ingredienEl.textContent = `${ingredien}`;

  return ingredienEl;
})
ingredient.append(...elements);
console.log(elements);




