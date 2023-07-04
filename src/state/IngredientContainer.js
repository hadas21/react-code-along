import React from 'react';
import ActiveIngredients from './ActiveIngredients';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DiscardedIngredients from './DiscardedIngredients';

function IngredientContainer(props) {
    return (
        <Container>
            <Row>
                <ActiveIngredients 
                    activeIngredients={props.activeIngredients}
                    handleRemoveIngredient={props.handleRemoveIngredient}
                />
                <DiscardedIngredients 
                    discardedIngredients={props.discardedIngredients}
                    handleRestoreIngredient={props.handleRestoreIngredient}
                />
            </Row>
        </Container>
    ) 
    
    
}

export default IngredientContainer;