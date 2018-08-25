import * as React from 'react'
import Game from './Game'
import {connect} from 'react-redux'
import { newGame } from '../actions/game';



class GameContainer extends React.PureComponent {

  componentDidMount() {
    this.props.newGame()
  }

  render() {
    return <Game />
  }
}

const mapStateToProps = (state) => {
    return {
      newGame: state.newGame
    }
  }

export default connect(mapStateToProps, {newGame})(GameContainer)
