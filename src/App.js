
import './App.scss';
import {BrowserRouter as Router,Routes, Route, BrowserRouter} from 'react-router-dom';
import routes from './config/routes'

console.log(routes);
function App() {
  return (
   <BrowserRouter>
   <Routes>
     {routes.map((route , index)=>(
       <Route 
       key={index} 
       path={route.path} 
       element={<route.layout>
         <route.component/>     
        </route.layout>

      }/>
     ))}
   </Routes>
   </BrowserRouter>
  );
}
export default App;