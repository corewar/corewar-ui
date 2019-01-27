import React from 'react'
import PropTypes from 'prop-types'

const WarriorSelector = ({ onSelect, warriorList }) => (
  <select onSelect={onSelect}>
    {warriorList.map(warrior => (
      <option key={warrior.data.id} id={warrior.data.id}>
        {warrior.metaData.name}
      </option>
    ))}
  </select>
)

WarriorSelector.propTypes = {
  warriorList: PropTypes.array,
  onSelect: PropTypes.func
}

WarriorSelector.defaultProps = {
  warriorList: []
}

export default WarriorSelector
