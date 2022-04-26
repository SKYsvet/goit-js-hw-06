const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newUl = document.querySelector('#ingredients');
console.log(newUl);

const createList = () => {
  const newList = ingredients.map(createLi => {
    const ingredientList = document.createElement('li');
    console.log(ingredientList);
    ingredientList.textContent = createLi;
    ingredientList.classList = 'item';
    return ingredientList;
  });

  newUl.append(...newList);
}

createList();