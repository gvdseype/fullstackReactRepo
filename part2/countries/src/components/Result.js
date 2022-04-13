import Country from './Country.js'
import SingleMatch from './SingleMatch.js'

const Result = ({countries, showCountries, setShowCountries}) => {
  let selectedCountries = countries.filter(country => country.name.common.slice(0, showCountries.length) === showCountries)
  let result;
  // console.log(countries[0].capitalInfo.latlng);
  
  const provideSingleMatch = (tempCountry) => {
    return (
      <div>
        <SingleMatch name={tempCountry.name.common} capital={tempCountry.capital[0]} area={tempCountry.area} languages={tempCountry.languages} flags={tempCountry.flags} latlng={tempCountry.capitalInfo.latlng}/>
      </div>
    )
  }
  
  if (showCountries === '') {
    result = <div>'Provide the first letter of the country'</div>
  } else if (selectedCountries.length > 10) {
    result = <div>'Too many matches, specify another filter'</div>
  } else if (selectedCountries.length === 1){
    let tempCountry = selectedCountries[0]
    result = provideSingleMatch(tempCountry)
  } else {
    result = <div>
      <ul>
        {selectedCountries.map(country =>
          <Country key={country.name.common} name={country.name.common} country={country} showSingle={provideSingleMatch} setShowCountries={setShowCountries}/>
        )}
      </ul>
    </div>
  }
  
  return (
    <div>{result}</div>
  )
}

export default Result