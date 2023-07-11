import React from "react";

function Meals(props) {
    function getMealStyle(id) {
        return props.activeMeals.includes(id) ? mealActive : mealInactive;
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
                props.meals.hasOwnProperty(props.activeCategory) && 
                props.meals[props.activeCategory].map(item => {
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