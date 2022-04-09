import './App.css';
import { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>

const Highest = ({array, anecdotes}) => {
  const highestVote = Math.max(...array);
  const index = array.indexOf(highestVote)
  console.log('highest votes', highestVote)
  console.log('index of higest vote', index)
  console.log(anecdotes[index])
  return (
    <div>{anecdotes[index]} has {highestVote} votes</div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [array, setArray] = useState([0, 0, 0, 0, 0, 0, 0])

  const generateRandom = () => {
    let max = anecdotes.length 
    let random = Math.floor(Math.random() * max)
    setSelected(random)
  }

  const addVote = () => {
    const newArray = [...array]
    newArray[selected] = newArray[selected] + 1
    setArray(newArray)
  }

  return (
    <div>
      <Title text={'Anecdote of the Day'}/>
      <p>{anecdotes[selected]}</p>
      <p>has {array[selected]} votes</p>
      <button onClick={addVote}>vote</button>
      <button onClick={generateRandom}>next anecdote</button>
      <Title text={'Anecdote with the most votes'}/>
      <Highest array={array} anecdotes={anecdotes}/>
    </div>
  )
}

export default App;
