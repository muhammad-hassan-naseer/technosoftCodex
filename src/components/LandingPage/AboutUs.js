import React from 'react'

const AboutUs = (props) => {
  return (
    <div>
      <div className="bg-light">
        <div className="container mt-5">
          <div className="row mt-5 mb-5">
            <div className={props.Data.cols1 + ' m-auto'}>
              <h3>{props.Data.heading}</h3>
              <p className="text-justify">{props.Data.img}</p>
            </div>
            <div className={props.Data.cols2 + ' m-auto'}>
              <h3 className="text-primary font-weight-bold">
                {props.Data.head}
              </h3>
              <p className="text-justify">{props.Data.para}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
