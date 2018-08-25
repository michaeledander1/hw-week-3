import { MAKE_GUESS, CLEAR_GUESS } from "../actions/game";

export default (state = [], action = {}) => {
  switch(action.type) {
    case MAKE_GUESS:
      return [
        ...state,
        action.payload
      ]
    case CLEAR_GUESS:
      return action.payload
    default:
      return state
  }
}