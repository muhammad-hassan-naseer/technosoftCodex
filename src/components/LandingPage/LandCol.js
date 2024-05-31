import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const LandCol = (props) => {
  return (
    <>
      <div className="p-3 rounded tech-block border card-height">
        {props.image}
        <div>
          <h4 className="heading text-underline">{props.head}</h4>
          <p className="text-left para">{props.para}</p>
          <p>
            <Link to={props.link}> {props.sign}</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default LandCol
