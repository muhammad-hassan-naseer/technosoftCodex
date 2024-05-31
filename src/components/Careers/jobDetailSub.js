import React from 'react'
import List from './List'
import RelatedJob from './RelatedJob'
import Footer from '../LandingPage/Footer'
import { Link } from 'react-router-dom'

const jobDetailSub = (props) => {
  var techArray = props.obj.list.map((section) => {
    return <List obj={section.ele} />
  })
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8">
            <h2 className="heading-margin ">{props.obj.head}</h2>
            <h3 className="text-dark ">Experience:</h3>
            <p>{props.obj.exp}</p>
            <h4 className="text-dark">
              Who are we exactly looking for and what skill do they possess:
            </h4>

            <ol>{techArray}</ol>
            <Link to="/job-application">
              <button className="btn btn-success">Apply Now</button>
            </Link>
          </div>
          <div className="col-md-4 ">
            <h3 className="heading-margin text-secondary mt-4">Our Summary</h3>
            <p className="text-justify summary-size">
              Being one of the most trusted global IT solution providers and
              outsourcing partners for Software, Blockchain, Web, Mobile App
              development services and Testing services. Working with a
              methodology that does not focus merely on rendering timely
              services, but also on creating values through them
            </p>
            <p className="text-justify summary-size">
              Being one of the most trusted global IT solution providers and To
              deliver the most innovative technical solutions to our customers
              and to make their work more productive. We accomplish this mission
              through the use of industry-proven technologies, a
              well-established development process, solid expertise and a
              sincere desire to build long-term relationships with our
              customers.
            </p>
          </div>
        </div>
      </div>
      <RelatedJob />
      <Footer />
    </>
  )
}

export default jobDetailSub
