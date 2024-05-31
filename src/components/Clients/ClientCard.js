import React, { Component } from 'react'

const ClientCard = (props) => {
  return (
    <>
      <div className="row tech-block border rounded  p-3  mt-3">
        <div className="col-md-4 text-center m-auto">
          <img
            src={process.env.PUBLIC_URL + props.pic}
            alt="EDX"
            class="pic  text-center"
          />
        </div>
        <div className="col-md-8">
          <h4 className="heading">{props.title}</h4>
          <p className="para">{props.para}</p>
        </div>
      </div>
    </>
  )
}

export default ClientCard
