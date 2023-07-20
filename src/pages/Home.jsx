import React, {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Time from "../components/Time";
import Content from "../components/Content";
import CreatCard from "../components/createCard";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { yellow } from '@mui/material/colors';
import { Typography } from "@mui/material";

function Home(){
    const [collectedCard , setCollectedCard] = useState([]);
    return <div>
        <Header />
        <Time />
        <Search collectedCard={collectedCard} setCollectedCard={setCollectedCard} />
        <Typography 
        sx={{mx: 2,my: 2}} 
        color="gray" 
        variant="h4">
        Weather cards<WbSunnyIcon fontSize="large" sx={{ color: yellow[800] }} />
        </Typography>
        <CreatCard collectedCard={collectedCard} setCollectedCard={setCollectedCard} />
        <Content />
        <Footer />
    </div>
}
export default Home;