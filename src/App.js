// import axios from "axios";
import React
  //, {useState} 
  from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Main from "./components/Main/Main"
import NotFound from "./components/NotFound/NotFound";
import UploadPage from './components/Upload/Upload';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/upload' element={<UploadPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
