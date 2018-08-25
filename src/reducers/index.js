import { combineReducers } from 'redux'
import  newGame  from './newGame'
import makeGuess from './makeGuess'

export default combineReducers({
  newGame,
  makeGuess
})