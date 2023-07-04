import React from 'react';

function IngredientContainer(props) {
    return (
        <div>
            <h4>
                All Ingredients
            </h4>
            {props.activeIngredients.map(item =>{
                return (
                    <div key={`all-ingredients-${item}`}>
                        {item}
                        <button
                            value={item}
                            onClick={(e) => props.handleIngredientChange(e.target.value)}
                        >-</button>
                    </div>
                );
            })}
        </div>
    ) 
    
    
}

export default IngredientContainer;