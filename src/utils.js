function sort(arr) {
    return arr.sort(function (a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });
}

function filterIngredient(value, targetArr) {
    return [...targetArr].filter(item => {
        return item !== value;
    });
}

function pushIngredient(value, targetArr) {
    return [...targetArr, value];
}

function getActiveRecipies(updatedActiveIngredients, recipeArr) {
        
    return [...recipeArr].filter(recipeObj => {
        let keepRecipe = true;

        recipeObj.ingredients.forEach(item => {
            if (!updatedActiveIngredients.includes(item)) {
                keepRecipe = false;
            }
        });
        
        return keepRecipe;
    });
}

function getAllIngredients(recipeArr) {
    return recipeArr.reduce((prev, curr) => {
        curr.ingredients.forEach(item => {
            if (!prev.includes(item))  {
                prev.push(item);
            };
        });
        return prev;
    }, []);
}

module.exports = {
    sort,
    filterIngredient,
    pushIngredient,
    getActiveRecipies,
    getAllIngredients
}