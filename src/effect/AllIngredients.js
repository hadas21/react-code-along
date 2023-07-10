import React from "react";
import Col from 'react-bootstrap/Col';


function AllIngredients(props) {
    return (
        <Col>
            <h4>
                All Ingredients
            </h4>
            {props.allIngredients.length > 0 && props.allIngredients.map(item =>{
                return (
                    <div key={`all-ingredients-${item}`}>
                        {item}
                        <button
                            value={item}
                            onClick={(e) => props.handleAddIngredient(e.target.value)}
                        >+</button>
                    </div>
                );
            })}
        </Col>
    )
}

export default AllIngredients;