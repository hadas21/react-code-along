import React from 'react';
import AllIngredients from './AllIngredients';
import AvailableIngredients from './AvailableIngredients';
import Meals from './Meals';
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
                <Meals
                    activeMeals={props.activeMeals}
                    availableMeals={props.availableMeals}
                />
            </Row>
        </Container>
    ) 
    
    
}

export default IngredientContainer;