import Home from './pages/home';
import Copyright from './components/copyright';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return <div className='sort'>
    <Navbar/>
    <Home/>
    <Copyright/>
    </div>;
}

export default App;