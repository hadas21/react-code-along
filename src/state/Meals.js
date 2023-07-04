import React, {useState} from 'react'
import recipeArr from '../data';
import RecipeCards from '../jsx/Recipes/RecipeCards';
import IngredientContainer from './IngredientContainer';


function Meals() {
    const [activeIngredients, setActiveIngredients] = useState(getAllIngredients(recipeArr));
    const [activeRecipies, setActiveRecipies] = useState(recipeArr);
    
    function handleIngredientChange(ingredientToRemove) {
        const updatedActiveIngredients = [...activeIngredients].filter(item => {
            return item != ingredientToRemove;
        });
    
        setActiveIngredients(updatedActiveIngredients);
        updateActiveRecipies(updatedActiveIngredients);
    }
    
    function updateActiveRecipies(updatedActiveIngredients) {
        const updatedActiveRecipies = [...activeRecipies].filter(recipeObj => {
            let keepRecipe = true;

            recipeObj.ingredients.forEach(item => {
                if (!updatedActiveIngredients.includes(item)) {
                    keepRecipe = false;
                }
            });
            
            return keepRecipe;
        });

        setActiveRecipies(updatedActiveRecipies);
    }

    return (
        <div>
            <IngredientContainer 
                activeIngredients={activeIngredients}
                handleIngredientChange={handleIngredientChange}
            />
            <RecipeCards recipies={activeRecipies}/>
        </div>
    )
}

function getAllIngredients(recipeArr) {
    return recipeArr.reduce((prev, curr) => {
        curr.ingredients.forEach(item => {
            if (!prev.includes(item))  {
                prev.push(item);
            };
        });
        return prev;
    }, []);
}

export default Meals;