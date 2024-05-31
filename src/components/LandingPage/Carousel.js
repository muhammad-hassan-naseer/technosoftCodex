import React, { Component } from 'react'

const Carousel = () => {
  return (
    <div className="bg-light text-dark">
      <h3 className="text-center text-dark pt-3  mt-5">
        Meet With Our Happy Clients
      </h3>
      <p className="font-weight-bold text-dark text-center">
        See what our client say about us
      </p>
      <div
        id="carouselExampleIndicators"
        className="carousel slide pointer-event mt-5"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={1}
            className
          />
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={2}
            className
          />
        </ol>
        <div className="carousel-inner text-dark">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-3">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png"
                  className="carouselImg"
                />
              </div>
              <div className="col-9">
                <h2 className="text-dark-orange font-weight-bold">Mr Hassan</h2>
                <p>
                 It was one the best decison of my life to choose Lead Solutions
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png"
                  className="carouselImg"
                />
              </div>
              <div className="col-8">
                <h2 className="text-dark-orange font-weight-bold">Mr.Hamza</h2>
                <p>
                 My restaurant website was extremelly professional and fancy.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png"
                  className="carouselImg"
                />
              </div>
              <div className="col-8">
                <h2 className="text-dark-orange font-weight-bold">Mr.Bilal</h2>
                <p>
                  Extremely professionl team and time oriented.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon text-primary"
            aria-hidden="true"
          />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Carousel
