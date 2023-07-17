import React, {useState, useEffect} from "react";
import axios from "axios"


function Search(){
const [weather , setWeather] = useState("");
const [nW , setNw] = useState("")

const handleChange = (e) => {
    const newValue = e.target.value
    setWeather(newValue)
}

const handleClick = (e) => {
    setNw(weather);
    e.preventDefault();
}


    return <div>
   <section id="search">
   <div>
        <h1>Search Your City Weather Here.</h1>
        <form>
           <div>
            <div className="searchArea">
            <h1>{nW}</h1>
             <input onChange={handleChange} className="search-box" type="text" placeholder="Search city"></input>
            <input onClick={handleClick} className="search-btn" type="submit" value="check" ></input>
            </div>
           </div>
        </form>
    </div>
   </section>
    </div>
}
export default Search;