import React from 'react'

const MissionStatement = () => {
  return (
    <div className="bg-white">
      <div className="container p-3">
        <div className="row pt-5">
          <div className="col-md-8">
            <h3>Our Mission Statement </h3>
            <p className="text-justify">
              <strong>
                "We strive to offer our customers the lowest possible prices,
                the best software solution, and the utmost convenience"
              </strong>
              .Our primary focus is to build a quality and comprehensive
              technology infrastructure, establish and maintain an effective
              operational environment, and deliver quality, prompt, cost
              effective and reliable technology services
            </p>
          </div>
          <div className="col-md-4 m-auto text-center">
            <img
              src="https://strategicmanagementinsight.com/wp-content/uploads/featured-mission-statement.jpg"
              className="w-75 rounded mission-statement"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionStatement
