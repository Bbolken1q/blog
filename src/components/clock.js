import React, { useState, useEffect } from 'react';
import axios from 'axios';

async function getWeather() {
    console.log("fetching weather")
    let res = await axios.get("http://api.weatherapi.com/v1/forecast.json?key=dbb177881d9c4791a7d161414250701&q=auto:ip&days=1&dt=1")
    let response = []
    response.push(res.data.current.temp_c)
    response.push(res.data.forecast.forecastday[0].day.maxtemp_c)
    return response

}

function Clock() {
    const [date, setDate] = useState(new Date())
    const [temps, setTemps] = useState([null, null])

    useEffect(() => {
        // Update the time every minute
        setInterval(() => {
          setDate(new Date())
        }, 1000)
    })

    

    const fetchWeather = async () => {
        const weatherData = await getWeather()
        setTemps(weatherData) // Update the state with fetched temperature data
    }

    useEffect(() => {
        fetchWeather()
    }, [])
    

    return(
        <div className="clock"> <i>Jest</i> {date.getHours()}:{date.getMinutes().toString().length === 1 ? "0" + date.getMinutes() : date.getMinutes()}<i>, aktualna temperatura na zewnątrz wynosi </i>{Math.round(temps[0])}<i>°C z przewidywaną maksymalną temperaturą w dniu dzisiejszym wynoszącą</i> {Math.round(temps[1])}<i>°C</i></div> // 
    )
}

export default Clock