
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AlertError from './components/AlertError';
import FishList from './components/FishList';
import Login from './components/Login';
import Modale from './components/Modal/Modale';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
    <AlertError/>
    
     <Routes>
     <Route path='/' element={<Navbar />}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/list'element={<FishList/>}/>
    <Route path='/modal' element={<Modale/>}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>

     </Routes>
    </div>
  );
}
export default App;
