import './App.css';
import { Routes, Route } from "react-router-dom"
import React from 'react';
import {Home} from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Todo} from './components/Todo';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="todo" element={<Todo/>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
