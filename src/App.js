
import './App.css';
import Registerform from './components/Registerform';
import Menu from './components/Menu'
import Error from './components/Error';
import { Routes , Route } from 'react-router-dom';


function App() {
 
  return (
      <>
          <Menu/>
          
          <Routes>
            <Route path="/" exact element={<Registerform/>} />
            <Route path="/error" exact  element={<Error/>}/>
          </Routes>
      </>
  );
}

export default App;
