import React, { useEffect } from 'react'
import Header from '../Header'
import PostHeader from '../MobileAppDevelopment/PostHeader'
import Card from '../LandingPage/Card'
import Strategy from '../LandingPage/Strategy'
import Footer from '../LandingPage/Footer'
import UIImportance from './UIImportance'
import BoldArea from '../BlockChain/BoldArea'
import UIpackage from './UIpackage'
import FerrisWheel from './FerrisWheel'
import TopHead from '../BlockChain/TopHead'
import AdCard from '../LandingPage/AdCard'

const UI = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const tech = [
    {
      font: (
        <i class="fa-3x text-dark-orange text-orange fas fa-pencil-ruler"></i>
      ),
      head: 'Website Design',
      para:
        "The company's website is the face of the world. It is also a preferred method of doing business around the world and should therefore reflect the type of company that represents and serves its intended audience. Combined with usability and accessibility, design can be a very important part of a web project. The attractive appearance and feel of the right tone will significantly improve site audience engagement and adherence. Your products will be seen more accurately and returns will increase. ",
    },
    {
      font: (
        <i class="fa-3x text-dark-orange text-orange fas fa-photo-video"></i>
      ),
      head: 'Multimedia Solutions',
      para:
        'We build powerful multimedia capabilities to enhance web interactions, product demonstrations and corporate presentations. Collaborative presentations help increase the focus of your audience, and ensure that the focus is not lost! The use of multimedia enhancement on Adobe Flash, HTML5 or Silverlight on a website, if used properly, can significantly increase the impact on your viewers and help elevate your site above your competitors.',
    },
    {
      font: (
        <i class="fa-3x text-dark-orange text-orange fas fa-exclamation-circle"></i>
      ),
      head: 'Animation',
      para:
        'For the past ten years Flash has proven to be one of the most fashionable and popular web design technologies. It allows developers and customers to enjoy complete creative freedom, creates a positive impact on visitors and enhances your message. Nowadays technologies like HTML5 and Javascript can be used to develop more compelling animation and animation. If you have a product or company that you want to show off for a presentation that is an effective way to complete it.',
    },
    {
      font: <i class="fa-3x text-dark-orange text-orange fas fa-x-ray"></i>,
      head: 'Banner Design',
      para:
        'Our roster includes seasoned experts of leading web programming languages who work directly with you to ensure all your preferences remain priority. Maintaining the highest technical standards, our workforce implements internationally accredited procedures to create a functionally superior website that drives, engages, and converts.',
    },
    {
      font: <i class="fa-3x text-dark-orange text-orange fas fa-newspaper"></i>,
      head: 'E-Newsletter Design',
      para:
        'We are designing e-newsletters that can carry your message to your target audience efficiently. Improving your corporate identity, clarify your message and attracting the recipients to the core of the business.',
    },
  ]
  var techArray = tech.map((section) => {
    return <Card image={section.font} head={section.head} para={section.para} />
  })

  const advantages = [
    {
      head: 'Know Your Users',
      para:
        "Technosoft doesn't stop knowing what your users want. Dig deeper and find out what they need. After all, desires are just the tip of the iceberg. If you are able to meet the deepest needs of the user, you will meet their needs while meeting the most important needs.",
      img: '',
      sign: '',
    },
    {
      head: 'How people Using interface',
      para:
        'Technosoft before designing your interface finds out what you need to define and how people will use it. With the growing popularity of touch-based devices, it is a much more important concern than you might think.',
      img: '',
      sign: '',
    },
    {
      head: 'Give feedback—fast',
      para:
        'Technosoft UI experts beleive on giving fast feedback eg.An awesome loading spinner.Make a button appear and turn it back when I tap it — but not too much. And you give me a virtual high-five if I do something you and I agree that is great.',
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

    tagLine: 'UI-UX Solutions',
    para:
      'Good user experiences are very important to us for every software we create.By basing our software on human-centered design principles, we ensure your users get the best experience, and you get the best return on investment.',
    btn: (
      <button type="button" class="btn btn-success">
        Let's Discuss Your Project{' '}
      </button>
    ),
    id: 'Ui',
  }
  const boldData = {
    head: "Let's design something user's love that!",
    pic: '/uui.png',
  }
  const topData = {
    head:
      'Technosoft holds top UI/UX Specialists to Implement Incredible designs',
    p:
      "Finalizing the visual design can affect the users' behavior and hence it is the most important component of the UI design. ",
  }
  return (
    <div>
      <Header />
      <PostHeader postHeader={postHeader} />
      <div className="">
        <TopHead topData={topData} />
        <div className="container">
          <div className="row mt-5">{techArray}</div>
          <UIImportance />
        </div>

        <BoldArea boldData={boldData} />
        <div className="container">
          <h3 className="mt-5 text-primary text-center">
            Aspects of the UI/UX we try to deliver
          </h3>

          <FerrisWheel />

          <UIpackage />
          <h3 className="text-center text-primary text-underline">
          LeadSolution Edge
          </h3>
          <div className="row">{advantagesArray}</div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default UI
