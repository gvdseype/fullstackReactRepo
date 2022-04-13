import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

import Result from './components/Result.js'

const App = () => {
  const [countries, setCountries] = useState([])
  const [showCountries, setShowCountries] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
    
  const handleFilterChange = (event) => {
    // console.log('current weather', weather)
    setShowCountries(event.target.value)
  }

  return (
    <div>
      <div>find countries <input value={showCountries} onChange={handleFilterChange}/></div>
      <div>
        <Result countries={countries} showCountries={showCountries} setShowCountries={setShowCountries}/>
      </div>
    </div>
  )
}
 
export default App;
