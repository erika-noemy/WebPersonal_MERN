
import './App.scss';
import {BrowserRouter as Router, Route , Routes, Link} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
       <h1>Sistema de rutas basicas</h1>
       <Link to="/">  HOME</Link> <br/>
       <Link to="/user">USERS</Link><br/>
       <Link to="/contact">CONTACT</Link>
       <Routes>
         <Route exact path = "/" element = {<Home/>} />
         <Route exact path = "/contact" element = {<Contact/>} />
         <Route exact path = "/user" element = {<User/>} />
         <Route path='*' element = {<Error404/>} />
       </Routes>
      
      </div>
    </Router>
    
  );
}
function Home(){
  return <h2> estamos en el componente home</h2>;
}
function Contact(){
  return <h2> estamos en el componente contact</h2>;
}
function User(){
  return <h2> estamos en el componente user</h2>;
}
function Error404 (){
  return <h2> Error404</h2>;
}
export default App;
