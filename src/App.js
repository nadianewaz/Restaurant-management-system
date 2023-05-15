import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,

} from  "react-router-dom";

                      
import Menu from './Components/Menu/Menu';
import About from './Components/About/About';
import Pages from './Components/Pages/Pages';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <>
    {/* <Home></Home> */}

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/menu' element={<Menu/>}></Route>
      <Route path='/pages' element={<Pages/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
