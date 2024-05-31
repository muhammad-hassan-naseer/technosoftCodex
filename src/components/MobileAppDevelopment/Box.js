import React from 'react'

const Box = (props) => {
  return (
    <>
      <div className="col-md-4">
        <div className="box mt-5 tech-block p-3 rounded project">
          {props.font}
          <p className="mt-3 para font-weight-bold">{props.head}</p>
        </div>
      </div>
    </>
  )
}

export default Box
