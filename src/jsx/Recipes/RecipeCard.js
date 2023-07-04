import React from 'react';
import IngredientList from './IngredientList';
import Col from 'react-bootstrap/Col';

function RecipeCard(props) {
    return (
        <Col>
            <h5>
                {props.recipe}
            </h5>
            <IngredientList 
                recipe={props.recipe}
                ingredients={props.ingredients}
            />
        </Col>
    )
}

export default RecipeCard;