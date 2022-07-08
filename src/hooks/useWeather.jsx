import axios from "axios";
import { useEffect, useState } from "react";

const useWeather = () => {
  const key = '1423c9eddd3a0a4f2ddfcdf8ae11e228'
  const [data, setData] = useState({});

  useEffect(() => {
    const success = pos => {
      const crd = pos.coords
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&lang=es&appid=${key}`).then(res => setData(res.data));
    }
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return data;
};

export default useWeather;