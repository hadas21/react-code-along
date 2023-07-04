import React, {useState} from 'react'
import recipeArr from '../data';
import RecipeCards from '../jsx/Recipes/RecipeCards';
import IngredientContainer from './IngredientContainer';
import { sort, filterIngredient, pushIngredient, getActiveRecipies, getAllIngredients } from '../utils';


function Meals() {
    const [activeIngredients, setActiveIngredients] = useState(sort(getAllIngredients(recipeArr)));
    const [discardedIngredients, setdiscardedIngredients] = useState([]);
    const [activeRecipies, setActiveRecipies] = useState(recipeArr);
    
    function discardIngredient(ingredientToRemove) {
        const updatedActiveIngredients = filterIngredient(ingredientToRemove, activeIngredients);
        const updatedDiscardedIngredients = pushIngredient(ingredientToRemove,discardedIngredients);
        const updatedActiveRecipies = getActiveRecipies(updatedActiveIngredients, recipeArr);

        setActiveIngredients(sort(updatedActiveIngredients));
        setdiscardedIngredients(sort(updatedDiscardedIngredients))
        setActiveRecipies(updatedActiveRecipies);
    }
    
    function restoreIngredient(ingredientToRestore) {
        const updatedActiveIngredients = pushIngredient(ingredientToRestore, activeIngredients);
        const updatedDiscardedIngredients = filterIngredient(ingredientToRestore, discardedIngredients)
        const updatedActiveRecipies = getActiveRecipies(updatedActiveIngredients, recipeArr)

        setActiveIngredients(sort(updatedActiveIngredients));
        setdiscardedIngredients(sort(updatedDiscardedIngredients));
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

export default Meals;