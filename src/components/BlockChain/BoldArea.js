import React from 'react'
import { Link } from 'react-router-dom'
const BoldArea = (props) => {
  return (
    <div className="bg-light mt-5 py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <p className="text-secondary font-weight-bold">Reach out to us</p>
            <h4 className="text-primary">{props.boldData.head}</h4>
            <Link to="contact">
              <button className="btn btn-outline-primary">Get in Touch</button>
            </Link>
            <a href="https://tokens-b8a17.web.app/">
              <button className="btn btn-success ml-0 ml-md-2 ml-2 ml-md-0">
                View Our work
              </button>
            </a>
          </div>
          <div className="col-md-4 text-center">
            <img
              src={process.env.PUBLIC_URL + props.boldData.pic}
              className="w-100"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoldArea
