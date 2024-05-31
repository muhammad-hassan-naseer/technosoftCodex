import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const AdCol = (props) => {
  return (
    <>
      <div className=" p-3 rounded border advantage-height">
        {props.image}
        <div>
          <h4 className="text-dark text-underline">{props.head}</h4>
          <p className="text-left">{props.para}</p>
          <p>
            <Link to={props.link}> {props.sign}</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default AdCol
