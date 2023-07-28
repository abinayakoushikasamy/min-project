import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import NavBar from './components/home';
import Services from './components/services';
import Dashboard from './components/dashboard';
import Contact from './components/contact';
import Logout from './components/logout';
import FeedForm from './components/feedform';
import Expense from './components/expense';
 import Payment from './components/payment';
 import Security from './components/security';
 import { Provider } from 'react-redux';
 import Emergency from './components/emergency';
 import About from './components/shopping';
 import Shopping from './components/shopping';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from "./components/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <Router>
   
    
      <Routes>
      
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<NavBar/>}/>
      <Route path='/hello' element={<Services/>}/>
      <Route path='/dash' element={<Dashboard/>}/>
      <Route path='/con' element={<Contact/>}/>
      <Route path='/log' element={<Login/>}/>
      <Route path='/ab' element={<FeedForm/>}/>
      <Route path='/exp' element={<Expense/>}/>
      <Route path='/pay' element={<Payment/>}/> 
      <Route path='/sec' element={<Security/>}/> 
      <Route path='/emr' element={<Emergency/>}/> 
      {/* <Route path='/abt' element={<About/>}/>  */}
      <Route path='/abt' element={<Shopping/>}/> 
      
     
      

      

      </Routes>
    </Router>
    </PersistGate>
    </Provider>
  );
}

export default App