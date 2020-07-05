import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({anecdote, vote}) => (
  <div>
    <p>{anecdote}</p>
    has {vote} votes
  </div>
)

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(6).fill(0))
  const [mostvoted, setMostvoted] = useState(0)
  
  const handleNext = () => setSelected(Math.floor(Math.random()*6))
 
  const handleVote = selected => {
    const copyOfVotes = [...votes]
    copyOfVotes[selected] += 1
    setVotes(copyOfVotes)
    setMostvoted(copyOfVotes.indexOf(Math.max(...copyOfVotes)))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display anecdote={anecdotes[selected]} vote={votes[selected]} />
      <Button handleClick={handleNext} text="next anecdote"/>
      <Button handleClick={() => handleVote(selected)} text="vote"/> 
      <h1>Anecdote with most votes</h1>
      <Display anecdote={anecdotes[mostvoted]} vote={votes[mostvoted]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)



