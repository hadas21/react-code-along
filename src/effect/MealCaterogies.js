import React, {useState, useEffect} from 'react'
import { getMealCategories, getMealByCategory } from './api';

function MealCategories() {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');
    const [meals, setMeals] = useState({});

    useEffect(() => {
        if (false) {
            getMealCategories().then(res => {
                const categoriesArr = res.categories.map(item => {
                    return item.strCategory;
                });
                
                setCategories(categoriesArr);
            });
        } else {
            // const mealCategories = ['Beef', 'Chicken', 'Dessert', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood'];
            // setCategories(mealCategories);
        }
    }, []);

    useEffect(() => {
        if (meals.hasOwnProperty(activeCategory)) {
        } else if (activeCategory !== '') {
            getMealByCategory(activeCategory).then(res => {
                const udpatedMeals = {
                    [activeCategory]: res.meals,
                    ...meals,
                }
                setMeals(udpatedMeals);
            });
        }
    }, [activeCategory]);
    
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