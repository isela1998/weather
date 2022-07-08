import { useEffect, useState } from 'react';
import useCountries from '../hooks/useCountries'

const Card = ({ country, city, description, icon, wind, temp, humidity, clouds }) => {
  const nameCountry = useCountries(country)
  const imgURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
  const defaultURL = 'http://openweathermap.org/img/wn/03d@2x.png'

  const [isCelsius, setIsCelsius] = useState(true)
  const [temperature, setTemperature] = useState(0)

  const convertTemperature = () => {
    if (isCelsius) {
      setTemperature((temperature * 9/5) + 32);
      setIsCelsius(false);
    } else {
      setTemperature((temperature - 32) * 5/9);
      setIsCelsius(true);
    }
  };

  return (
    <div className="container">
      <h1>DATOS CLIMÁTICOS</h1>
      <h2>{nameCountry} - {city}</h2>
      <div className='card'>
        <div className="card-image">
          <img src={icon ? imgURL : defaultURL} alt="icon" />
        </div>
        <div className="card-info">
          <ul>
            <li>Clima: {description}</li>
            <li>Temperatura: {temperature ? temperature: temp} {isCelsius ? "°C" : "°F"}</li>
            <li>Viento: {wind} metro/seg.</li>
            <li>Humedad: {humidity} %</li>
            <li>Nubosidad: {clouds} %</li>
          </ul>
        </div><br />
      </div>
      <div className='card-footer'>
        <button onClick={convertTemperature}>Ver temperatura en {isCelsius ? "°F" : "°C"}</button>
      </div>
    </div>
  );
};
export default Card;