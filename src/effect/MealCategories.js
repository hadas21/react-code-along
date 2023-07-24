import React, {useState, useEffect} from 'react'
import { getMealCategories, getMealsByCategory, getMealById } from '../effect/api';
import IngredientContainer from '../effect/IngredientContainer';
import { sort, filterIngredient, pushIngredient } from '../utils';
import FoodCategories from '../effect/FoodCategories';
import Container from 'react-bootstrap/Container'

function StyledMeals() {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');
    const [allMeals, setAllMeals] = useState({});
    const [activeMeals, setActiveMeals] = useState({});
    const [suggestedIngredients, setSuggestedIngredients] = useState([])
    const [availableIngredients, setAvailableIngredients] = useState([]);
    const [availableMeals, setAvailableMeals] = useState([]);

    useEffect(() => {
        getMealCategories().then(res => {
            const categoriesArr = res.categories.map(item => {
                return item.strCategory;
            });
            
            setCategories(categoriesArr);
        });
    }, []);

    function handleSetActiveCategory(category) {
        if (!allMeals.hasOwnProperty(category)) {
            getMealsByCategory(category).then(mealRes => {
                const mealDetailsPromiseArr = mealRes.meals.map(item => {
                    return getMealById(item.idMeal);
                });

                getMealDetails(mealDetailsPromiseArr, category);
            });
        } else {
            setActiveMeals(allMeals[category]);
            setAvailableIngredients([]);

            const ingredientsWithCountsObj = getIngredientsWithCounts(allMeals[category]);            
            setSuggestedIngredients(sort(Object.keys(ingredientsWithCountsObj)));
        }
        setActiveCategory(category);
    }

    function getMealDetails(mealDetailsPromiseArr, category) {
        Promise.all(mealDetailsPromiseArr).then(res => {
            const formattedRes = res.map(item => {
                return item.meals[0];
            })

            const updatedMeals = {
                [category]: formattedRes,
                ...allMeals,
            }

            setAllMeals(updatedMeals);
            setActiveMeals(updatedMeals[category])
            setAvailableIngredients([]);

            const ingredientsWithCountsObj = getIngredientsWithCounts(updatedMeals[category]);
            setSuggestedIngredients(sort(Object.keys(ingredientsWithCountsObj)));
        });
    }

    function getIngredientsWithCounts(meals) {
        return meals.reduce((prev, curr) => {
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

    function addIngredient(item) {
        const updatedAvailableIngredients = pushIngredient(item, availableIngredients);
        const updatedSuggestedIngredients = filterIngredient(item, suggestedIngredients);
        
        setSuggestedIngredients(sort(updatedSuggestedIngredients));
        setAvailableIngredients(sort(updatedAvailableIngredients));
        
        setAvailableMeals(getActiveMeals(updatedAvailableIngredients));
    }

    function removeIngredient(item) {
        const updatedAvailableIngredients = filterIngredient(item, availableIngredients);
        const updatedSuggestedIngredients = pushIngredient(item, suggestedIngredients);
        
        setSuggestedIngredients(sort(updatedSuggestedIngredients));
        setAvailableIngredients(sort(updatedAvailableIngredients));

        setAvailableMeals(getActiveMeals(updatedAvailableIngredients));
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
        return allMeals[activeCategory].reduce((prev, curr) => {
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
            <Container>Active Category: {activeCategory}</Container>
            <br/>
            <IngredientContainer
                allIngredients={suggestedIngredients}
                availableIngredients={availableIngredients}
                handleAddIngredient={addIngredient}
                handleRemoveIngredient={removeIngredient}
                activeMeals={activeMeals}
                availableMeals={availableMeals}
            />
        </div>
    )
}

export default StyledMeals;