import React from 'react';
import Container from 'react-bootstrap/Container';

function FoodCategories(props) {
    return (
        <Container>
            <h4>Food Categories:</h4>
            {props.categories.map(item => 
                <button
                    key={`category-${item}`}
                    value={item}
                    onClick={(e) => props.handleSetActiveCategory(e.target.value)} 
                    >
                    {item}
                </button>
            )}
        </Container>
    )
}

export default FoodCategories;