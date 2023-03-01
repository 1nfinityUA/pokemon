import './styles/App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import TypesFilter from './components/TypesFilter/TypesFilter';

function App() {
  return (
    <div className="App">
        <Header/>
        <TypesFilter/>
        <Home/>
    </div>
  );
}

export default App;
