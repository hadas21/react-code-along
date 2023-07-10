import React from "react";
import Col from 'react-bootstrap/Col';


function AvailableIngredients(props) {
    return (
        <Col>
            <h4>
                Available Ingredients
            </h4>
            {props.availableIngredients.length > 0 && props.availableIngredients.map(item =>{
                return (
                    <div key={`all-ingredients-${item}`}>
                        {item}
                        <button
                            value={item}
                            onClick={(e) => props.handleRemoveIngredient(e.target.value)}
                        >-</button>
                    </div>
                );
            })}
        </Col>
    )
}

export default AvailableIngredients;