import React from 'react';

function IngredientContainer(props) {
    return (
        <div>
            <h4>
                All Ingredients
            </h4>
            {props.allIngredients.map(item =>{
                return <div key={`all-ingredients-${item}`}>{item}</div>;
            })}
        </div>
    ) 
    
    
}

export default IngredientContainer;