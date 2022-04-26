const ulCategories = document.querySelectorAll('.item');
console.log('Number of categories:', ulCategories.length);

const listCategory = document.querySelectorAll('#categories>li');
listCategory.forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`);
});
