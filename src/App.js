
import './App.css';
import Navbar from './components/Navbar/Navbar';

import React,{useState, useEffect} from 'react'
import useCheckMobileScreen from './hooks/useCheckMobileScreen';
import VideoDetail from './pages/VideoDetail/VideoDetail';
import Router from './router/Router';


function App() {



  return (
      <Router/>
  );
}

export default App;
