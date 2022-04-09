import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Note from './components/Note'

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <li key={note.id}>
            <Note key={note.id} note={note}/>
          </li>
          )}
      </ul>
    </div>
  )
}

export default App;
