import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const CareersCard = (props) => {
  return (
    <>
      <div className="col-md-4 mt-4">
        <Link
          to={'/job-description-detail/' + props.id}
          className="btn text-center job-detail font-weight-bold link-card"
        >
          <div className="card rounded career-card">
            <div className="image text-center ">
              <h5 className="text-primary font-weight-bold pt-4">
                {props.tag}
              </h5>
              <p className="mt-4 text-success">{props.position}</p>
              <hr />
              <p className="font-weight-bold">{props.res}</p>
              <hr />
              <p>{props.office}</p>
              <p className="font-weight-bold text-primary">@Technosoft 2021</p>
            </div>

            {/* <Link to='/job-description-detail' params={{ testvalue: "hello" }} className='btn text-center job-detail font-weight-bold' >View Detail</Link> */}
          </div>
        </Link>
      </div>
    </>
  )
}

export default CareersCard
