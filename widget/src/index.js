import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Iris from './pages/IrisPage/Iris.js';
import Admission from './pages/admissionPage/Admission';
import {BrowserRouter,Routes,Route} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/iris' element={<Iris/>}/>
      <Route path='/admission' element={<Admission/>}/>
    </Routes>
  </BrowserRouter>
);

