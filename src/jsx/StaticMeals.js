import React from 'react'
import recipeArr from '../data';
import RecipeCards from './Recipes/RecipeCards';
import StaticIngredientContainer from './Ingredients/StaticIngredientContainer';

function StaticMeals() {
    return (
        <div>
            <StaticIngredientContainer allIngredients={getUniqueIngredients(recipeArr)}/>
            <RecipeCards
                recipies={recipeArr}
            />
        </div>
    )
}

function getUniqueIngredients(recipeArr) {
    return recipeArr.reduce((prev, curr) => {
        curr.ingredients.forEach(item => {
            if (!prev.includes(item))  {
                prev.push(item);
            };
        });
        return prev;
    }, []);
}

export default StaticMeals;