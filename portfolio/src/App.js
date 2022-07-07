import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<About />
				<Work />
				<Contact />
			</Router>

		</div>
	);
}

export default App;
