
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React,{useState, useEffect} from 'react'
import useCheckMobileScreen from './hooks/useCheckMobileScreen';
import VideoDetail from './pages/VideoDetail/VideoDetail';
function App() {
  const [images, setimages] = useState([]);
 
  useEffect(() => {

    fetch('https://api.unsplash.com/photos/?client_id=hCWk_IEBVMEVa0iluSGK6yUkSn0bIUP8NVy1K0RvI9k', {
      method: "GET"
    }).then(async res => {
      const apiImages = await res.json();
      setimages(apiImages);
    })
  }, [])


  return (
    <VideoDetail/>
    // <div className="App">
    //   <header className="App-header">
      
    //    <Navbar/>
       
        
    //   </header>
    //   <main>
    //   <div className='grid-container'>
    //   {images.map((item, index) => {
    //     return <div className='grid-item'>
    //       <picture>
    //         <img src={item.urls.regular} style={{
    //           height: "175px",
    //           width: "300px",

    //         }} />
    //         <div className='length-text'>
    //           <p>1:45</p>
    //         </div>
    //       </picture>
    //       <div style={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         width:"100%",
           
    //       }}>
    //         <img src={item.urls.regular} style={{
    //           height: "30px",
    //           width: "30px",
    //           borderRadius: "50px"
    //         }} />
    //         <p style={{
    //           fontFamily: "Roboto",
    //           fontSize: "1rem",
    //           textAlign: "start",
    //           margin: "5px 5px 5px 15px"
    //         }}>Use the Most popular Crosshair in Valorant</p>
    //         <MoreVertIcon style={{
    //           color: "white",
    //           width: "25px",
    //           height: "25px"
    //         }} />
    //       </div>
    //     </div>;
    //   })}
    // </div>
    //   </main>
    // </div>
  );
}

export default App;
