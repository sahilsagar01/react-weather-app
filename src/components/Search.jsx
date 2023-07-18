import React, {useEffect, useState} from "react";
import axios from "axios";
import BigCard from "./bigCard";


function Search(){
    const [value, setValue] = useState("");
    const [weather, setWeather] = useState("");
    const [weatherData, setWeatherData] = useState({
        temperature: "",
        weather: "",
        windSpeed: "",
        humidity: "",
        country: "",
        city: "",
        image: ""
    })
    const handleChange = (e) =>{
        const input = e.target.value;
        setValue(input)
    }
const saveCard = async () => {
    try{
        const api = "http://localhost:5004/card/post";
        const postCard = await axios.post(api, {
            temperature: weatherData.temperature,
             weather: weatherData.weather,
             windSpeed: weatherData.windSpeed,
             humidity: weatherData.humidity,
             country: weatherData.country,
             city: weatherData.city,
             image: weatherData.image
        })
        console.log(postCard)
    }
    catch(err){
        console.log(err)
    }

}
const onSearch = async (weather) => {
    try{ 
        const api = "http://localhost:5004/card/show";
    const findCard = await axios.post(api, {
        cityName: value
    })
    setWeatherData({
        temperature: findCard.data.temperature,
        weather: findCard.data.weather,
        windSpeed: findCard.data.windSpeed,
        humidity: findCard.data.humidity,
        country: findCard.data.country,
        city: findCard.data.city,
        image: findCard.data.image
    })
    console.log(findCard.data)
    }
    catch(err){
        console.log(err)
    }

}

const handleClick = async(evn) => {
        try{
            setWeather(value);
        onSearch(weather);
        }
        catch(err){
            console.log(err)
        }
    evn.preventDefault();
}
useEffect(() => {
    const facthCards = async () => {
        try{
        const api = "http://localhost:5004/card"
        const cards = await axios.get(api);
        console.log(cards);
        }
        catch(err){
            console.log(err)
        }
    }
    facthCards();
},[])

    return <div>
   <section id="search">
   <div>
        <h1>Search Your City Weather Here.</h1>
        <form onClick={handleClick}>
            <div className="searchArea">
            <h1>{weather}</h1>
             <input onChange={handleChange} className="search-box" type="text" placeholder="Search city"></input>
            <input className="search-btn" type="submit" value="check" ></input>
            </div>
        </form>
    </div>
   </section>
   <BigCard
   temperature={weatherData.temperature}
   weather={weatherData.weather}
   windSpeed={weatherData.windSpeed}
   humidity={weatherData.humidity}
   city={weatherData.city}
   country={weatherData.country}
   image={weatherData.image}
   onSave={saveCard}
   />
    </div>
}
export default Search;