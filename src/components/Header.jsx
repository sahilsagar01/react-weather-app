import React from "react";

function Header(){
    return <div>
        <header className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
       <div className="img-logo">
       <a href="/"><img className="logoimg" src="images/weather.png.jpg" /></a>
       <a class="navbar-brand" href="">Weather</a>
       </div>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul class="navbar-nav ms-auto">
        <li class="nav-item">
            <a class="nav-link" href="/Home">Home</a>
        </li>
         <li class="nav-item">
            <a class="nav-link" href="/About">About</a>
        </li>
         <li class="nav-item">
            <a class="nav-link" href="/Contact">Contacts</a>
        </li>
    </ul>
    </div>
</nav>
        </header>
    </div>
}
export default Header;