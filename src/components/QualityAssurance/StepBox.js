import React from 'react'

const StepBox = (props) => {
  return (
    <>
      <div className="col-md-4">
        <div className=" project block-shadow p-3 rounded">
          <label className="p-4 step-box step font-weight-bold mt-4">
            {props.step}
          </label>
          <h3 className="text-primary">{props.head}</h3>
          <p className="text-center text-primary">{props.para}</p>
        </div>
      </div>
    </>
  )
}

export default StepBox
