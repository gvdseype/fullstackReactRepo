import Language from './Language.js'

const SingleMatch = ({name, capital, area, languages, flags}) => {
  let flag = flags.png
  let allLanguages = Object.values(languages)
  console.log(allLanguages)
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
    </div>
  )
}

export default SingleMatch