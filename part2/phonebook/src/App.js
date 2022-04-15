import { useState, useEffect } from 'react'
import axios from 'axios'

import Name from './components/Name.js'
import Input from './components/Input.js'
import Header from './components/Header.js'
import contactServices from './services/contacts.js'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState('')
  
  useEffect(() => {
    contactServices
      .getAll()
      .then(contacts => {
        setPersons(contacts)
        // console.log('from getAll', contacts)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    
    let arrayResult = persons.filter(element => element.name === newName)
    
    if (arrayResult.length > 0) {
      let result = window.confirm(`${newName} is already added to phonebook, replace old number with new one?`)
      let id = arrayResult[0].id
      if (result) {
        console.log(arrayResult[0].id)
        const newPerson = {
          name: newName,
          number: newNumber,
        }
        contactServices
        .update(id, newPerson)
        .then(returnedContact => {
          console.log('returnedConct', returnedContact)
          let newArray = persons.map(contact => contact.id === id ? newPerson : contact)
          setPersons(newArray)
        })
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      }
      contactServices
        .create(newPerson)
        .then(returnedContact => {
          setPersons(persons.concat(returnedContact))
          setNewName('')
          setNewNumber('')
        })
    }    
  }

  const handleDeleteContact = (id) => {
    const result = window.confirm('Are you sure you want to delete this contact?');
    if (result) {
      contactServices
        .deleteContact(id)
        .then(emptyArray => {
          let updatedPersons = persons.filter(contact => contact.id !== id)
          setPersons(updatedPersons)
        }) 
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
          {contactsToShow.map(contact =>
            <div>
              <Name key={contact.id} name={contact.name} number={contact.number} id={contact.id}/>
              <button key={contact.name} onClick={() => handleDeleteContact(contact.id)}>delete</button>
            </div>
            
          )}
        </ul>
      </div>
    </div>
  )
}

export default App
