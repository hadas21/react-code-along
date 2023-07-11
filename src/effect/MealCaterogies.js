import React, {useState, useEffect} from 'react'
import { getMealCategories, getMealsByCategory, getMealById } from './api';
import IngredientContainer from './IngredientContainer';
import { sort, filterIngredient, pushIngredient } from '../utils';
import FoodCategories from './FoodCategories';
import Meals from './Meals';

function MealCategories() {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');
    const [meals, setMeals] = useState({});
    const [allIngredients, setAllIngredients] = useState([]);
    const [availableIngredients, setAvailableIngredients] = useState([]);
    const [activeMeals, setActiveMeals] = useState([]);

    useEffect(() => {
        getMealCategories().then(res => {
            const categoriesArr = res.categories.map(item => {
                return item.strCategory;
            });
            
            setCategories(categoriesArr);
        });
    }, []);

    useEffect(() => {
        if (activeCategory !== '' && !meals.hasOwnProperty(activeCategory)) {
            getMealsByCategory(activeCategory).then(mealRes => {
                
                const mealDetailsPromiseArr = mealRes.meals.map(item => {
                    return getMealById(item.idMeal);
                });

                Promise.all(mealDetailsPromiseArr).then(mealDeetsRes => {
                    const formattedRes = mealDeetsRes.map(item => {
                        return item.meals[0];
                    })

                    const updatedMeals = {
                        [activeCategory]: formattedRes,
                        ...meals,
                    }

                    setMeals(updatedMeals);
                    setAvailableIngredients([]);
                    setAllIngredients(sort(getIngredients(updatedMeals)));
                });
            });
        }
    }, [activeCategory]);

    function getIngredients(meals) {
        return  meals[activeCategory].reduce((prev, curr) => {
            for (let i = 1; i <= 20; i++) {
                let ingredientKey = `strIngredient${i}`;
                let ingredient  = curr[ingredientKey];
                if (ingredient && ingredient !== '' && !prev.includes(ingredient)) {
                    prev.push(ingredient);
                }
            }
            return prev;
        }, []);
    }
    
    function handleSetActiveCategory(item) {
        setActiveCategory(item);
    }

    function addIngredient(item) {
        const updatedAvailableIngredients = pushIngredient(item, availableIngredients);
        const updatedAllIngredients = filterIngredient(item, allIngredients);
        
        setAllIngredients(sort(updatedAllIngredients));
        setAvailableIngredients(sort(updatedAvailableIngredients));
        
        setActiveMeals(getActiveMeals(updatedAvailableIngredients));
    }

    function removeIngredient(item) {
        const updatedAvailableIngredients = filterIngredient(item, availableIngredients);
        const updatedAllIngredients = pushIngredient(item, allIngredients);
        
        setAllIngredients(sort(updatedAllIngredients));
        setAvailableIngredients(sort(updatedAvailableIngredients));

        setActiveMeals(getActiveMeals(updatedAvailableIngredients));
    }

    function getActiveMeals(availableIngredients) {
        return meals[activeCategory].reduce((prev, curr) => {
            const mealIngredientsArr = []
            for (let i = 1; i <= 20; i++) {
                let ingredientKey = `strIngredient${i}`;
                let ingredient  = curr[ingredientKey];
                if (ingredient && ingredient !== '') {
                    mealIngredientsArr.push(ingredient);
                }
            }
            
            let isActiveMeal = true;

            for (let i = 0; i < mealIngredientsArr.length; i++) {
                if (!availableIngredients.includes(mealIngredientsArr[i])) {
                    isActiveMeal = false;
                    break;
                }

            }

            if (isActiveMeal) {
                prev.push(curr.idMeal);
            }

            return prev;
        }, []);
    }

    return (
        <div>
            <FoodCategories
                categories={categories}
                handleSetActiveCategory={handleSetActiveCategory}
            />
            <br/>
            <div>Active Category: {activeCategory}</div>
            <br/>
            <IngredientContainer
                allIngredients={allIngredients}
                availableIngredients={availableIngredients}
                handleAddIngredient={addIngredient}
                handleRemoveIngredient={removeIngredient}
            />
            <br/>
            <Meals
                activeMeals={activeMeals}
                meals={meals}
                activeCategory={activeCategory}
            />
        </div>
    )
}

export default MealCategories;