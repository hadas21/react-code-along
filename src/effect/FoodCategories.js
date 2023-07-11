import React from 'react';

function FoodCategories(props) {
    return (
        <div>
            <h4>Food Categories:</h4>
            {props.categories.map(item => 
                <button
                    key={`category-${item}`}
                    value={item}
                    onClick={(e) => props.handleSetActiveCategory(e.target.value)} 
                    >
                    {item}
                </button>
            )}
        </div>
    )
}

export default FoodCategories;