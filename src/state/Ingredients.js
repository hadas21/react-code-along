import React from "react";
import Col from 'react-bootstrap/Col';


function Ingredients(props) {
    function getTitleText() {
        if (props.isActive) {
            return 'Active Ingredients'; 
        } else {
            return 'Discarded Ingredients'; 
        }
    }

    function getAddRemoveSymbol() {
        if (props.isActive) {
            return '-'; 
        } else {
            return '+'; 
        }
    }

    return (
        <Col>
            <h4>
                {props.hasOwnProperty('isActive') && getTitleText()}
            </h4>
            {props.ingredients.map(item =>{
                return (
                    <div key={`all-ingredients-${item}`}>
                        {item}
                        <button
                            value={item}
                            onClick={(e) => props.handleUpdateIngredient(e.target.value)}
                        >{props.hasOwnProperty('isActive') && getAddRemoveSymbol()}</button>
                    </div>
                );
            })}
        </Col>
    )
}

export default Ingredients;