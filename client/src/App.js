import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Home,ManageTestimonial} from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () =>{
  return (
    <Router>
      <ToastContainer />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/managetestimonial' element={<ManageTestimonial />}/>
      </Routes>
    </Router>
  );
}

export default App;
