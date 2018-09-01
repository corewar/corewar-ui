import { expect } from 'chai'

import parserReducer from './../../features/parser/reducer'
import initialState from './../../features/parser/initialState'

import {
  SET_CURRENT_WARRIOR
} from './../../features/parser/actions'

describe('when testing the parser reducer', () => {

  it('should return the initial state', () => {

    const action = {}

    const result = parserReducer(undefined, action)

    expect(result).to.deep.equal(initialState)

  })


  it('should handle the SET_CURRENT_WARRIOR action', () => {

    const action = {
      type: SET_CURRENT_WARRIOR,
      currentWarrior: {
        source: 'new warrior'
      }

    }

    const result = parserReducer(undefined, action)


    expect(result.get('currentWarrior')).to.equal(action.currentWarrior)
    expect(result.get('displayFileManager')).to.equal(false)

    // expect(result).to.deep.equal({
    //   currentWarrior: action.currentWarrior,
    //   displayFileManager: false
    // })

  })

})