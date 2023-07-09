import React, {useState, useEffect} from 'react'
import { getMealCategories, getMealsByCategory, getMealById } from './api';

function MealCategories() {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');
    const [categoryMeals, setCategoryMeals] = useState({});
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
            const mealCategories = ['Beef', 'Chicken', 'Dessert', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood'];
            setCategories(mealCategories);
        }
    }, []);

    useEffect(() => {
        if (categoryMeals.hasOwnProperty(activeCategory)) {
        } else if (activeCategory !== '') {
            getMealsByCategory(activeCategory).then(res => {
                const udpateCategorydMeals = {
                    [activeCategory]: res.meals,
                    ...categoryMeals,
                }
                setCategoryMeals(udpateCategorydMeals);
            });
        }
    }, [activeCategory]);
    
    function handleSetActiveCategory(item) {
        setActiveCategory(item);
    }

    function handleGetMealDetails(id) {
        if (!meals.hasOwnProperty(id)) {
            getMealById(id).then(res => {
                const udpatedMeals = {
                    [id]: res.meals,
                    ...meals
                }
                console.log(udpatedMeals);
                setMeals(udpatedMeals);
            });
        }
    }

    return (
        <div>
            <div>Food Categories:</div>
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
            <br/>
            <div>Meals:</div>
            {
               categoryMeals.hasOwnProperty(activeCategory) && 
                    categoryMeals[activeCategory].map(item => {
                        return (
                            <div>
                                <button
                                    key={`meal-${item.idMeal}`}
                                    value={item.idMeal}
                                    onClick={(e) => handleGetMealDetails(e.target.value)} 
                                    >
                                    {item.strMeal}
                                </button>
                                <div>
                                    {
                                        meals.hasOwnProperty(item.idMeal) &&
                                            item.idMeal
                                    }
                                </div>
                            </div>
                        );
                    })
            }
        </div>
    )
}

export default MealCategories;