import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SocialLink(){
   return <div>
    <a className="sIcon" href="https://www.instagram.com/sahilsagar.official/"><FacebookIcon color="action" /></a>
    <a className="sIcon" href="https://www.instagram.com/sahilsagar.official/"><InstagramIcon color="action" /></a>
    <a className="sIcon" href="https://www.instagram.com/sahilsagar.official/"><LinkedInIcon color="action"/></a>
    </div> 
}
export default SocialLink;