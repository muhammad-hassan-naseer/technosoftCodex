import React from 'react'

const BoxTwo = (props) => {
  return (
    <>
      <div className="col-md-4">
        <div className="boxTwo mt-5 text-color tech-block p-3 rounded project">
          {props.font}
          <p className="mt-3 text-dark para font-weight-bold">{props.head}</p>
        </div>
      </div>
    </>
  )
}

export default BoxTwo
