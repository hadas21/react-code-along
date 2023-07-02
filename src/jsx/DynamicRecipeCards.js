import React from 'react';
import recipeArr from '../data';
import RecipeCard from './RecipeCard';

function DynamicRecipeCards() {
    return (
        <div>
            {recipeArr.map(item => {
                return <RecipeCard 
                    recipe={item.recipe}
                    ingredients={item.ingredients}
                    key={`recipe-card-${item.recipe}`}
                />
            })}
        </div>
    )
}

export default DynamicRecipeCards;