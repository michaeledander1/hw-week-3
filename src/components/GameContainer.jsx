import * as React from 'react'
import Game from './Game'
import {connect} from 'react-redux'
import { newGame, makeGuess, clearGuess } from '../actions/game';
import { wrongGuessLimit, isWinner, gameFinished } from '../lib/game'


// I thought I should leave functions like winnerMessage in the component
// rather than a different file as they are not actions. Is this best practice?

const winnerMessage = (word, answer) => {
    if (isWinner(word, answer)) {
        return 'You Win!'
    } if (wrongGuessLimit(word, answer)) {
        return `You ran out of guesses! The word was ${word}.`

    } 
}

const checkGuess = (guess, guessedLetters) => {
    return guessedLetters.includes(guess)
}

const gameIsDone = (word, answer) => {
    if (gameFinished(word, answer)) {
        return 'Game is finished, please start a new one'
    }
}

class GameContainer extends React.PureComponent {

  componentDidMount() {
   this.props.newGame()
  }

  componentDidUpdate() {
    
  }

  render() {
    return <Game answer={this.props.game} guess={this.props.guess} 
    userGuess={this.props.makeGuess} newGame={this.props.newGame}
    clear={this.props.clearGuess} winnerMessage={winnerMessage} gameIsDone={gameIsDone}
    checkGuess={checkGuess} />
  }
}

const mapStateToProps = (state) => {
    return {
      game: state.newGame,
      guess: state.makeGuess,
    }
  }

export default connect(mapStateToProps, {newGame, makeGuess, clearGuess})(GameContainer)
