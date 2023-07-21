import React from "react";
import Tooltip from '@mui/material/Tooltip';

function Footer(){
    const day = new Date();
    const year = day.getFullYear();
    return <div>
        <footer>
        <div className="cont-footer container-fluid bg-warning">
        <div class="copyright">
        <p class="copyright-text">© Sahil Sagar {year}.</p>
       <div class="links"> 
        <span> || </span>
        <Tooltip title="Visit Github">
        <a class="cl" href="https://github.com/sahilsagar01">Github</a>
        </Tooltip>
        <span> || </span>
        </div>
        </div>
        </div>
        </footer>
    </div>
}
export default Footer;