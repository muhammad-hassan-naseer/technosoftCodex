import React, { Component } from 'react'
import Header from '../Header'
import DiscussionForm from './DiscussionForm'
import Footer from './Footer'
import HeaderBackground from './HeaderBackground'
import Strategy from './Strategy'
import TopHead from '../BlockChain/TopHead'
import Portfolio from './Portfolio'
import AboutUs from './AboutUs'
import TechService from './TechService'
import Technologies from '../Clients/Clients'
import LandCard from './LandCard'

const Landing = () => {
  const strategy = {
    head: 'We are responsible from planning till deployment',
    para:
      'Once you conceive an idea, the next step is to find the best technology partner to bring your idea to life. Our team of developers, software architects, project managers and other technicians is equipped with advanced and up-to-date skill sets to cater to specific needs of your project. We are a full-scale software development firm that knows the value of lasting relationships and can combine focused detail-oriented action with long-term strategic thinking.',
    img: '/cycle.png',
  }
  const topData = {
    head: 'We have decided to chase all your deams.',
    p:
      'Our team of extreme experienced software engineers, developers, UX architects, and designers like to produce impactful software.',
  }

  const serviceData = [
    {
      service: '',
      tagLine: 'Education',
      para:
        'With the growth of knowledge and technological advances in society; our country needs learning skills that can help keep pace with the advancement of science and technology. Educational programs in the community and as a result education will not be able to differentiate itself from other social institutions, national and international partnerships that are widely known around the world. Education in the 21st century is the center of all change and development. Information technology in education requires culture. This custom requires the study and application of hardware. The system needs to be taught to use information technology.',
      btn: (
        <button type="button" class="btn btn-orange-type  btn-sm text-white">
          View Our Work
        </button>
      ),
      id: 'edu',
    },
    {
      service: '',
      tagLine: 'Travel',
      para:
        'Information technology (IT) has become a strategic tool in tourism product identification, presentation, distribution and continuous competitive profitability. Tourism management is the most important candidate in implementing IT in the need to gather information and spread tourism management. The diverse nature of these businesses means that information-communication Technologies ’use shifts from one sector to another and from managers to managers in the tourism industry. IT developments have created new application areas for tourism industry managers especially in effective partnerships and provided real-world trading tools, IT is an unexpected part of tourism management due to the processing and transfer of important information in day-to-day operations.',
      btn: (
        <button type="button" class="btn btn-orange-type btn-sm text-white">
          View Our Work
        </button>
      ),
      id: 'tra',
    },
    {
      service: '',
      tagLine: 'HealthCare',
      para:
        "IT healthcare services have never been more important. A good IT partner can help your medical center fully realize the extraordinary benefits of information technology in health care. Our IT services can help your medical center operate with fewer errors, comply with today's laws, and recover quickly from unexpected disasters. Our electronic health records (EHR) systems can help your employees honestly record important patient health data and share that data with other health care providers. Most importantly, the IT healthcare support provided here at International Services will help improve the quality of patient care they receive from your staff.",
      btn: (
        <button type="button" class="btn btn-orange-type btn-sm text-white">
          View Our Work
        </button>
      ),
      id: 'heal',
    },
    {
      service: '',
      tagLine: 'Financial Services',
      para:
        'If you look at information technology you should look at all the international financial systems that are available that allow this type of technology to develop and operate at the international level. The role of financial information technology allows financial institutions to constantly acquire new information at the same level as their competition. The impact of information technology on financial services also allows customers to easily complete online transactions, which creates better financial conviction, allows for the development of information technology and the start of a faster and more efficient service. Financial reporting is also an internal industry information technology that has had a significant impact on the financial services industry. Modern developments surrounded by information technology have greatly improved the way we use financial reports.',
      btn: (
        <button type="button" class="btn btn-orange-type btn-sm text-white">
          View Our Work
        </button>
      ),
      id: 'finan',
    },
  ]
  var serviceArrayData = serviceData.map((service) => {
    return <TechService serviceData={service} />
  })
  console.log(serviceArrayData)
  const advantages = [
    {
      head: 'Block Chain Development',
      para:
        'We are developing Blockchain systems that will provide reliability and transparency in your system. Our team of experienced Blockchain developers are equipped with advanced skills to deliver solutions to achieve your business goals. With our blockchain development services, you will be able to track every step of your entire business.',
      img: '',
      sign: <button className="btn  btn-orange-type text-white">Detail</button>,
      link: '/block-chain-dev-service',
    },
    {
      head: 'React Native Apps',
      para:
        'We are a leading mobile application development company with years of experience in building, developing and supplying mobile applications for social media platforms to global customers. We have worked with a large number of clients in all industries such as business, finance, sports, manufacturing, services, media, tourism, healthcare and more.',
      img: '',
      sign: <button className="btn btn-orange-type text-white">Detail</button>,
      link: '/react-native-app-development',
    },
    {
      head: 'UI/Ux',
      para:
        "The company's website is the face of the world. It is also a preferred method of doing business around the world and should therefore reflect the type of company that represents and serves its intended audience. Combined with usability and accessibility, design can be a very important element of a web project.An attractive look and amazing feel.",
      img: '',
      sign: <button className="btn btn-orange-type text-white">Detail</button>,
      link: '/ui-ux-design',
    },
  ]
  var advantagesArray = advantages.map((section) => {
    return (
      <LandCard
        image={section.img}
        link={section.link}
        head={section.head}
        para={section.para}
        sign={section.sign}
      />
    )
  })

  const visionData = {
    cols1: 'col-md-4',
    cols2: 'col-md-8',
    head: 'OUR VISION',
    para:
      'Being one of the most trusted global IT solution providers and outsourcing partners for Software, Blockchain, Web, Mobile App development services and Testing services. Working with a methodology that does not focus merely on rendering timely services, but also on creating values through them',
    img: (
      <img
        src="https://www.prismetric.com/wp-content/uploads/2021/04/our_vision.png?tr=w-580,h-325"
        className="w-100"
      />
    ),
    heading: '',
  }
  const missionData = {
    cols1: 'col-md-8',
    cols2: 'col-md-4',
    head: '',
    img:
      ' Being one of the most trusted global IT solution providers and To deliver the most innovative technical solutions to our customers and to make their work more productive. We accomplish this mission through the use of industry-proven technologies, a well-established development process, solid expertise and a sincere desire to build long-term relationships with our customers.',
    para: (
      <img src={process.env.PUBLIC_URL + '/mission.png'} className="w-75" />
    ),
    heading: 'OUR Mission',
  }
  return (
    <div>
      <Header />
      <HeaderBackground />

      <TopHead topData={topData} />

      <div className="container">
        <div className="row mt-5">{advantagesArray}</div>

        <div className="container">
          <p className="text-center font-weight-bold mt-5 ">
            "Technosoft beleive that Quality must be enforced, otherwise it
            won't happen"
          </p>
        </div>
      </div>
      <h3 className="text-center mt-3">
        We are contributing in number of fields but not limited to
      </h3>

      <div>{serviceArrayData}</div>

      <div className="container">
        <div className="container"></div>
        <div className="container">
          <Strategy obj={strategy} />
        </div>
      </div>
      <Portfolio />

      <AboutUs Data={visionData} />
      <hr />
      <AboutUs Data={missionData} />

      <div className="container"></div>
      <div className="bg-light px-3 pb-3">
        <Technologies />
      </div>
      <div className="container">
        <div className="container">
          <div id="piechart"></div>
          <h3 className="text-center mt-5">
            Stay Calm and Get in Touch if we can do something for you
          </h3>
          <DiscussionForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Landing
