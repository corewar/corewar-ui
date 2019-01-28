import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { space, colour, font } from '../common/theme'

import MobilePage from '../common/mobilePage'
import OcticonButton from '../common/octiconButton'
import WarriorSelector from './warriorSelector'
import InterfaceModeContainer from '../interfaceModeSelector/interfaceModeContainer'
import FileManagerContainer from '../fileManager/fileManagerContainer'

import { addWarrior, removeWarrior, selectWarrior } from './actions'

const StyledFormGroup = styled.section`
  width: 100%;
  padding: ${space.m};

  display: grid;
  grid-template-rows: ${space.l} ${space.l};

  color: ${colour.white};
  font-size: ${space.m};
`

const StyledLabel = styled.label`
  color: ${colour.white};
  font-family: ${font.code};
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

const MatchConfigContainer = ({
  warriorList,
  selectedWarriors,
  selectWarrior,
  addWarrior,
  removeWarrior
}) => (
  <MobilePage mobile>
    <div>Sidebar</div>
    <div>
      <StyledFormGroup>
        <StyledLabel htmlFor="round-count">Rounds</StyledLabel>
        <StyledInput id="round-count" defaultValue="10" />
      </StyledFormGroup>
      <section>
        <StyledFormGroup>
          <StyledLabel>Warriors</StyledLabel>
        </StyledFormGroup>
        {selectedWarriors && selectedWarriors.length > 0 ? (
          selectedWarriors.map((warrior, i) => (
            <WarriorSelector
              list={warriorList}
              handleChange={() => selectWarrior(i)}
              handleRemove={() => removeWarrior(i)}
            />
          ))
        ) : (
          <p>No warriors selected</p>
        )}
        <StyledRow>
          <OcticonButton iconName={`plus`} handleClick={() => addWarrior(warriorList[0])} />
        </StyledRow>
      </section>
    </div>
    <InterfaceModeContainer />
    <FileManagerContainer />
  </MobilePage>
)

const mapStateToProps = state => ({
  warriorList: state.parser.warriors, //.concat(state.parser.warriorLibrary)
  selectedWarriors: state.config.selectedWarriors
})

export default connect(
  mapStateToProps,
  {
    addWarrior,
    removeWarrior,
    selectWarrior
  }
)(MatchConfigContainer)

export { MatchConfigContainer as PureMatchConfigContainer }
