
import React
  from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Main from "./pages/Main/Main"
import NotFound from "./components/NotFound/NotFound";
import UploadPage from './pages/Upload/Upload';
import Success from "./components/Success/Success"
import SelectedVideo from "./pages/Main/Main"
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/:videoId' element={<SelectedVideo />} />
          <Route path='/upload' element={<UploadPage />} />
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
