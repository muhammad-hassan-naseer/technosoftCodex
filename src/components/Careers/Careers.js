import React, { useEffect } from 'react'
import Header from '../Header'
import Footer from '../LandingPage/Footer'
import CareersCard from './CareersCard'
import Gallary from './Gallary'
import HeaderSecode from './HeaderSecode'
import CompBenefits from './CompBnefits'
import MissionStatement from './MissionStatement'

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const Card = [
    {
      id: 'one',
      tag: 'Front-End HTML Developer',
      position: '5 Positin(s)',
      res: 'Design',
      office: 'Lahore',
      descTag: 'Skilled Front-end',
      description:
        'We are looking for a Front-End HTML Developer responsible for front-end development and theming. This position requires a combination of programming skills (HTML, CSS, JS, Wordpress) and aesthetics (understanding element arrangements on the screen, the color and font choices, and so on). .',
    },
    {
      id: 'two',

      tag: 'Software QA Engineer',
      position: '3 Positin(s)',
      res: 'Software Quality Assurance',
      office: 'Lahore',
      descTag: 'Skilled Software QA Engineer',
      description:
        "As a Test Engineer embedded in Technosoft's teams, you will use your knowledge of software development and quality assurance practices to ensure that code developed at Arbisoft are of the highest quality, meet all target requirements, and produce a superior customer experience.",
    },
    {
      id: 'three',

      tag: 'WordPress Developer',
      position: '2 Positin(s)',
      res: 'Software Engineering',
      office: 'Lahore',
      descTag: 'Skilled Software Engineer',
      description:
        'A smart mix of creativity and practicality  Our ideal candidate possesses the key ingredients of strong work ethics: honesty, integrity politeness, self-motivation and good organization. The person we’re looking for understands how it is to work in a fast-paced, dynamic environment, and is able to work independently as well as in a team.',
    },
    {
      id: 'four',

      tag: 'Java Developer.',
      position: '6 Positin(s)',
      res: 'Software Engineering',
      office: 'Lahore',
      descTag: 'Skilled Software Engineer',
      description:
        'As a Backend Engineer on the team, you will be a part of a cross-functional team developing highly scalable and reliable web applications and services. You will work with a group of highly talented and motivated individuals to help shape the experiences of the customers and that enable the business success of our partners..',
    },
    {
      id: 'five',

      tag: 'Python/Django Developer.',
      position: '7 Positin(s)',
      res: 'Software Engineering',
      office: 'Lahore',
      descTag: 'Skilled Software Engineer',
      description:
        'As a Python/Django developer you will get an opportunity to work on web applications used by millions of users every day. You will be working with a highly skilled team of other developers who love to design, write, test and maintain high quality code. ',
    },
    {
      id: 'six',

      tag: 'Partner Talent Acquisition',
      position: '3 Positin(s)',
      res: 'People Operations & Development',
      office: 'Lahore',
      descTag: 'Skilled Operational & Development Person',
      description:
        'Someone who’s familiar with how hiring in a Tech Company works. Has done tech recruitment and claims to be an expert in Non-tech hiring as well. ',
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
        id={section.id}
      />
    )
  })
  return (
    <>
      <HeaderSecode />
      <div id="bg-img transparent-dark">
        <img
          src="https://m.foolcdn.com/media/affiliates/images/GettyImages-926653298_odJlcum.width-1200.jpg"
          className="img-size"
        />
      </div>

      <div className="job-opening">
        <div className="bg-white p-2">
          <div className="container pt-1 design">
            <h2 className="text-center text-dark font-weight-bold mt-5 text-underline mb-5">
              CURRENT JOB OPENINGS
            </h2>
          </div>
        </div>
        <div className="container mt-2 pt-1 design">
          <nav class="navbar navbar-light bg-none rounded">
            <form className="form-inline ml-auto">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-dark my-2 my-sm-0" type="submit">
                Search Job
              </button>
            </form>
          </nav>
          <div className="row">{CardArray}</div>
        </div>
        <CompBenefits />
        <MissionStatement />
        <Gallary />
      </div>
      <Footer />
    </>
  )
}

export default Careers
