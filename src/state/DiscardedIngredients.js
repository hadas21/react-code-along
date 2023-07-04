import React from "react";
import Col from 'react-bootstrap/Col';


function DiscardedIngredients(props) {
    return (
        <Col>
            <h4>
                Discarded Ingredients
            </h4>
            {props.discardedIngredients.map(item =>{
                return (
                    <div key={`all-ingredients-${item}`}>
                        {item}
                        <button
                            value={item}
                            onClick={(e) => props.handleRestoreIngredient(e.target.value)}
                        >+</button>
                    </div>
                );
            })}
        </Col>
    )
}

export default DiscardedIngredients;