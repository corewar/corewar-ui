import React from 'react'
import { shallow } from 'enzyme'

import Instruction from '../../../features/simulator/instruction'
import { ModeType } from '../../../helpers/coreEnums'

it('renders without crashing', () => {
  const props = {
    isFocussed: false,
    instruction: {
      aOperand: { mode: ModeType.Immediate, address: 0 },
      bOperand: { mode: ModeType.Immediate, address: 0 }
    }
  }

  shallow(<Instruction {...props} />)
})
