
import './App.css';
import Customerform from './components/Customerfrom'
import Menu from './components/Menu'
import Error from './components/Error';
import { Routes , Route } from 'react-router-dom';
import Courseform from './components/Courseform';
import Productform from './components/Productform';


function App() {
 
  return (
      <>
          <Menu/>
          
          <Routes>
            <Route path="/" exact element={<Customerform/>} />
            <Route path="/course" exact element={<Courseform/>} /> 
            <Route path="/product" exact element={<Productform/>} />
            <Route path="/error" exact  element={<Error/>}/>
          </Routes>
      </>
  );
}

export default App;
