import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import parser from '../features/parser/reducer'
import simulator from '../features/simulator/reducer'
import signup from '../features/signup/reducer'
import documentation from '../features/documentation/reducer'
import feedback from '../features/feedback/reducer'
import interfaceMode from '../features/interfaceModeSelector/reducer'
import match from '../features/matchConfig/reducer'

export default combineReducers({
  routing: routerReducer,
  parser,
  simulator,
  signup,
  documentation,
  feedback,
  interfaceMode,
  match
})
