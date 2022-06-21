import React, { useState } from 'react'
import './Navbar.css';
import logo from '../../assets/youtube_logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import SearchSharp from '@mui/icons-material/Search';
import Mic from '@mui/icons-material/Mic';
import { VideoCallOutlined, WidgetsOutlined, NotificationsNoneOutlined } from '@mui/icons-material';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';

function Navbar() {
    const checkMobileScreen = useCheckMobileScreen();
    const [menuOpen, setmenuOpen] = useState(false)
    console.log(checkMobileScreen);
    return (
        <>
            <nav className='navbar-container'>
                <ul >
                    {/* {checkMobileScreen && <MenuIcon onClick={() => {
                        setmenuOpen(!menuOpen)
                    }} style={{ height: "20px", width: "20px", padding: "10px" }} />} */}
                    <div>
                        <img src={logo} className="App-logo" alt="logo" />
                        <h3>YouTube</h3>
                    </div>
                    <div className={'list-container'}>

                        <div className="search-input">

                            <SearchSharp style={{ color: "white", margin: "10px" }} className="search-icon" />

                            {!checkMobileScreen&&<input className="input-bar" />}

                            {!checkMobileScreen&&<Mic style={{ color: "white", margin: "10px" }} className="mic-icon" />}

                        </div>

                        <div className='icon-container'>
                            {
                                !checkMobileScreen && <>
                                    <VideoCallOutlined style={{ color: "white", width: "25px", height: "25px", margin: '0 35px' }} className="create-icon" />
                                    <WidgetsOutlined style={{ color: "white", width: "25px", height: "25px", margin: '0 35px' }} className="menu-icon" />
                                    <NotificationsNoneOutlined style={{ color: "white", width: "25px", height: "25px", margin: '0 35px' }} className="notification-icon" />
                                </>
                            }
                            <img
                                src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=100"
                                className="profile-picture"
                                alt="profile"
                            />
                        </div>

                    </div>

                </ul>
            </nav>
        </>
    )
}

export default Navbar