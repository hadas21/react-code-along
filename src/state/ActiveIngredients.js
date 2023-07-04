import React from "react";
import Col from 'react-bootstrap/Col';


function ActiveIngredients(props) {
    return (
        <Col>
            <h4>
                Active Ingredients
            </h4>
            {props.activeIngredients.map(item =>{
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

export default ActiveIngredients;