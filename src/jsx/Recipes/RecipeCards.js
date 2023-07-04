import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeCards(props) {
    return (
        <div>
            {props.recipies.map(item => {
                return <RecipeCard 
                    recipe={item.recipe}
                    ingredients={item.ingredients}
                    key={`recipe-card-${item.recipe}`}
                />
            })}
        </div>
    )
}

export default RecipeCards;