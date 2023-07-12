import React from "react";
import Col from 'react-bootstrap/Col'

function Meals(props) {
    function getMealStyle(id) {
        return props.availableMeals.includes(id) ? mealActive : mealInactive;
    }

    const mealInactive = {
        'backgroundColor': 'lightgray'
    }

    const mealActive = {
        'backgroundColor': 'lightblue'
    }

    return (
        <Col>
            <h4>Meals</h4>
            {
                props.activeMeals !== undefined && props.activeMeals.length > 0 && 
                props.activeMeals.map(item => {
                    return (
                        <div style={getMealStyle(item.idMeal)} key={`meal-${item.strMeal}`}>
                                {item.strMeal}
                        </div>
                    );
                })
            }
        </Col>
    )
}

export default Meals;