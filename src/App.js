import './App.css';
import DrawerAppBar from './components/appbar/Appbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <Home />
    </div>
  );
}

export default App;
