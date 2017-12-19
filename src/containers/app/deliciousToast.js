import React from 'react'

import ParseIcon from './../parser/parseIcon'

import './deliciousToast.css'

const DeliciousToast = ({ show, messages }) => (
  <aside className={`toast ${show ? `show` : ``}`}>
    <span className="sectionSubTitle">parse result</span>
    <ul>
    {
      messages && messages.map((msg) => {
        const msgType = messageTypeToString(msg.type)
        return <li key={msg} className={msgType}>
          {`[${msg.position.line} , ${msg.position.char}] ${msgType} : ${msg.text}`}
        </li>
      })
    }
    </ul>
    <ParseIcon success={!show} />
  </aside>
)

const messageTypeToString = (messageType) => {
  switch (messageType) {
      case 0: //MessageType.Error
          return 'ERROR';
      case 1: // MessageType.Warning
          return 'WARNING';
      case 2: // MessageType.Info
          return 'INFO';
      default:
          return '';
  }
}

export default DeliciousToast