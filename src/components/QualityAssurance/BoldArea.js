import React from 'react'
import { Link } from 'react-router-dom'
const BoldArea = () => {
  return (
    <div className="bg-light mt-5 py-3">
      <div className="container">
        <div className="row">
          <div className="col-8 m-auto">
            <p className="text-secondary font-weight-bold">Reach out to us</p>
            <h4>Let Technosoft's expert enhance your application's quality</h4>
            <Link to="contact">
              <button className="btn btn-outline-primary">Get in Touch</button>
            </Link>
            <a href="https://tokens-b8a17.web.app/">
              <button className="btn btn-primary ml-2">View Our work</button>
            </a>
          </div>
          <div className="col-4 text-right">
            <img
              src={process.env.PUBLIC_URL + '/qa.png'}
              className="react-mobile-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoldArea
