import * as React from 'react'
import {  showGuess, wrongGuessCount, wrongGuessLimit, isWinner, gameFinished } from '../lib/game'



export default function Game(props) {
    
    console.log(props.guess)
    return (
    <div>
      <h1>Time to play!</h1>
      <label>
        Guess 1 letter:
        <input type="text" name="guess" /*value={} onChange={}*/ />
      </label>
      <button type="submit">Submit</button><br/>
      <h2>Guesses: {showGuess(props.answer, props.guess)}</h2>
      <button type="button">New Game</button>
    </div>
  )
}

// handleSubmit = (event) => {
//     event.preventDefault()
//     if (this.state.title) {
//       this.props.createAlbum(this.state.title)
//     }
//   }

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   render() {
//     return (<form onSubmit={this.handleSubmit}>
//       <label>
//         Title:
//         <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
//       </label>
//       <button type="submit">Add</button>
//     </form>)
//   }
// }