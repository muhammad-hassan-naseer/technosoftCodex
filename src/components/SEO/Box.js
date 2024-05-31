import React from 'react'

const Box = (props) => {
  return (
    <>
      <div className="col-md-4">
        <div className="custom-box mt-5 tech-block p-3 rounded block-shadow project">
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

export default Box
