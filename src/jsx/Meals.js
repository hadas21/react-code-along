import React from 'react'
import recipeArr from '../data';
import DynamicRecipeCards from './Recipes/DynamicRecipeCards';
import IngredientContainer from './Ingredients/IngredientContainer';

function Meals() {
    const allIngredients = recipeArr.reduce((prev, curr) => {
        curr.ingredients.forEach(item => {
            if (!prev.includes(item))  {
                prev.push(item);
            };
        });
        return prev;
    }, []);

    return (
        <div>
            <IngredientContainer allIngredients={allIngredients}/>
            <DynamicRecipeCards recipies={recipeArr}/>
        </div>
    )
}

export default Meals;