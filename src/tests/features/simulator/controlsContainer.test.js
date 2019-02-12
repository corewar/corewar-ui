import React from 'react'
import { shallow } from 'enzyme'

import { PureSimulatorControls } from 'features/simulator/controlsContainer.js'

it('renders without crashing', () => {
  shallow(<PureSimulatorControls />)
})
