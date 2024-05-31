import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light mb-5 ml-auto">
        <Link className="navbar-brand ml-5" to="/">
          <h3>
            Lead Solution
            <br />
            <h4 className="text-center text-dark">Coding Center</h4>
          </h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto margin-right">
            <li className="nav-item active">
              <Link className="nav-link px-3 px-md-2 font" to="whytech">
                Why LeadSoluton<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link px-3 px-md-2 dropdown-toggle font text-dark"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/block-chain-dev-service">
                  BlockChain Development
                </Link>
                <Link className="dropdown-item" to="/ecommerce-dev-service">
                  Ecommerce Web Development
                </Link>
                <Link
                  className="dropdown-item"
                  to="/search-engine-optimization-service"
                >
                  Search Engine Optimization
                </Link>

                <Link
                  className="dropdown-item"
                  to="react-native-app-development"
                >
                  React Native App Development
                </Link>
                <Link className="dropdown-item" to="ui-ux-design">
                  UI/UX
                </Link>
                <Link className="dropdown-item" to="quality-assurance">
                  Quality Assurance
                </Link>
                <Link className="dropdown-item" to="web-app-development">
                  Web App Development
                </Link>
                <Link className="dropdown-item" to="mobile-app-development">
                  Mobile App Development
                </Link>
              </div>
            </li>

            <li className="nav-item active">
              <Link className="nav-link px-3 px-md-2 font" to="/contact">
                Contact Us <span className="sr-only">(current)</span>
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
              <Link className="nav-link px-3 px-md-2 dropdown-toggle font text-dark" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Industries
              </Link>
              <div className="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="industry-education">Education</Link>
                <Link className="dropdown-item" to="industry-travel">Travel</Link>
                <Link className="dropdown-item" to="industry-healthcare">Healthcare</Link>
                <Link className="dropdown-item" to="industry-finance">Finance</Link>
                <Link className="dropdown-item" to="industry-technology">Technology</Link>
                <Link className="dropdown-item" to="industry-e-commerce">E-Commerce</Link>
              </div>
            </li> */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link px-3 px-md-2 dropdown-toggle font text-dark dropstart"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Careers
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/careers">
                  Open Positions
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
