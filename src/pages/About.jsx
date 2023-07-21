import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About(){
    return <div>
        <Header />
        <section id="about">
    <div class="about">
        <h1 class="pageHeading">About</h1>
        <p class="aboutI">Weather today is a weather forcast app, it is here for helping you to finding your local weather very easily for free. </p>
       <div className="facH">
       <h2>we are providing you.</h2>
        <div class="fac">
            <h5>Temperature:- </h5><p>You can get your local temperature by one click.</p>
            <h5>Weather:- </h5><p>You can find your local weather before any of your plans.</p>
            <h5> Wind Speed:- </h5><p>Maximum wind speed of your area.</p>
            <h5>Humidity:- </h5><p>You can also get Humidity presented in atmosphere.</p>
        </div>
       </div>
        
        <h4 class="help">If you have any query or if you want to ask something <a href="/contact"><small className="text-muted ">Contact Us</small></a>. I love to help you.</h4>  
    </div>

</section>
        <Footer />
    </div>
}
export default About;