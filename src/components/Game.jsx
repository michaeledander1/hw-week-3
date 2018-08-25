import * as React from 'react'
import {  showGuess, wrongGuessCount } from '../lib/game'



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
      } this.setState({value: ''})
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
        </form><br/>
        <h2>Word: {showGuess(this.props.answer, this.props.guess)} </h2><br/>
        <h3>Wrong Guesses: {wrongGuessCount(this.props.answer, this.props.guess)} <br/>
          Guesses: {this.props.guess.join(',')}</h3><br/>
        <h3>{this.props.winnerMessage(this.props.answer, this.props.guess)}<br/>
          {this.props.gameIsDone(this.props.answer, this.props.guess)}</h3>
        <button type="button" onClick={this.handleNewGame}>New Game</button>
      </div>
      )
    }
}
