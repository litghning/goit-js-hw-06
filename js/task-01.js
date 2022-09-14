const itemEl = document.querySelector('#categories');
const numdersAll = categories.children.length;
console.log('Numbers:', numdersAll)

const item = document.querySelectorAll('.item');
item.forEach(item => {
    const category = item.querySelector('h2');
    console.log('Category:', category.textContent);
     const elements = item.querySelectorAll('li');
    console.log('Elements:', elements.length);
}
)