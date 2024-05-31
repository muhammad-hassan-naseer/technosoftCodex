import React from 'react'
import { Link } from 'react-router-dom'
const BoldArea = () => {
  return (
    <div className="bg-light mt-5">
      <div className="container">
        <div className="row">
          <div className="col-8 m-auto">
            <p className="text-secondary font-weight-bold">Re ach out to us</p>
            <h4>Let's make an app which inspires</h4>
            <Link to="contact">
              <button className="btn btn-outline-primary">Get in Touch</button>
            </Link>
          </div>
          <div className="col-4 text-right">
            <img
              src={process.env.PUBLIC_URL + '/mobile.png'}
              className="react-mobile-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoldArea
