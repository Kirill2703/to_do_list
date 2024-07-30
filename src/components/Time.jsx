import React, { useState } from 'react';

const Time = () => {
    let getTime = new Date().toLocaleTimeString();

    const [ctime, setTime] = useState(getTime);
    
    const updateTime = () => {
        getTime = new Date().toLocaleTimeString()
        setTime(getTime)
    }
    setInterval(updateTime)
    
    return (
        <div>
            <h3>{ctime}</h3>
        </div>
    );
}

export default Time;
