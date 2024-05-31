import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="bg-light mb-3  footer-text footer footer-s">
        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col-6 col-md-2">
              <ul className="pl-0 mt-3">
                <Link to="/" className="text-dark">
                  <li className="list-unstyled font-weight-bold mb-3 footer-text">
                    Home
                  </li>
                </Link>
                <Link to="/web-app-development" className="text-dark">
                  {' '}
                  <li className="list-unstyled font-weight-bold mb-3 footer-text">
                    Services
                  </li>
                </Link>

                <Link to="/careers" className="text-dark">
                  {' '}
                  <li className="list-unstyled font-weight-bold mb-3 footer-text">
                    Careers
                  </li>
                </Link>
              </ul>
            </div>
            <div className="col-6 col-md-2">
              <ul className="pl-0 mt-3">
                <Link to="/whytech" className="text-dark">
                  {' '}
                  <li className="list-unstyled font-weight-bold mb-3 footer-text">
                    Why Lead
                  </li>
                </Link>

                <Link to="/contact" className="text-dark">
                  {' '}
                  <li className="list-unstyled font-weight-bold mb-3 footer-text">
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>
            <div className="col-12 col-md-4 text-center">
              {/* <div className="row mt-2 text-left">
                <div className="col-4 col-md-4">
                  <a
                    href="https://www.facebook.com/TechnosoftCodex"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="facebook"
                  >
                    {' '}
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png"
                      alt="Girl in a jacket"
                      className="footerImg mt-2"
                    />
                  </a>
                </div>
                <div className="col-4 col-md-4">
                  <a
                    href="https://www.linkedin.com/company/technosoft-codex"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="linked-In"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
                      alt="Girl in a jacket"
                      className="footerImg mt-2"
                    />
                  </a>
                </div>
                <div className="col-4 col-md-4">
                  <a
                    href="https://twitter.com/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="twitter"
                  >
                    <img
                      src="https://assets-global.website-files.com/5e39e095596498a8b9624af1/5e5dcda1afa1fe451f0e5ed2_5b45dcf979eda4c0ad71abe7_Twitter.png"
                      alt="Girl in a jacket"
                      className="footerImg mt-2"
                    />
                  </a>
                </div>
              </div> */}
              {/* <div className="row mt-2 text-left">
                <div className="col-4 col-md-4">
                  <a
                    href="https://www.instagram.com/technosoftcodex/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Instagram"
                  >
                    {' '}
                    <img
                      src="https://www.citypng.com/public/uploads/preview/-51609117747dolnsjym3k.png"
                      alt="Instagram"
                      className="footerImg"
                    />
                  </a>
                </div>
                <div className="col-4 col-md-4">
                  <a
                    href="https://discord.com/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="discord"
                  >
                    {' '}
                    <img
                      src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-icon-flat-style-available-svg-png-eps-10.png"
                      alt="Girl in a jacket"
                      className="footerImg"
                    />
                  </a>
                </div>
              </div> */}
            </div>
            <div className="col-md-4 pb-2 pb-md-0">
              <div className="single">
                <h6 className="mt-4 font-weight-bold text-center text-md-left">
                  Subscribe to our Newsletter
                </h6>
                <div className="input-group mt-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <button
                    type="button"
                    className="btn btn-primary btn-sm btn-md-lg mt-md-0"
                  >
                    Subscribe
                  </button>
                  <span className="input-group-btn"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container">
          <p className="d-inline  rights text-center text-md-left">
            © 2021 Technosoft Codex. All Rights Reserved.
          </p>
          <ul className="float-right d-inline-flex rights">
            <li className="list-unstyled">Terms & Conditions</li>
            <li className="list-unstyled ml-3"> Privacy Policy</li>
            <li className="list-unstyled ml-3">Security Policy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Footer
