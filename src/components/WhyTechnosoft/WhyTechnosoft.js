import React, { useEffect } from 'react'
import Header from '../Header'
import Card from '../LandingPage/Card'
import Footer from '../LandingPage/Footer'
import TechService from '../LandingPage/TechService'
import AdCard from '../LandingPage/AdCard'
import VideoSection from './VideoSection'
import Carousel from '../LandingPage/Carousel'
import JoinUs from './JoinUs'
import Philosophy from './Philosophy'
import SolutionBox from '../BlockChain/SolutionBox'

const WhyTechnosoft = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const tech = [
    {
      head: 'Build partnerships',
      para:
        'We believe in nurturing long term relationships with our clients. You need a partner you can trust to not only bring your idea to life, but also to grow with.',
      img: <i class="fas fa-trophy fa-3x text-center text-primary" />,
      sign: '',
    },
    {
      head: 'Creating Value',
      para:
        'We have rapidly built a world-class team of engineers ready to take on diverse and challenging projects with an aim to create real value for our partners and community.',
      img: <i class="fas fa-laptop fa-3x text-center text-primary" />,
      sign: '',
    },
    {
      head: 'Proven Capability',
      para:
        'Give us a problem and we will engineer a solution! Our team of world-class engineers has developed enterprise and analytical software used by millions of users every day.',
      img: <i class="fas fa-smog fa-3x text-center text-primary" />,
      sign: '',
    },
  ]
  var techArray = tech.map((section) => {
    return <Card image={section.img} head={section.head} para={section.para} />
  })
  const serviceData = [
    {
      service: '',
      tagLine: 'Business Value',
      para:
        " Information technology has given business the tools to solve complex problems.Improved computer hardware (additional memory, faster processors, sharp visual displays, etc.) combined with intelligent applications (Mindmapping software such as X Mind, shared software like Kanban boards, editors like Google Calendar, etc.) made it easier data analysis, analysis, and plan evaluation. Many tools are available to solve complex problems.Good business decisions are based on solid market research. This can be done by participating teams through video conferences, reviewing public sentiments on social media and industry forums, and using online surveys to get customer feedback. There are also tools like Microsoft CRM Dynamics and Google Analytics.Online marketing using online marketing methods (SEO, PPC, Facebook ads) are more accurate methods than traditional marketing to reach a target audience, find their needs, and create a marketing campaign to entice them to buy. It's hard to see how many people are reading a newspaper advertisement. It is easy to find out how many people have clicked on an online ad.Customers can receive phone support for multiple channels, emails, forums, webinars, and more. Additionally, customer relationship management systems help businesses understand customer behavior.If the business's objective is to increase profits, then innovation is a way to make more profit, faster. Jan Koum's story gives us a glimpse of how big business is valued for innovation. He moved from food stamps to billionaires for launching WhatsApp.",
      id: 'business',
    },
  ]
  var serviceArrayData = serviceData.map((section) => {
    return <TechService serviceData={section} />
  })
  const advantages = [
    {
      head: 'Consulting',
      para:
        'We help you create a clear digital strategy that optimizes your path to comprehensive, technology-led business success.',
      img: '',
      link: '/block-chain-dev-service',
    },
    {
      head: 'Implementation',
      para:
        'Our expertise spans all major technologies and business functions, empowering us to deliver comprehensive business solutions.',
      img: '',
      link: '/react-native-app-development',
    },

    {
      head: 'Managed Services',
      para:
        'Our global Managed Services teams secure your digital investment with 24x7 monitoring, maintenance, and end-to-end support.',
      img: '',
      link: '/ui-ux-design',
    },
  ]
  var advantagesArray = advantages.map((section) => {
    return (
      <AdCard
        image={section.img}
        link={section.link}
        head={section.head}
        para={section.para}
        sign={section.sign}
      />
    )
  })
  const data = [
    {
      head: 'Consulting',
      para:
        'We help you create a clear digital strategy that optimizes your path to comprehensive, technology-led business success.',
      img: '/consult.png',
      class: 'w-75',
    },
    {
      head: 'Implementation',
      para:
        'Our technology encompasses all major technologies and business functions, enabling us to deliver complete business solutions.',
      img: '/development.png',
      class: 'w-75',
    },
    {
      head: 'Managed Services',

      para:
        'Our Global Task Team protects your digital investment with 24x7 monitoring, maintenance, and end-to-end support.',
      img: '/management (2).png',
      class: 'img-management-size',
    },
    {
      head: 'BPO',

      para:
        'Our trained and knowledgeable BPO teams bring rapid development to your staff with timely, high quality results.',
      img: '/bpo (2).png',
      class: 'w-75',
    },
  ]
  var blockArray = data.map((section) => {
    return (
      <SolutionBox
        head={section.head}
        para={section.para}
        img={section.img}
        class={section.class}
      />
    )
  })
  return (
    <div>
      <Header />
      <div className="section mt-5 pt-5 ">
        <div id="why-tech-pic">
          <img
            src="https://t3.ftcdn.net/jpg/04/06/20/10/360_F_406201094_oPHy1B2qLOo9SFttIfFDut4y1WOKNGa2.jpg"
            className="w-100"
          />
        </div>
        <Philosophy />
        <div className="container">
          <h3 className="text-primary mt-5 text-center">
            Quality and Commitment
          </h3>
          <p className="font-weight-bold text-center">
            Our services are defined by quality and commitment.
          </p>
          <div className="row">{blockArray}</div>
        </div>
        <div>{serviceArrayData}</div>
        <VideoSection />
        <Carousel />
        <JoinUs />
        <Footer />
      </div>
    </div>
  )
}

export default WhyTechnosoft
