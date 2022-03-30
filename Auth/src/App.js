import './App.css';
import { Navbar } from './Components/Navbar';
import { Routes, Route} from 'react-router-dom'
import { Register } from './Components/Register';
import { Home } from './Components/Home';
import { Products } from './Components/Products';
import { Login } from './Components/Login';
import { UserDetails } from './Components/UserDetails';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
         <Route path='/home' element={<Home/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/products' element={<Products/>}/>
         <Route path='/login/' element={<Login/>}/>
         <Route path='/users/:id' element={<UserDetails />}/>
       </Routes>

    </div>
  );
}

export default App;
