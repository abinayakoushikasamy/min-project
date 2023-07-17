import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import NavBar from './components/home';
import Services from './components/services';
import Dashboard from './components/dashboard';
import Contact from './components/contact';
import Logout from './components/logout';
import About1 from './components/about1';
import Expense from './components/expense';
 import Payment from './components/payment';

function App() {
  return (
    <Router>
   
    
      <Routes>
      
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<NavBar/>}/>
      <Route path='/hello' element={<Services/>}/>
      <Route path='/dash' element={<Dashboard/>}/>
      <Route path='/con' element={<Contact/>}/>
      <Route path='/log' element={<Login/>}/>
      <Route path='/ab' element={<About1/>}/>
      <Route path='/exp' element={<Expense/>}/>
      <Route path='/pay' element={<Payment/>}/> 
      


      

      </Routes>
    </Router>
  );
}

export default App