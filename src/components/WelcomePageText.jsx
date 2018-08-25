import * as React from 'react'

export default function WelcomePageText(props) {
  console.log(props)
  return (
    <div>
      <h1>Welcome to Hangman!</h1>
      <button type="button">Start playing!</button>
    </div>
  )
}