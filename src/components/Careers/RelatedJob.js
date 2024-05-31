import React from 'react'
import CareersCard from './CareersCard'
const RelatedJob = () => {
  const Card = [
    {
      tag: 'Front-End HTML Developer',
      position: '5 Positin(s)',
      res: 'Design',
      office: 'Lahore',
      descTag: 'Skilled Front-end',
      description:
        'We are looking for a Front-End HTML Developer responsible for front-end development and theming. This position requires a combination of programming skills (HTML, CSS, JS, Wordpress) and aesthetics (understanding element arrangements on the screen, the color and font choices, and so on). .',
    },
    {
      tag: 'Software QA Engineer',
      position: '3 Positin(s)',
      res: 'Software Quality Assurance',
      office: 'Lahore',
      descTag: 'Skilled Software QA Engineer',
      description:
        "As a Test Engineer embedded in Technosoft's teams, you will use your knowledge of software development and quality assurance practices to ensure that code developed at Arbisoft are of the highest quality, meet all target requirements, and produce a superior customer experience.",
    },
  ]
  var CardArray = Card.map((section) => {
    return (
      <CareersCard
        tag={section.tag}
        position={section.position}
        res={section.res}
        office={section.office}
        descTag={section.descTag}
        description={section.description}
      />
    )
  })
  return (
    <>
      <div className="bg-light">
        <div className="container mt-5 py-3">
          <h4 className="text-dark">Related Jobs</h4>

          <div className="row">{CardArray}</div>
        </div>
      </div>
    </>
  )
}

export default RelatedJob
