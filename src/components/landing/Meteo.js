import { useEffect, useState } from "react";
import axios from "axios";

export default function Meteo() {
  const [Meteo, setMeteo] = useState();
  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=1934b526c9cb2f1056dd828888e65db3`
      )
      .then(({ data }) => {
        //console.log(data);
        return setMeteo(
          <>
  
            <h2>Meteo à {data.name}</h2>
            <h4>{Math.floor(data.main.temp - 273.15)}°C</h4>
            <p>{data.weather[0].description}</p>
          </>
        );
      });
  }, []);

  return (
    <div className="meteo">
      {Meteo}
    </div>
  );
}
