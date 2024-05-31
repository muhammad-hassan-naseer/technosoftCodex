import React, { useEffect } from 'react'
import Header from '../Header'
import PostHeader from './PostHeader'
import Card from '../LandingPage/Card'
import Footer from '../LandingPage/Footer'
import Box from './Box'
import BoldArea from '../BlockChain/BoldArea'
import AboutComp from './AboutComp'
import BoxTwo from './BoxTwo'
import TopHead from '../BlockChain/TopHead'
import AdCard from '../LandingPage/AdCard'

const ReactNative = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const tech = [
    {
      head: 'Specialist iOS Developers',
      para:
        'Multi-disciplined iOS development teams supporting all your technical requirements under one roof..',
      img: <i class="fab fa-apple fa-3x text-primary  text-center" />,
      sign: '',
    },
    {
      head: 'Android App Development',
      para:
        'We help keep your apps updated and their features updated. We can wrangle the messiest legacy code, bring it in line with standards, and keep it functional, fast, and secure.',
      img: <i class="fab fa-android  fa-3x text-primary  text-center" />,
      sign: '',
    },
    {
      head: 'Extensions & Maintenance',
      para:
        'We’ve collaborated on 2D and 3D Android apps, mobile games and more that work with your native operating system capabilities and deliver delightful experiences.',
      img: <i class="fas fa-mountain fa-3x text-primary  text-center" />,
      sign: '',
    },
  ]
  var techArray = tech.map((section) => {
    return <Card image={section.img} head={section.head} sign={section.sign} />
  })

  const advantages = [
    {
      head: 'Write Once Use Anywhere',
      para:
        'One of the main reasons Technosoft has edge on is that they are taking immense advantage of the React Native framework allows you to write code only once and you can use those codes in all other forums, be it Android, Windows, or iOS.',
      img: '',
      sign: '',
    },
    {
      head: 'UI Focused',
      para:
        'One of the most concerning factors that Technosoft has edge is designing the User Interface (UI) of the app. React Native is a hot favorite because this framework gives a lot of attention to designing the mobile application  UI.',
      img: '',
      sign: '',
    },
    {
      head: 'Tried & Tested',
      para:
        'Our React native applications are designed to scale with your organization’s needs. That’s why we design tech stacks suited to a rapidly changing digital ecosystem and try and test multile times to provide with best experience.',
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
    tagLine: 'React Native App Development',
    para:
      'We are a leading cross platform mobile app development company with years of experience in building, developing and deploying cross platform mobile apps to a global clientele',
    btn: (
      <button type="button" class="btn btn-success">
        Let's Discuss Your Project
      </button>
    ),
    id: 'mobileAppReact',
  }
  const data = [
    {
      font: (
        <i class="far fa-3x awesome-hover fa-circle text-dark-orange text-orange"></i>
      ),
      head: '360-degree Development Solutions',
    },

    {
      font: (
        <i class="fas fa-3x awesome-hover text-dark-orange text-orange fa-pencil-ruler"></i>
      ),
      head: 'HTML5 Mobile App Designing',
    },
    {
      font: (
        <i class="fas fa-3x awesome-hover text-dark-orange text-orange fa-italic"></i>
      ),
      head: 'IOT & Wearable Device App Development',
    },
    {
      font: (
        <i class="fas fa-3x awesome-hover text-dark-orange text-orange fa-dollar-sign"></i>
      ),
      head: 'Competitive Pricing & Timely Delivery',
    },
    {
      font: (
        <i class="fas fa-3x awesome-hover text-dark-orange text-orange fa-mobile"></i>
      ),
      head: 'UX/UI Cross Platform App Development',
    },
  ]
  var techArray = data.map((section) => {
    return <Box font={section.font} head={section.head} />
  })
  const dataNew = [
    {
      font: (
        <i class="fas fa-3x awesome-hover fa-mobile-alt text-dark-orange text-orange"></i>
      ),
      head: 'heading Customized React Native Apps',
    },

    {
      font: (
        <i class="fas fa-3x awesome-hover text-dark-orange text-orange fa-share-alt"></i>
      ),
      head: ' React Native Game Development',
    },
    {
      font: (
        <i class="fas fa-3x awesome-hover text-dark-orange text-orange fa-door-closed"></i>
      ),
      head: ' Enterprise React Native Applications',
    },
    {
      font: (
        <i class="fas fa-3x awesome-hover text-dark-orange text-orange fa-th-large"></i>
      ),
      head: ' Social Media React Native Mobile Apps',
    },
    {
      font: (
        <i class="fas fa-3x awesome-hover text-dark-orange text-orange fa-gamepad"></i>
      ),
      head: ' React Native App Testing & Portability',
    },
    {
      font: (
        <i class="fas fa-3x awesome-hover text-dark-orange text-orange fa-tram"></i>
      ),
      head: ' React Native Mobile Apps Maintenance',
    },
  ]
  var techArrayNew = dataNew.map((section) => {
    return <Card image={section.font} head={section.head} />
  })
  const boldData = {
    head: "Let's make an app which inspires",
    pic: '/rnative.png',
  }
  const topData = {
    head: 'Best Reactive Native App Development Company',
    p:
      'We work on offering unlimited possibilities to our customers with our highly scalable and robust android mobile applications. ',
  }
  return (
    <div>
      <Header />
      <PostHeader postHeader={postHeader} />
      <div className="">
        <TopHead topData={topData} />
        <div className="container">
          <div className="row">{techArray}</div>
        </div>

        <BoldArea boldData={boldData} />
        <AboutComp />
        <div className="container">
          <div className="row">{techArrayNew}</div>
        </div>
        <div className="container">
          <h3 className="text-center mt-5 text-primary text-underline">
          LeadSolution Edge
          </h3>
          <div className="row">{advantagesArray}</div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ReactNative
