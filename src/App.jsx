import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact";

function App(){
    return <div>
       <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
       </BrowserRouter>
    </div>
}
export default App;