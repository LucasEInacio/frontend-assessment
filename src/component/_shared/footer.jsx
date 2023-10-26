import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerItem'>
                <h3>Developed by Lucas Estevam Inacio</h3>
            </div>
            <div className='footerItem'>
                <InstagramIcon />
                <FacebookIcon />
            </div>
        </div>);
};

export default Footer;