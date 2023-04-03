import logo from '../logo.svg';
import React from 'react'

function Loader() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <img src={logo} className="landing-logo" alt="logo" />
        <p className='landing-text'>
          ....
        </p>
        </header>

    </div>
  )
}

export default Loader