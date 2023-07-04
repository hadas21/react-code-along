import './App.css';
// import StaticRecipeCards from './components/StaticRecipeCards';
import Meals from './jsx/Meals'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <StaticRecipeCards/> */}
        <Meals/>
      </header>
    </div>
  );
}

export default App;
