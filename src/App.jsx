import axios from 'axios';
import Card from './components/Card'
import useWeather from './hooks/useWeather';
import useBackground from './hooks/useBackground';

function App() {
  const dataWeather = useWeather()
  const back = useBackground(dataWeather.weather?.[0].icon)

  document.body.style.backgroundImage = `url(${back})`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundRepeat = 'no-repeat';
  
  return (  
    <Card country={dataWeather.sys?.country} city={dataWeather.name} icon={dataWeather.weather?.[0].icon} description={dataWeather.weather?.[0].description} temp={dataWeather.main?.temp} humidity={dataWeather.main?.humidity} clouds={dataWeather.clouds?.all} wind={dataWeather.wind?.speed} />
  )
}

export default App

