import React, { Component } from 'react'

const Services = (props) => {
  return (
    <>
      <div className="col-md-6  py-4 border block-hover">
        <div className="row no-gutters">
          <div className="col-4 text-center ">{props.image}</div>
          <div className="col-8">
            {' '}
            <h4>{props.head}</h4>
            <p className="text-justify">{props.para}</p>
            <a href="/industries/education/" className="learn-hover">
              <button className="btn btn-outline-success">View Our Work</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
