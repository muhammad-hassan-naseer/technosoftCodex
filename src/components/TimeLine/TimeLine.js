import React from 'react'
import TimeLineData from './TimeLineData'

const TimeLine = (props) => {
  return (
    <div className="bg-light">
      <div className="container mb-5 pb-5" id="roadmap">
        <h3 className="text-center text-dark  pt-3 text-underline title">
          Search Engine Optimization Strategy
        </h3>
        <div className="timeline mt-5">
          <div className="contain left">
            <div className="content text-left">
              <TimeLineData data={props.timeLineData.firstbox} />
            </div>
          </div>
          <div className="contain right">
            <div className="content text-left">
              <TimeLineData data={props.timeLineData.secondBox} />
            </div>
          </div>
          <div className="contain left">
            <div className="content text-left">
              <TimeLineData data={props.timeLineData.thirdBox} />
            </div>
          </div>
          <div className="contain right">
            <div className="content text-left">
              <TimeLineData data={props.timeLineData.fourthBox} />
            </div>
          </div>
          <div className="contain left">
            <div className="content text-left">
              <TimeLineData data={props.timeLineData.fifthBox} />
            </div>
          </div>
          <div className="contain right">
            <div className="content text-left">
              <TimeLineData data={props.timeLineData.sixthBox} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeLine
