import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const JoinUs = () => {
  return (
    <div className="bg-linear mt-5 p-3">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto text-dark">
            <h3 className="text-white">Join Us</h3>
            <h4 className="text-white">Challenge your limits</h4>
            <p className="text-white">
              Technosoft Codex is one of the most sought-after employers in the
              industry. Apply now and become a part of the Technosoft family.
            </p>
            <Link to="/careers">
              <button className="btn btn-success ">View All Jobs</button>
            </Link>
          </div>
          <div className="col-md-4 text-right">
            <img
              src={process.env.PUBLIC_URL + './join.png'}
              className="width-set join-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs
