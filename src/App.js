import './App.css';
import StaticRecipeCards from './components/StaticRecipeCards';
import DynamicRecipeCards from './jsx/DynamicRecipeCards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StaticRecipeCards/>
        <DynamicRecipeCards/>
      </header>
    </div>
  );
}

export default App;
