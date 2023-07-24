import React from 'react';
import IngredientItem from './IngredientItem';
import Col from 'react-bootstrap/Col';

function RecipeCard(props) {
    return (
        <Col>
            <h5>
                {props.recipe}
            </h5>
            <ul>
                {props.ingredients.map(ingredient => {
                    return <IngredientItem 
                        ingredient={ingredient}
                    />
                })}
            </ul>
        </Col>
    )
}

export default RecipeCard;