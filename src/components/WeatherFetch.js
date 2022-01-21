import React, { useState, useEffect } from 'react';

const WeatherFetch = () => {
    // Our API Key & Hooks
    // Declare hooks that will be assigned appropriate values when we get data from the OpenWeatherMap Server.
    const key = "cec75cfdda440d2f5958a9411cccb517";
    const [feels_like, setFeelsLike] = useState("");
    const [mainTemp, setMainTemp] = useState("");
    const [description, setDescription] = useState("");
    const [main, setMain] = useState("");
    const [iconID, setIconID] = useState("");


    // useEffect() function which will run when the component is mounted for the first time on the web page.
    // Will be adding more to it later on...
    useEffect(() => {

    }, []);
    
  return (
      <div>

      </div>
  )
}

export default WeatherFetch;
