import React, {useState, useEffect} from 'react'
import { getMealCategories, getMealsByCategory, getMealById } from '../effect/api';
import IngredientContainer from '../effect/IngredientContainer';
import { sort, filterIngredient, pushIngredient } from '../utils';
import FoodCategories from '../effect/FoodCategories';
import Meals from '../effect/Meals';
import IngredientScale from './IngredientScale';

function StyledMeals() {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');
    const [meals, setMeals] = useState({});
    const [countedIngredients, setCountedIngredients] = useState({});
    const [suggestedIngredients, setSuggestedIngredients] = useState([])
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

                getMealDetails(mealDetailsPromiseArr);
            });
        }
    }, [activeCategory]);

    function getMealDetails(mealDetailsPromiseArr) {
        Promise.all(mealDetailsPromiseArr).then(res => {
            const formattedRes = res.map(item => {
                return item.meals[0];
            })

            const updatedMeals = {
                [activeCategory]: formattedRes,
                ...meals,
            }

            setMeals(updatedMeals);
            setAvailableIngredients([]);

            const ingredientsWithCountsObj = getIngredientsWithCounts(updatedMeals);            
            setCountedIngredients(ingredientsWithCountsObj);
            setSuggestedIngredients(sort(Object.keys(ingredientsWithCountsObj)));
        });
    }

    function getIngredientsWithCounts(meals) {
        return meals[activeCategory].reduce((prev, curr) => {
            for (let i = 1; i <= 20; i++) {
                let ingredientKey = `strIngredient${i}`;
                let ingredient  = curr[ingredientKey];
                if (ingredient && ingredient !== '') {
                    if (prev.hasOwnProperty(ingredient)) {
                        prev[ingredient] += 1;
                    } else {
                        prev[ingredient] = 1;
                    }
                }
            }
            return prev;
        }, {});
    }
    
    function handleSetActiveCategory(item) {
        setActiveCategory(item);
    }

    function addIngredient(item) {
        const updatedAvailableIngredients = pushIngredient(item, availableIngredients);
        const updatedSuggestedIngredients = filterIngredient(item, suggestedIngredients);
        
        setSuggestedIngredients(sort(updatedSuggestedIngredients));
        setAvailableIngredients(sort(updatedAvailableIngredients));
        
        setActiveMeals(getActiveMeals(updatedAvailableIngredients));
    }

    function removeIngredient(item) {
        const updatedAvailableIngredients = filterIngredient(item, availableIngredients);
        const updatedSuggestedIngredients = pushIngredient(item, suggestedIngredients);
        
        setSuggestedIngredients(sort(updatedSuggestedIngredients));
        setAvailableIngredients(sort(updatedAvailableIngredients));

        setActiveMeals(getActiveMeals(updatedAvailableIngredients));
    }

    function getMealIngredients(meal) {
        const ingredientsArr = []
        for (let i = 1; i <= 20; i++) {
            let ingredientKey = `strIngredient${i}`;
            let ingredient  = meal[ingredientKey];
            if (ingredient && ingredient !== '') {
                ingredientsArr.push(ingredient);
            }
        }
        return ingredientsArr;
    }

    function isMealActive(mealIngredients, availableIngredients) {
        let isActiveMeal = true;

        for (let i = 0; i < mealIngredients.length; i++) {
            if (!availableIngredients.includes(mealIngredients[i])) {
                isActiveMeal = false;
                break;
            }
        }

        return isActiveMeal;
    }

    function getActiveMeals(availableIngredients) {
        return meals[activeCategory].reduce((prev, curr) => {
            const mealIngredientsArr = getMealIngredients(curr)

            if (isMealActive(mealIngredientsArr, availableIngredients)) {
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
            {
                Object.keys(countedIngredients).length > 0 && 
                <IngredientScale
                    countedIngredients={countedIngredients}
                />
            }
            <br/>
            <IngredientContainer
                countedIngredients={countedIngredients}
                allIngredients={suggestedIngredients}
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

export default StyledMeals;