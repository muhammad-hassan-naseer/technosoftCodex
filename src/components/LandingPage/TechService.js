import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const TechService = (props) => {
  return (
    <div className="sstudy1 rounded" id={props.serviceData.id}>
      <div className="ttransparent-dark">
        <div className="container pb-3">
          <h4 className="text-dark-orange font-weight-bold pt-2">
            {props.serviceData.tagLine}
          </h4>
          <p className="text-justify text-white">{props.serviceData.para}</p>
          <a href="https://tokens-b8a17.web.app/">
            {props.serviceData.btn}
          </a>{' '}
        </div>
      </div>
    </div>
  )
}

export default TechService
