import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ActiveIngredients from './ActiveIngredients';
import DiscardedIngredients from './DiscardedIngredients';
import Ingredients from './Ingredients';

function IngredientContainer(props) {
    return (
        <Container>
            <Row>
                <Ingredients 
                    isActive={true}
                    ingredients={props.activeIngredients}
                    handleUpdateIngredient={props.handleRemoveIngredient}
                />
                <Ingredients
                    isActive={false}
                    ingredients={props.discardedIngredients}
                    handleUpdateIngredient={props.handleRestoreIngredient}
                />
            </Row>
        </Container>
    ) 
    
    
}

export default IngredientContainer;