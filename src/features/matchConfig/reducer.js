import { ADD_WARRIOR, REMOVE_WARRIOR } from './actions'

// state
import initialState from './initialState'

// selectors
export const getConfigState = state => state.parser

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_WARRIOR:
      console.log('add', action.warrior)
      return {
        ...state,
        selectedWarriors: [...state.selectedWarriors, action.warrior]
      }

    case REMOVE_WARRIOR:
      return {
        ...state,
        selectedWarriors: state.selectedWarriors.filter(
          warrior => warrior.data.id !== action.warrior.data.id
        )
      }

    default:
      return state
  }
}
