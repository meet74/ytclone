import React,{useState,useEffect} from "react";
import Navbar from "../../components/Navbar/Navbar";
import './VideoDetail.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

function VideoDetail() {
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
    <div className="App">
      <div className="App-header">
        <Navbar />
        <main className="main-body">
          <div className="video-box" >
          <div
          className="video-container"
           
          >
            <h1>video</h1>
          </div>
          <h4>Use the Most popular Crosshair in Valorant</h4>
          
          </div>
          <div style={{display:"flex",flex:1}}>
          <div className='grid-container-video-detail'>
       {images.map((item, index) => {
         return <div className='grid-item-video-detail'>
           <picture>
             <img src={item.urls.regular} style={{
               height: "100px",
               width: "175px",

             }} />
             <div className='length-text'>
               <p>1:45</p>
             </div>
           </picture>
           <div style={{
             display: "flex",
             width:"100%",
           
           }}>
            
             <p style={{
               fontFamily: "Roboto",
               fontSize: "0.9rem",
               textAlign: "start",
               margin: "5px 5px 5px 15px",
               width:"200   px"
             }}>Use the Most popular Crosshair in Valorant</p>
             <MoreVertIcon style={{
               color: "white",
               width: "20px",
               height: "20px",
               margin:"15px"
             }} />
           </div>
         </div>;
       })}
     </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default VideoDetail;
