
import './App.scss';
import Admin from './pages/Admin';
import SignIn from './pages/Admin/SignIn';
import Home from './pages/Home';
import Contact from './pages/Contact';
function App() {
  return (
    <div>
      <h1>estamos en App.js</h1>
    
      <Admin/>
      <SignIn/>
      <Home/>
      <Contact/>
    </div>
  );
}
export default App;