import React from 'react'

export default function Layout(props) {
  const { children } = props
  return (
    <div className="container vh-100">
      <div className="row vh-100">
        <div className="col self-align-center">
          { children }
        </div>
      </div>
    </div>
  )
}