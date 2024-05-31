import React, { Component } from 'react'

const CardCol = (props) => {
  return (
    <>
      <div className="tech-block p-3 rounded  ">
        {props.image}
        <div>
          <h4 className="heading">{props.head}</h4>
          <p className="text-left para">{props.para}</p>
          <p>
            <a
              style={{ color: '#5497da' }}
              href="/services/web-app-development/"
            >
              {props.sign}
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default CardCol
