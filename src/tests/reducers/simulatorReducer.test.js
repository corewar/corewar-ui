import { expect } from 'chai'
import { fromJS } from 'immutable'
import * as matchers from 'jest-immutable-matchers';

import simulatorReducer from './../../features/simulator/reducer'
import initialState from './../../features/simulator/initialState'

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
  SET_CORE_OPTIONS
} from './../../features/simulator/actions'

describe('when testing the simulator reducers', () => {

  beforeEach(() => {
    jest.addMatchers(matchers)
  })

  it('should return the initial state', () => {

    const action = {}

    const result = simulatorReducer(undefined, action)

    expect(result).to.deep.equal(initialState)

  })

  it('should handle the INIT action', () => {

    const action = {
      type: INIT
    }

    const result = simulatorReducer(undefined, action)

    expect(result).toEqualImmutable({
      isInitialised: true,
      roundResult: {},
      runProgress: 0
    })

    // expect(result.get('isInitialised')).to.equal(true)
    // expect(result.get('roundResult').equals(fromJS({}))).to.be.true
    // expect(result.get('runProgress')).to.equal(0)

  })

  it('should handle the STEP action', () => {

    const action = {
      type: STEP
    }

    const result = simulatorReducer(undefined, action)

    expect(result).to.deep.equal(initialState)

  })

  it('should handle the RUN_PROGRESS action', () => {

    const action = {
      type: RUN_PROGRESS,
      data: {
        runProgress: 50
      }
    }

    const result = simulatorReducer(undefined, action)

    expect(result.get('runProgress')).to.equal(50)

  })

  it('should handle the RUN action', () => {

    const action = {
      type: RUN
    }

    const result = simulatorReducer(undefined, action)

    expect(result.get('isRunning')).to.equal(true)

  })

  it('should handle the PAUSE action', () => {

    const action = {
      type: PAUSE
    }

    const result = simulatorReducer(undefined, action)

    expect(result.get('isRunning')).to.equal(false)

  })

  it('should handle the RUN_ENDED action', () => {

    const action = {
      type: RUN_ENDED,
      data: {
        winnerId: 0
      }
    }

    const result = simulatorReducer(undefined, action)

    expect(result.get('isRunning')).to.equal(false)
    expect(result.get('roundResult')).to.equal(action.data)

  })

  it('should handle the GET_CORE_INSTRUCTIONS action', () => {

    const action = {
      type: GET_CORE_INSTRUCTIONS,
      coreInfo: [1 ,2 ,3]
    }

    const result = simulatorReducer(undefined, action)

    expect(result.get('coreInfo')).to.equal(action.coreInfo)

  })

  it('should handle the SET_CORE_FOCUS action', () => {

    const action = {
      type: SET_CORE_FOCUS,
      focus: 24
    }

    const result = simulatorReducer(undefined, action)

    expect(result.get('focus')).to.equal(action.focus)

  })

  it('should handle the SET_PROCESS_RATE action', () => {

    const action = {
      type: SET_PROCESS_RATE,
      rate: 12
    }

    const result = simulatorReducer(undefined, action)

    expect(result.get('processRate')).to.equal(action.rate)

  })

  it('should handle the SET_CORE_OPTIONS action', () => {

    const action = {
      type: SET_CORE_OPTIONS,
      id: 1,
      coreSize: 2,
      cyclesBeforeTie: 3,
      minSeparation: 4,
      instructionLimit: 5,
      maxTasks: 6
    }

    const result = simulatorReducer(undefined, action)

    expect(result.includes({
      currentCoreOption: action.id,
      coreSize: action.coreSize,
      cyclesBeforeTie: action.cyclesBeforeTie,
      minSeparation: action.minSeparation,
      instructionLimit: action.instructionLimit,
      maxTasks: action.maxTasks
    })).to.be.true

  })

})