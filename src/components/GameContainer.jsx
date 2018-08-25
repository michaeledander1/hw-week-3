import * as React from 'react'
import Game from './Game'
import {connect} from 'react-redux'
import { newGame, makeGuess } from '../actions/game';
import {  showGuess, wrongGuessCount, wrongGuessLimit, isWinner, gameFinished } from '../lib/game'



class GameContainer extends React.PureComponent {

  componentDidMount() {
    const answer = this.props.newGame()
    this.props.makeGuess('e')
  }

  render() {
    return <Game />
  }
}

const mapStateToProps = (state) => {
    return {
      game: state.newGame,
      makeGuess: state.makeGuess
    }
  }

export default connect(mapStateToProps, {newGame, makeGuess})(GameContainer)
