import React,{useState} from 'react'
import './Navbar.css';
import logo from '../../logo.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';

function Navbar() {
    const checkMobileScreen = useCheckMobileScreen();
    const [menuOpen, setmenuOpen] = useState(false)
    console.log(checkMobileScreen);
    return (
        <>
            <nav className='navbar-container'>
                <ul >
                    {checkMobileScreen && <MenuIcon onClick={()=>{
                        setmenuOpen(!menuOpen)
                    }}  style={{height:"20px", width:"20px",padding:"10px"}}/>}
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className={menuOpen ? 'list-container-inactive':'list-container'}>
                        <div className='list-box'>
                            <li>Shreehari</li>
                            <li>Shriji</li>
                            <li>Ghanshyam</li>
                        </div>
                        <div className='icon-container'>
                            <div>
                                <FacebookIcon  style={{height:"20px", width:"20px",padding:"10px"}}/>
                            </div>
                            <div>
                                <TwitterIcon  style={{height:"20px", width:"20px",padding:"10px"}}/>
                            </div>
                            <div>
                                <InstagramIcon  style={{height:"20px", width:"20px",padding:"10px"}}/>
                            </div>

                        </div>
                    </div>

                </ul>
            </nav>
        </>
    )
}

export default Navbar