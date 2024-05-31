import React from 'react'

const Benefits = (props) => {
  return (
    <div>
      <div className="row mt-2">
        <div className="col-md-6 m-auto">
          <h3>{props.benefits.head}</h3>
          {props.benefits.para}
        </div>
        <div className="col-md-6 text-right m-auto">{props.benefits.img}</div>
      </div>
    </div>
  )
}

export default Benefits
