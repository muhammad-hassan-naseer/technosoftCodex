import React, { useEffect } from 'react'
import Header from '../Header'
import DiscussionForm from '../LandingPage/DiscussionForm'
import Footer from '../LandingPage/Footer'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Header />
      <div className="contact-us-head " id="contact-us-head"></div>
      <div className="container  ">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mt-3">Need help?</h2>
            <p>
              We love to fix complex problems and come up with innovative
              solutions. Tell us about your project and we’ll work together to
              bring you the best results. Fill out the form below and we’ll
              reach out to schedule a meeting to discuss the details.
            </p>
          </div>
        </div>

        <h2 className="text-center">Our Offices</h2>
      </div>
      <p className="containes container mt-4">
        <div className="row">
          <div className="col-4">
            <img
              src="https://en.dailypakistan.com.pk/digital_images/large/2021-02-04/lahore-city-of-gardens-becomes-city-of-literature-by-unesco-1612437084-6589.jpg"
              class="officePic d-inline"
            ></img>
          </div>
          <div className="col-4">
            <img
              src="https://en.dailypakistan.com.pk/digital_images/large/2021-02-04/lahore-city-of-gardens-becomes-city-of-literature-by-unesco-1612437084-6589.jpg"
              class="officePic d-inline"
            ></img>
          </div>
          <div className="col-4">
            <img
              src="https://en.dailypakistan.com.pk/digital_images/large/2021-02-04/lahore-city-of-gardens-becomes-city-of-literature-by-unesco-1612437084-6589.jpg"
              class="officePic d-inline"
            ></img>
          </div>
        </div>
        <h1 className="text-white text-center centered">Lahore</h1>
      </p>
      <h3 className="text-center mt-5">Get In Touch</h3>
      <p className="text-center">
        Tell us about your project. We’ll be in touch soon.
      </p>
      <div className="container">
        <DiscussionForm />
      </div>
      <Footer />
    </div>
  )
}

export default Contact
