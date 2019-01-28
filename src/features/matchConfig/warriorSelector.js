import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import OcticonButton from '../common/octiconButton'

import { colour, space } from '../common/theme'

const StyledRow = styled.section`
  display: flex;
  padding: ${space.m};
`

const StyledSelect = styled.select`
  border: 1px solid ${colour.white};
  padding: ${space.s};
  color: ${colour.white};
  background: transparent;
  width: 75%;
`

const WarriorSelector = ({ handleChange, list, handleRemove }) => (
  <StyledRow>
    <StyledSelect onChange={handleChange}>
      {list.map(warrior => {
        console.log(warrior)
        return (
          <option key={warrior.data.id} id={warrior.data.id}>
            {warrior.metaData.name}
          </option>
        )
      })}
    </StyledSelect>
    <OcticonButton iconName={`dash`} handleClick={handleRemove} />
  </StyledRow>
)

WarriorSelector.propTypes = {
  list: PropTypes.array,
  onSelect: PropTypes.func
}

WarriorSelector.defaultProps = {
  list: []
}

export default WarriorSelector
