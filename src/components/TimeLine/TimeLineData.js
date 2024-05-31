import React from 'react'

const TimeLineData = (props) => {
  return (
    <>
      <h5 className="text-dark">{props.data.headOne}</h5>
      <h4 className="text-primary">{props.data.headTwo}</h4>
      <p className="title text-dark"> {props.data.para}</p>
    </>
  )
}

export default TimeLineData
