import React, { Component, useState } from 'react'


export default function Timer() {  
    const [ time, setTime ] = useState(0)
    function handleButtonClick() {

        setInterval((  ) => {            
            setTime(t => t+1)
        }, 1000);

    }
        return (
            <div>
                <button onClick={handleButtonClick}> {time} </button>
            </div>
        )    
}
