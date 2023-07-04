import './App.css';
import StaticRecipeCards from './components/StaticRecipeCards';
import StaticMeals from './jsx/StaticMeals'
import Meals from './state/Meals';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <StaticRecipeCards/> */}
        {/* <StaticMeals/> */}
        <Meals/>
      </header>
    </div>
  );
}

export default App;
