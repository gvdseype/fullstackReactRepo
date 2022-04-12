import { useState, useEffect } from 'react'
import axios from 'axios'

import Name from './components/Name.js'
import Input from './components/Input.js'
import Header from './components/Header.js'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

  const addName = (event) => {
    event.preventDefault()
    
    let arrayResult = persons.filter(element => element.name === newName)
    
    if (arrayResult.length > 0) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }    
  } 

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setShowAll(event.target.value)
  }

  const contactsToShow = showAll === '' ? persons : persons.filter(contact => contact.name.toLowerCase().slice(0, showAll.length) === showAll.toLowerCase())

  return (
    <div>
      <Header title={'Phonebook'}/>
      <Input type={'filter shown with'} value={showAll} onChange={handleFilterChange}/>
      <Header title={'add a new'}/>
      <form>
        <Input type={'name'} value={newName} onChange={handleNameChange}/>
        <Input type={'number'} value={newNumber} onChange={handleNumberChange}/>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <Header title={'Numbers'}/>
      <div>
        <ul>
          {console.log(contactsToShow)}
          {contactsToShow.map(contact =>
            <Name key={contact.name} name={contact.name} number={contact.number}/>
          )}
        </ul>
      </div>
    </div>
  )
}

export default App
