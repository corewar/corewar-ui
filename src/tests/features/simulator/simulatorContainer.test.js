import React from 'react'
import { shallow } from 'enzyme'

import { PureSimulatorContainer } from '../../../features/simulator/simulatorContainer'

describe('when testing the simulator container', () => {
  it('renders without crashing', () => {
    shallow(<PureSimulatorContainer />)
  })
})
