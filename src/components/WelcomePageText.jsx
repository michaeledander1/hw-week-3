import * as React from 'react'
import { Link } from 'react-router-dom';

export default function WelcomePageText() {
  return (
    <div>
      <h1>Welcome to Hangman!</h1>
      <Link to={'/hangman'}><button type="button">Start playing!</button></Link>
    </div>
  )
}