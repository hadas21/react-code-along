import React from 'react';

function IngredientItem(props) {
    return (
        <li key={props.ingredient}>
            {props.ingredient}
        </li>
    )
}

export default IngredientItem;