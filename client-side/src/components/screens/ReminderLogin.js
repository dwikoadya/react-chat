import React from 'react'
import { Link } from 'react-router-dom'

export default function ReminderLogin(props){
  const { path } = props
  return(
    <div>
      <p>
      <br />
        Already have an account ? <Link to={path}> Login! </Link>
      </p>
    </div>
  )
}