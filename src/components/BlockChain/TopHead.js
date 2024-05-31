import React from 'react'

const TopHead = (props) => {
  return (
    <div>
      <div className="bg-light p-2">
        <div className="container">
          <h2 className="text-center">{props.topData.head}</h2>
          <p className="text-justify mt-3 text-center font-weight-bold">
            {props.topData.p}{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TopHead
