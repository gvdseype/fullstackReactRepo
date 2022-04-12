### A note on React version

Version 18 of React was released late March 2022. The code in material should work as it is with the new React version. However, some libraries might not yet be compatible with React 18. At the moment of writing (4th April) at least the Apollo client used in [part 8](https://fullstackopen.com/en/part8) does not yet work with most recent React.

In case you end up in a situation where your application breaks because of library compatibly problems, *downgrade* to the older React by changing the file *pacgage.json* as follows:

```
{
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"
  },
  // ...
}
```

After the change is made, reinstall dependencies by running

```
npm install

```



### Setting up a React app

The easiest way to get started by far is by using a tool called [create-react-app](https://github.com/facebook/create-react-app). It is possible (but not necessary) to install *create-react-app* on your machine if the *npm* tool that was installed along with Node has a version number of at least *5.3*.

Let's create an application called *part1* and navigate to its directory.

```
npx create-react-app part1
cd part1
```

The application is run as follows

```
npm start
```

**WARNING** create-react-app will automatically turn your project into a git-repository unless you create your application inside of an existing git repository. **Most likely you do not want each of your projects to be a separate repository**, so simply run the *`rm -rf .git`* command at the root of your application.

In some situations you may also have to run the command below from the root of the project:

```
rm -rf node_modules/ && npm i
```

### Controlled component

```javascript
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(props.notes)
  
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
          <input value={newNote}/>
            onChange=handelNoteChange
          <button type='submit'>save</button>
      </form>
    </div>
  );
}

export default App;
```

Here we have an event handler that synchronizes the changes made to the input with the component's state through the `handleNoteChange` which leverage the `setNewNote` function. 

The `onChange` attribute of the form's `input` element allows an event handler to be registered every time something is inputted in the input field. 
