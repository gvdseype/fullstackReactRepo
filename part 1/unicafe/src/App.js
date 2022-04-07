import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const Title = ({title}) => <div><h1>{title}</h1></div>

const Button = ({onClick, text}) => <div><button onClick={onClick}>{text}</button></div>

const StatisticLine = ({text, value}) => {

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({amounts}) => {

  return (
    <div>
      <StatisticLine text="good" value={amounts[2]} />
      <StatisticLine text="neutral" value={amounts[1]} />
      <StatisticLine text="bad" value={amounts[0]} />
    </div>
  )
}

const Totals = ({amounts}) => {
  let totalClicks = amounts[0] + amounts[1] + amounts[2]
  let bad = amounts[0]
  let good = amounts[2]
  let total =  good - bad
  let average = total / totalClicks
  let positivity = good / totalClicks
  
  if (totalClicks === 0) {
    return (
      <div><p>No feedback given</p></div>
    )
  } else if (!average) {
    return (
      <div>
        <StatisticLine text="average" value={0} />
        <StatisticLine text="positivity" value={0} />
      </div>
    )
  } else {
    return (
      <div>
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positivity" value={positivity} />
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good + 1)
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
  }

  const addBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Title title={'give feedback'}/>
      <Button onClick={addGood} text={"good"}/>
      <Button onClick={addNeutral} text={"neutral"}/>
      <Button onClick={addBad} text={"bad"}/>
      <Title title={'statistics'}/>
      <Statistics amounts={[bad, neutral, good]}/>
      {/* <CurrentResult type={'all'} amount={bad + neutral + good}/> */}
      <Totals amounts={[bad, neutral, good]}/>
    </div>
  )
}

export default App;
