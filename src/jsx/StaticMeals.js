import React from 'react'
import recipeArr from '../data';
import RecipeCards from './Recipes/RecipeCards';
import StaticIngredientContainer from './Ingredients/StaticIngredientContainer';

function StaticMeals() {
    const allIngredients = getAllIngredients(recipeArr);

    return (
        <div>
            <StaticIngredientContainer allIngredients={allIngredients}/>
            <RecipeCards recipies={recipeArr}/>
        </div>
    )
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

export default StaticMeals;