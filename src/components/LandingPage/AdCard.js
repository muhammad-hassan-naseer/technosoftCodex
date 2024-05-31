import React, { Component } from 'react'
import AdCol from './AdCol'

const AdCard = (props) => {
  return (
    <>
      <div className="col-md-4 mt-2">
        <AdCol
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

export default AdCard
