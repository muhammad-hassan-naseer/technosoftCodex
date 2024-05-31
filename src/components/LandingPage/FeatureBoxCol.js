import React, { Component } from 'react'

const FeatureBoxCol = (props) => {
  return (
    <>
      <div>
        <div className="row no-gutters d-flex align-items-center text-center border rounded">
          <div className="col">{props.img}</div>
          <div className="col">
            {' '}
            <h2>{props.val}</h2>
            <h6>{props.tag}</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureBoxCol
