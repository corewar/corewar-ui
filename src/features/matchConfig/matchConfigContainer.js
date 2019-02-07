import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { space, colour, font } from '../common/theme'

import MobilePage from '../common/mobilePage'
import Button from '../common/button'
import OcticonButton from '../common/octiconButton'
import WarriorSelector from './warriorSelector'
import InterfaceModeContainer from '../interfaceModeSelector/interfaceModeContainer'
import FileManagerContainer from '../fileManager/fileManagerContainer'

import { addWarrior, removeWarrior, selectWarrior, start } from './actions'

const StyledFormGroup = styled.section`
  width: calc(100% - ${space.m} - ${space.m});
  padding: ${space.m};
  margin-bottom: ${space.l};

  display: grid;
  grid-row-gap: ${space.s};

  color: ${colour.white};
  font-size: ${space.m};
`

const StyledLabel = styled.label`
  color: ${colour.white};
`

const StyledInput = styled.input`
  background-color: transparent;
  border: 1px solid ${colour.white};
  width: 25%;
  color: ${colour.white};
  padding: ${space.s};
  font-family: ${font.code};
  font-size: ${space.m};
`

const StyledRow = styled.section``

const Box = styled.div`
  border: 1px solid ${colour.white};
  padding: ${space.s};
  width: ${space.l};
`

const StyledMatchConfig = styled.section`
  padding: ${space.m};
`

const StyledSidebar = styled.section`
  border-right: 1px solid ${colour.darkbg};
`

const MatchConfigContainer = ({
  warriorList,
  selectedWarriors,
  selectWarrior,
  addWarrior,
  removeWarrior,
  start
}) => (
  <MobilePage mobile>
    <StyledSidebar>Sidebar</StyledSidebar>
    <StyledMatchConfig>
      <StyledFormGroup>
        <StyledLabel htmlFor="round-count">Rounds</StyledLabel>
        <StyledInput id="round-count" defaultValue="10" />
      </StyledFormGroup>

      <StyledFormGroup>
        <StyledLabel>Warriors</StyledLabel>
        {selectedWarriors && selectedWarriors.length > 0 ? (
          selectedWarriors.map((warrior, i) => (
            <WarriorSelector
              list={warriorList}
              warrior={warrior}
              handleChange={() => selectWarrior(i)}
              handleRemove={() => removeWarrior(i)}
            />
          ))
        ) : (
          <StyledLabel>No warriors selected</StyledLabel>
        )}
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledRow>
          <Box>
            <OcticonButton iconName={`plus`} handleClick={() => addWarrior(warriorList[0])} />
          </Box>
        </StyledRow>
      </StyledFormGroup>
      <Button enabled={true} active={true} handleClick={start}>
        Start
      </Button>
    </StyledMatchConfig>
    <InterfaceModeContainer />
    <FileManagerContainer />
  </MobilePage>
)

const mapStateToProps = state => ({
  warriorList: state.parser.warriors, //.concat(state.parser.warriorLibrary)
  selectedWarriors: state.match.selectedWarriors
})

export default connect(
  mapStateToProps,
  { start, addWarrior, removeWarrior, selectWarrior }
)(MatchConfigContainer)

export { MatchConfigContainer as PureMatchConfigContainer }
