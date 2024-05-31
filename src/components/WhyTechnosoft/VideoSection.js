import React from 'react'

const VideoSection = () => {
  return (
    <div className="bg-hover indus-sec">
      <h3 className="mt-3 text-dark mt-5 text-center mb-2 text-underline">
        Industries
      </h3>
      <p className="text-center text-dark font-weight-bold">
        Major Areas we are covering
      </p>
      <div id="background-img">
        <div className="tttransparent-dark">
          <label
            className="text-white sector-padding border text-center"
            id="sec-one"
          >
            PUBLIC SECTOR
            <p>Contributing big role in public sector</p>
          </label>
          <label
            className="text-white sector-padding-two border text-center"
            id="sec-two"
          >
            FINANCE SECTOR
            <p>Having huge contribution in finance</p>
          </label>
          <label
            className="text-white sector-padding-three border text-center"
            id="sec-three"
          >
            TELECOMMUNICATION SECTOR
            <p>Providing necessary enterprise software</p>
          </label>
          <label
            className="text-white sector-padding-four border text-center"
            id="sec-four"
          >
            RETAIL SECTOR
            <p>Playing increasingly important role in retail</p>
          </label>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
