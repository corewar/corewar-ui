import {
  INIT,
  STEP,
  RUN,
  PAUSE,
  RUN_PROGRESS,
  RUN_ENDED,
  GET_CORE_INSTRUCTIONS,
  SET_CORE_FOCUS,
  SET_PROCESS_RATE,
  SET_CORE_OPTIONS,
  TOGGLE_SETTINGS
} from './actions'

// state
import initialState from './initialState'

// selectors
export const getSimulatorState = state => state.simulator

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INIT:
      return state.merge({ isInitialised: true, roundResult: {}, runProgress: 0 })


    case STEP:
      return state

    case RUN:
      return state.set('isRunning', true)

    case PAUSE:
      return state.set('isRunning', false)

    case RUN_PROGRESS:
      return state.set('runProgress', action.data.runProgress)

    case RUN_ENDED:
      return state.set('isRunning', false)
                  .set('roundResult', action.data)

    case GET_CORE_INSTRUCTIONS:
      return state.set('coreInfo', action.coreInfo)

    case SET_CORE_FOCUS:
      return state.set('focus', action.focus)

    case SET_PROCESS_RATE:
      return state.set('processRate', action.rate)

    case SET_CORE_OPTIONS:
      return state.set('currentCoreOption', action.id)
                  .set('coreSize', action.coreSize)
                  .set('cyclesBeforeTie', action.cyclesBeforeTie)
                  .set('minSeparation', action.minSeparation)
                  .set('instructionLimit', action.instructionLimit)
                  .set('maxTasks', action.maxTasks)

    case TOGGLE_SETTINGS:
      return state.set('displaySettings', !state.displaySettings)

    default:
      return state
  }
}

