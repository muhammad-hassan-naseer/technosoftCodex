import React from 'react'

const SolutionBox = (props) => {
  return (
    <>
      <div className="col-md-4 mt-1 mt-md-0">
        <div className=" rounded p-3 tech-block">
          <img
            src={process.env.PUBLIC_URL + props.img}
            className={props.class}
          />

          <h4 className="heading">{props.head}</h4>
          <p className="text-left para">{props.para}</p>
        </div>
      </div>
    </>
  )
}

export default SolutionBox
