import React from 'react';
import IngredientItem from './IngredientItem';

function IngredientList(props) {
    return (
        <ul>
            {props.ingredients.map(ingredient => {
                return <IngredientItem 
                    recipe={props.recipe}
                    ingredient={ingredient}
                    key={`ingredient-item-${props.recipe}-${ingredient}`}
                />
            })}
        </ul>
    )
}

export default IngredientList;