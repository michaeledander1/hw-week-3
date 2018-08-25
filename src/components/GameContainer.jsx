import * as React from 'react'
import Game from './Game'
import {connect} from 'react-redux'
import { newGame, makeGuess } from '../actions/game';
import {  showGuess, wrongGuessCount, wrongGuessLimit, isWinner, gameFinished } from '../lib/game'

class GameContainer extends React.PureComponent {
  
  componentDidMount() {
   this.props.newGame()
 
  }

  render() {
    return <Game answer={this.props.game} guess={this.props.guess} />
  }
}

const mapStateToProps = (state) => {
    return {
      game: state.newGame,
      guess: state.makeGuess
    }
  }

export default connect(mapStateToProps, {newGame, makeGuess})(GameContainer)
