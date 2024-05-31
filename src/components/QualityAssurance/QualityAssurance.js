import React, { useEffect } from 'react'
import Header from '../Header'
import PostHeader from '../MobileAppDevelopment/PostHeader'
import Card from '../LandingPage/Card'
import Strategy from '../LandingPage/Strategy'
import Footer from '../LandingPage/Footer'
import Importance from './Importance'
import StepBox from './StepBox'
import BoldArea from '../BlockChain/BoldArea'
import QaPackage from './QaPackage'
import Faq from './Faq'
import TopHead from '../BlockChain/TopHead'
import AdCard from '../LandingPage/AdCard'
const QualityAssurance = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const tech = [
    {
      font: (
        <i class="fas fa-3x text-dark-orange text-orange fa-user-astronaut"></i>
      ),
      head: 'Functional Testing',
      para:
        'Validating the software system to conform  each functional requirement of the application meets the expected output. Our experienced QA testing team implements functional testing to majorly focus on user interface, database, security, APIs, client or server application and similar functionalities of the application.',
    },
    {
      font: (
        <i class="fas fa-3x text-dark-orange text-orange fa-theater-masks"></i>
      ),
      head: 'Performance Testing',
      para:
        'Increasing load time, inefficient responsiveness  and instability can be overcome by  performance testing. Our profound experience in performance testing by executing quality checks and software behaviour analysis under load and stress guarantees flawless, reliable  and smarter applications.',
    },
    {
      font: (
        <i class="fas fa-3x text-dark-orange text-orange fa-shield-alt"></i>
      ),
      head: 'Security Testing',
      para:
        'Uncover potential vulnerabilities of your  running application by enabling security testing  with every release. Our software testing services are performed by a talented pool of  test engineers who execute risk assessment and penetration testing to shield applications from hackers or malicious threats',
    },
    {
      font: <i class="fas fa-3x text-dark-orange text-orange fa-user-tag"></i>,
      head: 'Usability Testing',
      para:
        'Monitor application behaviour when multiple functions of the application operate concurrently. Our software testing services entail an in-depth analysis of user behaviour patterns that identify potential usability issues  in the initial phase and create a seamless product.',
    },
    {
      font: <i class="fas fa-3x text-dark-orange text-orange fa-equals"></i>,
      head: 'Compatibility Testing',
      para:
        'Explore the possibilities of compatibility testing with TatvaSofts software testing services where an application is tested meticulously across different browsers, databases,  hardware, operating systems, server  infrastructures, resolution displays and  devices.',
    },
    {
      font: <i class="fas fa-3x text-dark-orange text-orange fa-mobile"></i>,
      head: 'Mobile App Testing',
      para:
        'Scalability, security and multi-platform support are the cornerstones of a mobile app TatvaSoft provides cross platform functional/non-functional testing with manual as well as automated approach for diverse mobile applications',
    },
  ]
  var techArray = tech.map((section) => {
    return (
      <Card
        image={section.font}
        head={section.head}
        para={section.para}
        sign={section.sign}
      />
    )
  })

  const advantages = [
    {
      head: 'Expert Monitoring',
      para:
        'Our team is constantly monitoring the development of your software to ensure the code is of ultimate quality an impeccable.',
      img: '',
      sign: '',
    },
    {
      head: 'Comprehensive Testing',
      para:
        'Our team ensures your product will work well across all environments. We provide web-based, mobile, app, cross-browser, integration, acceptance, and performance testing..',
      img: '',
      sign: '',
    },
    {
      head: 'Continuous Feedback',
      para:
        'Our Quality Assurance team is firmly integrated into the project life cycle, ensuring that any bugs caught are immediately fixed.',
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
  const flows = [
    {
      step: '01',
      para: 'Ate automation expandability and blication scope',
    },
    {
      step: '02',
      para: 'Define the automation scope and level to employ',
    },
    {
      step: '03',
      para: 'Tools selection and Automation architectur designy',
    },
    {
      step: '04',
      para: 'Automated test script and test data creation',
    },
    {
      step: '05',
      para: 'Appropriate test environment and configuration',
    },
    {
      step: '06',
      para: 'Executing test automation script and datavalidation',
    },
    {
      step: '06',
      para: 'Automated performance test for scalable backend',
    },
  ]
  var stepArray = flows.map((section) => {
    return <StepBox step={section.step} para={section.para} />
  })
  const postHeader = {
    service: 'Tech Service',

    tagLine: 'QA & Software Testing Solutions',
    para: 'Quality is the foundation of our service.',
    btn: (
      <button type="button" class="btn btn-success">
        Let's Discuss Your Project
      </button>
    ),
    id: 'qualityAssurance',
  }
  const boldData = {
    head: "Let Technosoft's expert enhance your application's quality!",
    pic: '/qa.png',
  }
  const topData = {
    head: 'Looking for quality Software Testing & QA Service? We guarantee it',
    p:
      "Quality assurance helps a company meet its clients' demands and expectations",
  }
  const importanceData = {
    head: 'Some Important Points Regarding Quality Assurance',
    list: [
      {
        key:
          'While it takes time at the beginning of the process to create systems that catch errors, it takes more time to fix the errors if they’re allowed to happen or get out of control.',
      },
      {
        key:
          'Some businesses might be a bit unsure about quality assurance because of its cost, but the fact is it actually saves money in the long run. Paying to prevent problems is cheaper than paying to fix them. Quality assurance systems also save money on materials because nothing goes to waste.',
      },
      {
        key:
          'When businesses use quality assurance processes, they’re letting customers know that they care about them and their priorities. With many industries, like the food industry, quality assurance is also an essential part of safety. Customers want to be confident that the food they’re eating is safe and won’t make them sick.',
      },
      {
        key:
          'Quality assurance can boost profit in a few ways. The first is through saving more money by not wasting time or materials. The second is that quality makes a business more competitive in the marketplace.',
      },
      {
        key:
          'The quality assurance process is all about consistently maintaining high standards. Many of those standards depend on what customers ask for.',
      },
    ],
  }
  return (
    <div>
      <Header />
      <PostHeader postHeader={postHeader} />
      <div className="">
        <TopHead topData={topData} />
        <div className="container">
          <div className="row mt-5">{techArray}</div>
        </div>
        <div className="container">
          <h3 className="text-center text-underline mt-5">
            Our Test Automation Approach
          </h3>
          <div className="row mt-5">{stepArray}</div>
        </div>

        <BoldArea boldData={boldData} />
        <div className="container">
          <Importance importanceData={importanceData} />
          <QaPackage />
        </div>
        <Faq />
        <div className="container">
          <h3 className="text-center text-primary mt-5 text-underline">
          LeadSolution Edge
          </h3>
          <div className="row">{advantagesArray}</div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default QualityAssurance
