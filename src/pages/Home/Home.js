/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect,useState} from 'react'
import Navbar from '../../components/Navbar/Navbar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useNavigate} from 'react-router-dom'
import './Home.css'

function Home() {

    const [images, setimages] = useState([]);
    const nav = useNavigate();
    useEffect(() => {
  
      fetch('https://api.unsplash.com/photos/?client_id=hCWk_IEBVMEVa0iluSGK6yUkSn0bIUP8NVy1K0RvI9k', {
        method: "GET"
      }).then(async res => {
        const apiImages = await res.json();
        setimages(apiImages);
      })
    }, [])

  return (
    <div className="App">
      <header className="App-header">
      
       <Navbar/>
       
        
      </header>
      <main>
      <div className='grid-container'>
      {images.map((item, index) => {
        return <div className='grid-item' onClick={()=>nav('/videodetail')}>
          <picture>
            <img src={item.urls.regular} style={{
              height: "175px",
              width: "300px",

            }} />
            <div className='length-text'>
              <p>1:45</p>
            </div>
          </picture>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width:"100%",
           
          }}>
            <img src={item.urls.regular} style={{
              height: "30px",
              width: "30px",
              borderRadius: "50px"
            }} />
            <p style={{
              fontFamily: "Roboto",
              fontSize: "1rem",
              textAlign: "start",
              margin: "5px 5px 5px 15px"
            }}>Use the Most popular Crosshair in Valorant</p>
            <MoreVertIcon style={{
              color: "white",
              width: "25px",
              height: "25px"
            }} />
          </div>
        </div>;
      })}
    </div>
      </main>
    </div>
  )
}

export default Home