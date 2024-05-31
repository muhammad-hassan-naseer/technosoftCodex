import React, { Component } from 'react'
import LandCol from './LandCol'

const LandCard = (props) => {
  return (
    <>
      <div className="col-md-4 mt-2">
        <LandCol
          head={props.head}
          para={props.para}
          image={props.image}
          sign={props.sign}
          link={props.link}
        />
      </div>
    </>
  )
}

export default LandCard
