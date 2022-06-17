import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
		<Navbar/>
		<About/>
		<Work/>
		<Contact/>
    </div>
  );
}

export default App;
