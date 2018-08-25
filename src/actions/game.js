import { randomWord } from '../lib/game'

export const NEW_GAME = 'NEW_GAME'

export function newGame() {
  return {
    type: NEW_GAME,
    payload: randomWord()
    
  }
}

export const MAKE_GUESS = 'MAKE_GUESS'

export function makeGuess(letter) {
  return {
    type: MAKE_GUESS,
    payload: letter
  }
}

export const CLEAR_GUESS = 'CLEAR_GUESS'

export function clearGuess() {
    return {
        type: CLEAR_GUESS,
        payload: []
    }
}