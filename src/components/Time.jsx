import React, { useState } from "react";

function Time(){
    setInterval(updateTime,1000)
    const day = new Date();
    const time = day.toLocaleTimeString();
    const [newTime, setNewTime] = useState(time)
    function updateTime(){
        const day = new Date();
        const time = day.toLocaleTimeString();
        setNewTime(time)
    }
    return <div>
    <h1 className="time">{newTime}</h1>
    </div>
}
export default Time;