import React from 'react'

const FerrisBox = (props) => {
  return (
    <>
      <div className="col-md-4 mt-3">
        <div className="bg-white text-dark  text-center p-3 rounded rotate">
          {props.head}
        </div>
      </div>
    </>
  )
}

export default FerrisBox
