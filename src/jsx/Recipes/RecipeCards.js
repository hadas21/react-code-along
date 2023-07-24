import React from 'react';
import RecipeCard from './RecipeCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function RecipeCards(props) {
    return (
        <Container>
            <Row>
                {props.recipies.map(item => {
                    return <RecipeCard 
                        recipe={item.recipe}
                        ingredients={item.ingredients}
                        key={`recipe-card-${item.recipe}`}
                    />
                })}
            </Row>
        </Container>
    )
}

export default RecipeCards;