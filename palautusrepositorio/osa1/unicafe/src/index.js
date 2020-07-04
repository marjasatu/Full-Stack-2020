import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({header}) => (
  <h1>{header}</h1>
)

const StatisticLine = props => 
  <tr>
    <td>{props.name}</td>
    <td>{props.value}</td>
  </tr>


const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const Statistics = ({good, bad, neutral}) => {
  const allClicks = good + bad + neutral
  const average = (good-bad)/allClicks
  const positive = good/allClicks * 100 + " %"

  if (allClicks === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine name ='good' value={good} />
        <StatisticLine name ='neutral' value={neutral} />
        <StatisticLine name ='bad' value={bad} />
        <StatisticLine name ='all' value={allClicks} />
        <StatisticLine name ='average' value={average} />
        <StatisticLine name ='positive' value={positive} />
      </tbody>
    </table>
  )  
}
  

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <Header header="give feedback"/>
      <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad+1)} text="bad" />
      <Header header="statistics"/>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)