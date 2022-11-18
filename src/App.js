import React from 'react';
import Main from './component/Main';
import IteamPage from './component/IteamPage';
import IteamPage2 from './component/IteamPage2';
import IteamPage3 from './component/IteamPage3';
import IteamPage4 from './component/IteamPage4';
import IteamPage5 from './component/IteamPage5';
import IteamPage6 from './component/IteamPage6';
import Product from './component/Product';


import {
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Main/>} ></Route>
      <Route path='/IteamPage' element = {<IteamPage/>} ></Route>
      <Route path='/IteamPage2' element = {<IteamPage2/>} ></Route>
      <Route path='/IteamPage3' element = {<IteamPage3/>} ></Route>
      <Route path='/IteamPage4' element = {<IteamPage4/>} ></Route>
      <Route path='/IteamPage5' element = {<IteamPage5/>} ></Route>
      <Route path='/IteamPage6' element = {<IteamPage6/>} ></Route>
      <Route path='/IteamPage6' element = {<IteamPage6/>} ></Route>
      <Route path='/Product' element = {<Product/>} ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
