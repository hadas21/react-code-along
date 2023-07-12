import React from 'react';
import Container from 'react-bootstrap/Container';

function FoodCategories(props) {

    function getButtonStyle(item, props) {
        if (props.hasOwnProperty('activeCategory') && item === props.activeCategory) {
            return {'backgroundColor': 'lightblue', 'color': 'white'}
        }
        return
    }

    return (
        <Container>
            <h4>Food Categories</h4>
            {props.categories.map(item => 
                <button
                    key={`category-${item}`}
                    style={getButtonStyle(item, props)}
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