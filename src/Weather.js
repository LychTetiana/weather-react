import React from "react";
import axios from "axios";
import { Dna } from 'react-loader-spinner';

export default function Weather(props) {
function handleResponse(response) {
    alert (`The weather in ${response.data.name} is ${response.data.main.temp} °C`);
}
    
    let apiKey = "8a104eff40d67002b71f619e6f4833ec";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
return (
    <Dna
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
  />
)
  }
