import Language from './Language.js'
import {useState, useEffect} from 'react'
import axios from 'axios'

const SingleMatch = ({name, capital, area, languages, flags, latlng}) => {
  let flag = flags.png
  let allLanguages = Object.values(languages)
  let lat = latlng[0]
  let lon = latlng[1]
  const [temperature, setTemperature] = useState([])
  const [wind, setWind] = useState('')
  const [icon, setIcon] = useState('')
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0d6b6affa820e54050e3ab698737026e`
  let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
  
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        console.log(response.data)
        setTemperature(Math.floor(response.data.main.temp - 273.15))
        setWind(response.data.wind.speed)
        setIcon(response.data.weather[0].icon)
      })
  }, [])

  return (
    <div>
      <h1>{name}</h1>
      <p>Capital {capital}</p>
      <p>Area {area}</p>
      <ul>
        {allLanguages.map(language =>
          <Language key={language} language={language}/>
        )}
      </ul>
      <img src={flag} />
      <p>temperature {temperature}°C</p>
      <img src={iconUrl}/>
      <p>wind {wind}m/s</p>
    </div>
  )
}

export default SingleMatch