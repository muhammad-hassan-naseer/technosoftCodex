import React, { useEffect } from 'react'
import Header from '../Header'
import PostHeader from '../MobileAppDevelopment/PostHeader'
import Card from '../LandingPage/Card'
import Footer from '../LandingPage/Footer'
import BoldArea from '../BlockChain/BoldArea'
import MobilePackage from './MobilePackage'
import FerrisWheel from './FerrisWheel'
import TopHead from '../BlockChain/TopHead'
import AdCard from '../LandingPage/AdCard'
import TimeLine from '../TimeLine/TimeLine.js'

const Mobile = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const timeLineData = {
    firstbox: {
      headOne: 'Step 1',
      headTwo: 'Discovery Phase Workshop',
      para:
        'An amazing brainstorming workshop for better approaches and steps.',
    },
    secondBox: {
      headOne: 'Step.2',
      headTwo: 'print 0:Project Initiation',
      para: 'Going to strat the project with a huge passiona and beleive.',
    },
    thirdBox: {
      headOne: 'Step.3',
      headTwo: 'Interactive Development:UI/UX design, Development, QA',
      para:
        'Our Expert UI/UX design team making your app eperience best one in te world.  ',
    },
    fourthBox: {
      headOne: 'Step.4',
      headTwo: 'User Acceptance Testing',
      para: 'Testing the app in the shoe of a customer.',
    },
    fifthBox: {
      headOne: 'Step.5',
      headTwo: 'MVP/Soft Launch',
      para: 'A soft launch for desirable changes.',
    },
    sixthBox: {
      headOne: 'Step.6',
      headTwo: 'App Launch',
      para: 'Technosoft going to launch An incredible app for you',
    },
  }

  const tech = [
    {
      font: (
        <i class="fa-3x text-dark-orange text-orange fab fa-creative-commons"></i>
      ),
      head: 'Native Mobile App Development',
      para:
        'Our mobile app developers can build high-quality native apps for both Android and iOS systems aligned with your business and security requirements. ',
    },
    {
      font: (
        <i class="fa-3x text-dark-orange text-orange fab fa-phabricator"></i>
      ),
      head: 'Hybrid Mobile App Development',
      para:
        'Cross-platform apps that can work in different environments thanks to a unique blend of native and web app technologies.',
    },
    {
      font: <i class="fa-3x text-dark-orange text-orange fas fa-spinner"></i>,
      head: 'Progressive',
      para:
        'With Progressive Web Apps, we deliver native-like capabilities and installability while reaching anyone, anywhere, on any device with a single codebase. ',
    },
    {
      font: (
        <i class="fa-3x text-dark-orange text-orange fas fa-genderless"></i>
      ),
      head: 'Wearables  Software',
      para:
        'We can create companion apps for a number of wearable devices, integrate with smart devices or proprietary peripherals.',
    },
  ]
  var techArray = tech.map((section) => {
    return <Card image={section.font} head={section.head} para={section.para} />
  })

  const advantages = [
    {
      head: ' Simplicity',
      para:
        'Technosoft provides clear, uncluttered screens lead to the next step of the app process and there is no ambiguity that enhances customer experience and will encourage them to continue using it.',
      img: '',
      sign: '',
    },
    {
      head: 'Flexibility',
      para:
        'we are flexible.There are three main mobile operating systems - iOS, Android, and Windows - and to get the most out of your operating system, it needs to be available in all of these.',
      img: '',
      sign: '',
    },
    {
      head: 'Security',
      para:
        'Internet security becomes a growing problem and the same applies to your app. With many applications that store personal and sensitive information or credit and debit card information, security is absolutely necessary Technosoft provides you with the best possible secure apps.',
      img: '',
      sign: '',
    },
  ]
  var advantagesArray = advantages.map((section) => {
    return (
      <AdCard
        image={section.img}
        head={section.head}
        para={section.para}
        sign={section.sign}
      />
    )
  })
  const postHeader = {
    service: 'Tech Service',

    tagLine: 'Mobile App Solutions',
    para:
      'We help global brands design and build superior digital products, enabling seamless user experiences across all modern platforms and devices.',
    btn: (
      <button type="button" class="btn btn-success">
        Let's Discuss Your Project{' '}
      </button>
    ),
    id: 'mobileApp',
  }
  const boldData = {
    head: 'READY TO MAKE YOUR DREAM  MOBILE APP?',
    pic: '/mob.png',
  }
  const topData = {
    head: 'DELIVERING STELLAR MOBILE APP DEVELOPMENT SERVICE',
    p:
      'We help global brands design and build superior digital products, enabling seamless user experiences across all modern platforms and devices. ',
  }
  return (
    <div>
      <Header />
      <PostHeader postHeader={postHeader} />
      <div className="">
        <TopHead topData={topData} />
        <div className="container">
          <div className="row mt-5">{techArray}</div>
          <br />
        </div>
        <TimeLine timeLineData={timeLineData} />
        <div className="container"></div>

        <BoldArea boldData={boldData} />
        <div className="container">
          <h3 className="mt-5 text-primary text-center text-underline">
            Our Emerging Tech
          </h3>

          <FerrisWheel />
          <MobilePackage />
          <h3 className="text-center text-underline text-primary">
          LeadSolution Edge
          </h3>
          <div className="row">{advantagesArray}</div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Mobile
