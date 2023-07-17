import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Time from "../components/Time";
import Content from "../components/Content";
import CreatCard from "../components/createCard";
import WeatherCard from "../components/weatherCard";

function Home(){

    return <div>
        <Header />
        <Time />
        <Search />
        <CreatCard />
        <Content />
        <Footer />
    </div>
}
export default Home;