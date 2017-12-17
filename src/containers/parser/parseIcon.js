import React from 'react'
import FontAwesome from 'react-fontawesome'

import './parseIcon.css'

const ParseIcon = ({ success }) => (

  <div className={`parse-icon`}>
    {
      success ?
      <FontAwesome name='check' /> :
      <FontAwesome className='error' name='times' />
    }
  </div>

)

export default ParseIcon