import React, {useState} from 'react'
import recipeArr from '../data';
import RecipeCards from '../jsx/Recipes/RecipeCards';
import IngredientContainer from './IngredientContainer';


function Meals() {
    const [activeIngredients, setActiveIngredients] = useState(sort(getAllIngredients(recipeArr)));
    const [discardedIngredients, setdiscardedIngredients] = useState([]);
    const [activeRecipies, setActiveRecipies] = useState(recipeArr);

    function filterIngredient(value, targetArr) {
        return [...targetArr].filter(item => {
            return item !== value;
        });
    }

    function pushIngredient(value, targetArr) {
        return [...targetArr, value];
    }

    function sort(arr) {
        return arr.sort(function (a, b) {
            if (a < b) {
              return -1;
            }
            if (a > b) {
              return 1;
            }
            return 0;
          });
    }
    
    function discardIngredient(ingredientToRemove) {
        const updatedActiveIngredients = filterIngredient(ingredientToRemove, activeIngredients);
        const updatedDiscardedIngredients = pushIngredient(ingredientToRemove,discardedIngredients);
        
        setActiveIngredients(sort(updatedActiveIngredients));
        setdiscardedIngredients(sort(updatedDiscardedIngredients))
        
        updateActiveRecipies(updatedActiveIngredients);
    }
    
    function restoreIngredient(ingredientToRestore) {
        const updatedActiveIngredients = pushIngredient(ingredientToRestore, activeIngredients);
        const updatedDiscardedIngredients = filterIngredient(ingredientToRestore, discardedIngredients)

        setActiveIngredients(sort(updatedActiveIngredients));
        setdiscardedIngredients(sort(updatedDiscardedIngredients));
        updateActiveRecipies(updatedActiveIngredients);
    }
    
    
    function updateActiveRecipies(updatedActiveIngredients) {
        const updatedActiveRecipies = [...recipeArr].filter(recipeObj => {
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
                discardedIngredients={discardedIngredients}
                handleRemoveIngredient={discardIngredient}
                handleRestoreIngredient={restoreIngredient}
            />
            <br/>
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