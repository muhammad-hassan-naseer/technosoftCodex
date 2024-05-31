import React from 'react'

const UIImportance = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h3 className="mt-5">Why is UX/UI Design important?</h3>
            <p className="text-justify">
              <strong>UX design is more</strong> technical and analytical. It
              involves a lot of research to analyze and optimize the customer’s
              experience. There’s a lot of psychology and sociology in UX,
              understanding the precise business personas to craft a targeted
              experience. On the flip side, UI is more along the lines of
              graphic design. It’s how a site looks and feels, in addition to
              how it operates. It translates a brand’s strengths and voice onto
              the screen. UX and UI complement each other, working in tandem to
              create an exemplary product.
            </p>
          </div>
          <div className="col-md-4 m-auto on-hover">
            <img
              src={process.env.PUBLIC_URL + '/ui.png'}
              className="react-mobile-image mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UIImportance
