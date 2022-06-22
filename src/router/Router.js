import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home/Home';
import VideoDetail from '../pages/VideoDetail/VideoDetail';


function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/videodetail' element={<VideoDetail/>}/>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default Router