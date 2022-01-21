import React, { useState, useEffect } from 'react';

const WeatherFetch = () => {
    // Our API Key & Hooks
    // Declare hooks that will be assigned appropriate values when we get data from the OpenWeatherMap Server.
    const key = "cec75cfdda440d2f5958a9411cccb517";
    const [feels_like, setFeelsLike] = useState("");
    const [mainTemp, setMainTemp] = useState("");
    const [description, setDescription] = useState("");
    const [main, setMain] = useState("");
    // const [iconID, setIconID] = useState("");
    const [input, setInput] = useState("");


    // Stretch Goal:
    // Users input
    // Show the city and the data from what city user typed in


    // const onChange = x => {
    //     setInput(x.target.value);
    // };


    // useEffect() function which will run when the component is mounted for the first time on the web page.
    // Display Liverpool, UK into console.log HURAY!
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Liverpool,UK&APPID=' + key + '&units=metric')
        .then((res) => res.json())
        .then((data) => {
            // Assigning values to hooks

            // The feels like value. This can be gotten from main.feels_like
            // The actual temperature value. This can be taken from main.temp
            // The weather condition. As the weather property is an array, we will extract it like so: weather[0].description
            // The weather parameter. This is also part of the weather array. So it will this property will be acquired like so: weather[0].main
            // The icon ID. This is purely for looks. Its also part of the weather array. The icon ID can be extracted by weather[0].icon


            setFeelsLike(data.main.feels_like);
            setMainTemp(data.main.temp);
            setDescription(data.weather[0].description);
            setMain(data.weather[0].main);
            // setIconID(data.weather[0].iconID)
            console.log(data);

            // We now have extracted the needed values from the data variable. All that’s left is to display it.
        })
    }, []);
    
  return (
      <div className='container'>
          <h3>Main Temperature: <span>{mainTemp}</span> Degrees Celsius</h3>
          <h3>Feels like: <span>{feels_like}</span> Degrees Celsius</h3>
          <h3>Weather Description: <span>{description}</span></h3>
          <h3>Today mainly it is: <span>{main}</span></h3>
      </div>
  )
}

export default WeatherFetch;
