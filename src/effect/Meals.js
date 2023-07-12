import React from "react";

function Meals(props) {
    function getMealStyle(id) {
        return props.availableMeals.includes(id) ? mealActive : mealInactive;
    }

    const mealInactive = {
        'backgroundColor': 'gray'
    }

    const mealActive = {
        'backgroundColor': 'lightblue',
        'color': 'white'
    }

    return (
        <div>
            <h4>Meals:</h4>
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
        </div>
    )
}

export default Meals;