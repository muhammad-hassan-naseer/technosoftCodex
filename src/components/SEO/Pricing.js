import React from 'react'

const Pricing = () => {
  return (
    <div>
      <h3 className="text-primary text-center mt-5">
        Professional SEO service pricing
      </h3>
      <h6 className="mb-5 text-center">
        Curious about how much TechnosoftCodex SEO service cost?
      </h6>
      <div className="columns">
        <ul className="price">
          <li className="header font-weight-bold text-white bg-dark">Basic</li>
          <li className="grey">$ 9.99 / year</li>
          <li>Up to 100 keyphrases optimized</li>
          <li>Competitor rankings, content, and link monitoring</li>
          <li>Custom dashboards: 4</li>
          <li>Dedicated digital marketing experth</li>
          <li className="grey">
            <a href="#" className="btn btn-outline-success">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
      <div className="columns">
        <ul className="price">
          <li
            className="header font-weight-bold text-white"
            style={{ backgroundColor: '#04AA6D' }}
          >
            Pro
          </li>
          <li className="grey">$ 24.99 / year</li>
          <li>Up to 150 keyphrases optimized</li>
          <li>Competitor rankings, content, and link monitoring</li>
          <li>Custom dashboards: 4</li>
          <li>Dedicated digital marketing experth</li>
          <li className="grey">
            <a href="#" className="btn btn-success">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
      <div className="columns mb-5">
        <ul className="price">
          <li className="header font-weight-bold text-white bg-dark">
            Premium
          </li>
          <li className="grey">$ 49.99 / year</li>
          <li>Up to 300 keyphrases optimized</li>
          <li>Competitor rankings, content, and link monitoring</li>
          <li>Custom dashboards: 4</li>
          <li>Dedicated digital marketing experth</li>
          <li className="grey">
            <a href="#" className="btn btn-outline-success">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Pricing
