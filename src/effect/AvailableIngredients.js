import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function AvailableIngredients(props) {
    return (
        <Col>
            <h4>
                Available Ingredients
            </h4>
            {props.availableIngredients.length > 0 && props.availableIngredients.map(item =>{
                return (
                    <Row key={`all-ingredients-${item}`}>
                        <Col>{item}</Col>
                        <Col>
                            <button
                                value={item}
                                onClick={(e) => props.handleRemoveIngredient(e.target.value)}
                                >-</button>
                        </Col>
                    </Row>
                );
            })}
        </Col>
    )
}

export default AvailableIngredients;