import StaticRecipeCards from './components/StaticRecipeCards';
import StaticMeals from './jsx/StaticMeals'
import Meals from './state/Meals';
import MealCategories from './effect/MealCaterogies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <StaticRecipeCards/> */}
        {/* <StaticMeals/> */}
        {/* <Meals/> */}
        <MealCategories/>
      </header>
    </div>
  );
}

export default App;
