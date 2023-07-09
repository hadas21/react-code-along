import React, {useState, useEffect} from 'react'
import getMealCategories from './api';

function MealCategories() {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');

    useEffect(() => {
        // fetch('https://themealdb.com/api/json/v1/1/categories.php')
        //     .then(res => res.json())
        //     .then(res => console.log(res))
        const mealCategories = ['Italian', 'French', 'Seafood', 'Vegan'];
        setCategories(mealCategories);
    }, []);

    function handleSetActiveCategory(item) {
        setActiveCategory(item);
    }

    return (
        <div>
            <div>
                Food Categories:
            </div>
            {categories.map(item => 
                <button
                key={`category-${item}`}
                value={item}
                onClick={(e) => handleSetActiveCategory(e.target.value)} 
                >
                    {item}
                </button>
            )}
            <div>Active Category: {activeCategory}</div>
        </div>
    )
}

export default MealCategories;