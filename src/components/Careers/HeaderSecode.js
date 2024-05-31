import React from 'react'
import { Link } from 'react-router-dom'

const HeaderSecode = () => {
  return (
    <div className="bg-light">
      <Link to="/">
        {' '}
        <img
          src={process.env.PUBLIC_URL + '/techno.png'}
          className="ml-3 job-head"
        />{' '}
      </Link>
    </div>
  )
}

export default HeaderSecode
