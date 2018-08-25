import * as React from 'react'
import {  showGuess, wrongGuessCount, wrongGuessLimit, isWinner, gameFinished } from '../lib/game'



export default class Game extends React.PureComponent {
    constructor(props) {
      super(props)
      this.state = {value: ''}
        
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleNewGame = this.handleNewGame.bind(this);
    }
    
    handleChange(event) {
      this.setState({value: event.target.value});
      
    }
    
    handleSubmit(event) {
      if (this.state.value) {
      this.props.userGuess(this.state.value)
      }
      this.state.value = ""
      event.preventDefault();
    }

    handleNewGame() {
       this.props.newGame()
       this.props.clear()
    }
    render() {
      return (
      <div>
        <h1>Time to play!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Type 1 letter:
            <input type="text" maxLength="1" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <br/>
        <h2>Guesses: {showGuess(this.props.answer, this.props.guess)}</h2><br/>
        <h3>Wrong Guesses: {wrongGuessCount(this.props.answer, this.props.guess)}</h3>
        <button type="button" onClick={this.handleNewGame}>New Game</button>
      </div>
      )
    }
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