import React, { useEffect } from 'react'
import Header from '../Header'
import HeaderSecode from './HeaderSecode'
import SubJob from './jobDetailSub'

const JobDetail = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (props.match.params.id == 'one') {
    var data = {
      head: 'Front-End HTML Developer',
      exp: '3 years of experience, preferably in a tech industry.',
      list: [
        {
          ele: 'Optimizing the user experience.',
        },
        {
          ele: 'Using HTML, JavaScript and CSS to bring concepts to life.',
        },
        {
          ele: 'Developing and maintaining the user interface.',
        },
        {
          ele: 'Implementing design on mobile websites.',
        },
      ],
    }
  }
  if (props.match.params.id == 'two') {
    var data = {
      head: ' QA Engineer',
      exp: '1 years of experience, preferably in a tech industry.',
      list: [
        {
          ele: 'Plan the process of testing.',
        },
        {
          ele: 'Write test cases (test scripts)',
        },
        {
          ele: 'Conduct functional testing.',
        },
        {
          ele: 'Identify problem areas, add them to a tracking system.',
        },
        {
          ele: 'Discuss fixes with developers.',
        },
      ],
    }
  }
  if (props.match.params.id == 'three') {
    var data = {
      head: 'WordPress Developer',
      exp: '6 years of experience, preferably in a tech industry.',
      list: [
        {
          ele: 'Meeting with clients to discuss website design and function. ',
        },
        {
          ele: 'Designing and building the website front-end.',
        },
        {
          ele: 'Creating the website architecture.',
        },
        {
          ele:
            'Designing and managing the website back-end including database and server integration.',
        },
        {
          ele: 'Generating WordPress themes and plugins.',
        },
      ],
    }
  }
  if (props.match.params.id == 'five') {
    var data = {
      head: 'Python Developer',
      exp: '6 years of experience, preferably in a tech industry.',
      list: [
        {
          ele: 'Writing effective and scalable Python codes.',
        },
        {
          ele: 'Designing and implementing robust applications.',
        },
        {
          ele:
            'Debugging applications to ensure low-latency and high-availability.',
        },
        {
          ele: 'Integrating user-facing elements with server-side logic.',
        },
        {
          ele: 'Implementing security and data protection.',
        },
      ],
    }
  }
  if (props.match.params.id == 'four') {
    var data = {
      head: 'Java Developer',
      exp: '6 years of experience, preferably in a tech industry.',
      list: [
        {
          ele:
            'Designing, implementing and maintaining Java-based applications.',
        },
        {
          ele: 'Contributing in all phases of the development lifecycle..',
        },
        {
          ele: 'Writing testable, scalable and efficient code.',
        },
        {
          ele: 'Test and debug new applications and updates.',
        },
        {
          ele: 'Maintain up to date code documentation.',
        },
      ],
    }
  }
  if (props.match.params.id == 'six') {
    var data = {
      head: 'People Operations and Development',
      exp: '8 years of experience, preferably in a tech industry.',
      list: [
        {
          ele: 'Operations managers are responsible for managing activities.',
        },
        {
          ele:
            'Their direct responsibilities include managing both the operations process, embracing design, planning, control, performance improvement, and operations strategy.',
        },
        {
          ele: 'Writing testable, scalable and efficient code.',
        },
        {
          ele: 'Test and debug new applications and updates.',
        },
        {
          ele: 'Maintain up to date code documentation.',
        },
      ],
    }
  }
  return (
    <>
      <HeaderSecode />

      <SubJob obj={data} />
    </>
  )
}

export default JobDetail
