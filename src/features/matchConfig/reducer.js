import { ADD_WARRIOR, REMOVE_WARRIOR, SELECT_WARRIOR } from './actions'
import { insertItem, removeItem, replaceItem } from '../../helpers/arrayHelpers'

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
        selectedWarriors: insertItem(
          state.selectedWarriors.length,
          state.selectedWarriors,
          action.warrior
        )
      }

    case REMOVE_WARRIOR:
      console.log('remove at', action.index)
      return {
        ...state,
        selectedWarriors: removeItem(action.index, state.selectedWarriors)
      }

    case SELECT_WARRIOR:
      console.log('replace at', action.index, action.warrior)
      return {
        ...state,
        selectedWarriors: replaceItem(action.index, state.selectedWarriors, action.warrior)
      }

    default:
      return state
  }
}
