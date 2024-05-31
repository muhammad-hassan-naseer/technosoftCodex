import React, { Component } from 'react'
import Typed from 'react-typed'
import Particles from 'react-particles-js'

const HeaderBackground = () => {
  return (
    <>
      <div className="main">
        <div className="transparent-dark-two"></div>
        <h2 className="text-white type mr-5 pr-5">
          {' '}
          <Typed
            className="typed-text text-center"
            strings={[
              'BEST SOFTWARE SOLUTION SOLVING LEAST PROBLEM IS NOTHING!',
              'WE ARE GIVING DATA MANY AND MORE IMPORTANCE THAN SOFTWARE!',
            ]}
            typeSpeed={80}
            backSpeed={100}
            loop
          />
        </h2>
      </div>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
          },
        }}
      />
    </>
  )
}

export default HeaderBackground
