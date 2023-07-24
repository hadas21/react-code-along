import React from 'react';
import IngredientItem from './IngredientItem';

function IngredientList(props) {
    return (
        <ul>
            {props.ingredients.map(ingredient => {
                return <IngredientItem 
                    ingredient={ingredient}
                />
            })}
        </ul>
    )
}

export default IngredientList;