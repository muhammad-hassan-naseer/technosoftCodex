import React from 'react'

const WebProject = (props) => {
  return (
    <>
      <div className="col-md-4 mt-5  text-center on-hover ">
        <div className="project">
          <a href={props.webLink}>
            <img
              src={process.env.PUBLIC_URL + props.img}
              className={props.class}
            />
            <h5 className="text-center text-dark mt-2 font-weight-bold">
              {props.web}
            </h5>
          </a>
        </div>
      </div>
    </>
  )
}

export default WebProject
