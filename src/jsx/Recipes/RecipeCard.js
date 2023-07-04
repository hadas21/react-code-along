import React from 'react';
import IngredientList from './IngredientList';

function RecipeCard(props) {
    return (
        <div>
            <h5>
                {props.recipe}
            </h5>
            <IngredientList 
                recipe={props.recipe}
                ingredients={props.ingredients}
            />
        </div>
    )
}

export default RecipeCard;