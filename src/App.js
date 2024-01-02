// import axios from "axios";
import React
  //, {useState} 
  from 'react';
import './App.scss';

import Header from './components/Header/Header';
import Main from "./components/Main/Main"
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          
          <Route path='/' element={<Main />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
