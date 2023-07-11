import React from 'react';
import AllIngredients from './AllIngredients';
import AvailableIngredients from './AvailableIngredients';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function IngredientContainer(props) {
    return (
        <Container>
            <Row>
                <AllIngredients 
                    countedIngredients={props.countedIngredients}
                    allIngredients={props.allIngredients}
                    handleAddIngredient={props.handleAddIngredient}
                />
                <AvailableIngredients 
                    availableIngredients={props.availableIngredients}
                    handleRemoveIngredient={props.handleRemoveIngredient}
                />
            </Row>
        </Container>
    ) 
    
    
}

export default IngredientContainer;