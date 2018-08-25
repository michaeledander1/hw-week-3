import * as React from 'react'
import { Link } from 'react-router-dom';

export default function WelcomePageText() {
  return (
    <div>
      <h1>The History of Hangman</h1>
      <p>According to <a href="https://www.ranker.com/list/history-of-hangman-game/veronica-walsingham?utm_source=facebook&utm_medium=post&utm_campaign=HangmanOrigin_IMAGE">Ranker
      </a>, the game Hangman has some pretty dark roots:<br/>"Occasionally, a criminal had the opportunity to play Rite of Words and Life, in which the executioner would
       pick a word and the criminal guessed said word through choosing letters — which is exactly where hangman derives. Solving the word before the blanks 
       were filled would spare the guessing criminal's life. Not solving the word would seal the victim's fate. And so, when you’re
       drawing the gallows and hangman while playing hangman, you’re drawing exactly what would happen back in the 17th century."</p>
      <Link to={'/hangman'}><button type="button">Now Play!</button></Link>
    </div>
  )
}