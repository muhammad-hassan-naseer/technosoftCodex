import React from 'react'

const Duff = () => {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-8 m-auto">
          <h3>Ecommerce A way different than traditional websites</h3>
          <p className="text-justify">
            Unlike a standard company website that only highlights the corporate
            identity of a company, the design and development of an entire
            ecommerce website incorporates a database of products, product
            information, product search, order processing, payment systems, and
            much more. An ecommerce company requires all of this additional
            functionality to make sure customers can easily and conveniently
            browse and purchase at any time.
          </p>
        </div>
        <div className="col-md-4 text-right">
          <img
            src={process.env.PUBLIC_URL + './ecom (3).png'}
            className="w-75"
          />
        </div>
      </div>
    </div>
  )
}

export default Duff
