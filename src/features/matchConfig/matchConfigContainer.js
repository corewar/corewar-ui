import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { space, colour, font } from '../common/theme'

import MobilePage from '../common/mobilePage'
import OcticonButton from '../common/octiconButton'
import WarriorSelector from './warriorSelector'
import InterfaceModeContainer from '../interfaceModeSelector/interfaceModeContainer'
import FileManagerContainer from '../fileManager/fileManagerContainer'

import { addWarrior, removeWarrior } from './actions'

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

const MatchConfigContainer = ({ warriorList, selectedWarriors, addWarrior, removeWarrior }) => (
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
          {selectedWarriors.map((i, warrior) => (
            <StyledRow>
              <StyledLabel>{warrior.metaData.name}</StyledLabel>
              <OcticonButton iconName={`minus`} handleClick={() => removeWarrior(i)} />
            </StyledRow>
          ))}
        </StyledFormGroup>
        <StyledRow>
          <WarriorSelector warriorList={warriorList} onSelect={addWarrior} />
          <OcticonButton iconName={`plus`} handleClick={() => addWarrior} />
        </StyledRow>
      </section>
    </div>
    <InterfaceModeContainer />
    <FileManagerContainer />
  </MobilePage>
)

const mapStateToProps = state => ({
  warriorList: state.parser.warriors,
  selectedWarriors: state.config.selectedWarriors
})

export default connect(
  mapStateToProps,
  {
    addWarrior,
    removeWarrior
  }
)(MatchConfigContainer)

export { MatchConfigContainer as PureMatchConfigContainer }
