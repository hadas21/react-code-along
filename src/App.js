import StaticRecipeCards from './components/StaticRecipeCards';
import StaticMeals from './jsx/StaticMeals'
import Meals from './state/Meals';
import MealCategories from './effect/MealCategories';
import StyledMeals from './styling/StyledMeals';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <StaticRecipeCards/> */}
        {/* <StaticMeals/> */}
        {/* <Meals/> */}
        {/* <MealCategories/> */}
        <StyledMeals/>
      </header>
    </div>
  );
}

export default App;
