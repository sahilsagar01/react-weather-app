import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tooltip from '@mui/material/Tooltip';

function SocialLink(){
   return <div>
    <Tooltip title="not active">
    <a className="sIcon" href="/"><FacebookIcon color="action" /></a>
    </Tooltip>
    <Tooltip title="Visit instagram">
    <a className="sIcon" href="/"><InstagramIcon color="action" /></a>
    </Tooltip>
    <Tooltip title="not active">
    <a className="sIcon" href="https://www.instagram.com/sahilsagar.official/"><LinkedInIcon color="action"/></a>
    </Tooltip>
    </div> 
}
export default SocialLink;