import React from 'react';
import IngredientList from './IngredientList';

function RecipeCard(props) {
    return (
        <div>
            <h4>
                {props.recipe}
            </h4>
            <IngredientList 
                recipe={props.recipe}
                ingredients={props.ingredients}
            />
        </div>
    )
}

export default RecipeCard;