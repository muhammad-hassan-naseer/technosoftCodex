import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Strategy = (props) => {
  return (
    <div>
      <div className={'row mt-5 ' + props.margin}>
        <div className="col-12">
          <div className="row no-gutters">
            <div className="col-md-8 m-auto">
              {' '}
              <h3 className="text-center text-md-left">{props.obj.head}</h3>
              <p className="text-justify">{props.obj.para}</p>
              <Link to="/contact"> {props.obj.sign}</Link>
            </div>
            <div className="col-4 text-right">
              <img
                src="https://media.mktg.workday.com/is/image/workday/illustration-people-pushing-globe-rocket-1?fmt=png-alpha&wid=1000"
                className="cycle-pic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Strategy
