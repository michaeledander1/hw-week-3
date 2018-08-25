import { MAKE_GUESS } from "../actions/game";

export default (state = [], action = {}) => {
  switch(action.type) {
    case MAKE_GUESS:
      return [
        ...state,
        action.payload
      ]
    
    default:
      return state
  }
}