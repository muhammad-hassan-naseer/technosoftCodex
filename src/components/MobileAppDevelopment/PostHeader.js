import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const PostHeader = (props) => {
  return (
    <div>
      <div className="study1 mt-5" id={props.postHeader.id}>
        <div className="transparent-dark">
          <div className="container">
            <h2 className="pt-5 text-dark-orange text-white text-center postHead-margin">
              {props.postHeader.service}
            </h2>
            <h2 className=" text-white mt-5">{props.postHeader.tagLine}</h2>
            <p className="text-justify text-white">{props.postHeader.para}</p>
            <Link to="/contact">
              <button className="btn btn-light  discuss-btn">
                Let's discuss your project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostHeader
