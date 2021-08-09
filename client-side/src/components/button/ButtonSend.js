import React from 'react'

export default function ButtonSend() {
  return (
    <div className="speech-bubble">
      <div className="input-group">
        <button className="msg_send_btn" type="submit">
          <i className="fa fa-paper-plane" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}