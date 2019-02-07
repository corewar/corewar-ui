import React from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'

import Button from './button'

const ButtonText = styled.span`
  display: inline-block;
  font-size: 0.5em;
  padding-top: 0.2em;
`

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  .octicon-plus {
    padding-left: 0.3em;
  }

  .octicon-dash {
    padding-left: 0.4em;
  }
`

const OcticonButton = ({ enabled = true, active, handleClick, iconName, buttonText }) => (
  <Button enabled={enabled} active={active} handleClick={handleClick}>
    <ButtonGrid>
      <Octicon name={iconName} />
      {buttonText && <ButtonText>{buttonText}</ButtonText>}
    </ButtonGrid>
  </Button>
)

export default OcticonButton
