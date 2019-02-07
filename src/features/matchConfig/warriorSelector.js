import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import OcticonButton from '../common/octiconButton'

import { colour, space } from '../common/theme'

const StyledRow = styled.section`
  display: flex;
  padding-top: ${space.m};
`

const StyledSelect = styled.select`
  border: 1px solid ${colour.white};
  padding: ${space.s};
  color: ${colour.white};
  background: transparent;
  width: 75%;
`

const Box = styled.div`
  border: 1px solid ${colour.white};
  padding: ${space.s};
  margin-left: ${space.m};
`

const WarriorSelector = ({ handleChange, list, handleRemove }) => (
  <StyledRow>
    <StyledSelect onChange={handleChange}>
      {list.map(warrior => (
        <option key={warrior.data.id} id={warrior.data.id}>
          {warrior.metaData.name}
        </option>
      ))}
    </StyledSelect>
    <Box>
      <OcticonButton iconName={`dash`} handleClick={handleRemove} />
    </Box>
  </StyledRow>
)

WarriorSelector.propTypes = {
  list: PropTypes.array,
  handleChange: PropTypes.func,
  handleRemove: PropTypes.func
}

WarriorSelector.defaultProps = {
  list: []
}

export default WarriorSelector
