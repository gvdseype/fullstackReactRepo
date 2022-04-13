import SingleMatch from './SingleMatch.js'
import '../App.css';
import '../App.js'
import {useState} from 'react'

const Country = ({name, country}) => {
  const [hidden, setHidden] = useState(true)
  const [button, setButton] = useState('show')

  const handleShowClick = () => {
    console.log(name)
    setHidden(!hidden)
    if (hidden) {
      setButton('hide')
    } else {
      setButton('show')
    }
  }


  let result = <div>
    <li>{name}</li><button onClick={handleShowClick}>{button}</button>
  </div>
  
  
  return (
    <div>
      {result}
      {!hidden ? <SingleMatch name={country.name.common} capital={country.capital[0]} area={country.area} languages={country.languages} flags={country.flags}/> : null}
    </div>
  )
}

export default Country