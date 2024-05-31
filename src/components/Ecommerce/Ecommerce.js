import React, { useEffect } from 'react'
import Header from '../Header'
import PostHeader from '../MobileAppDevelopment/PostHeader'
import Card from '../LandingPage/Card'
import Footer from '../LandingPage/Footer'
import Difference from '../BlockChain/Benefits'
import BoldArea from '../BlockChain/BoldArea'
import EcomService from './EcomService'
import TopHead from '../BlockChain/TopHead'
import AdCard from '../LandingPage/AdCard'

const Ecommerce = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const tech = [
    {
      head: 'Custom ecommerce web design',
      para:
        'We develop Blockchain systems that will impart reliability and transparency in your system. Our team of experienced Blockchain developers is equipped with advanced skill-set to deliver solutions to fulfill your business objectives. With our blockchain development services, you will be able to track every step of your business.',
      img: <i class="fab fa-3x text-dark-orange text-orange fa-intercom"></i>,
      sign: '',
    },
    {
      head: 'Custom ecommerce solutions',
      para:
        'Technosoft has an Ethereum (DApps) expert team that will develop D-Applications to help your business stay competitive. We provide reliable application development services and our team ensures that D-Apps is unbreakable, uninfected, and protects the firewall from all kinds of cybersecurity threats.',
      img: <i class="fas fa-3x text-dark-orange text-orange fa-file-code"></i>,
      sign: '',
    },

    {
      head: 'Responsive design',
      para:
        'We create special e-wallets where you can carry all your digital assets. We provide reliable blockchain development services to build your wallet where you can store your crypto coins. These bags are very useful as they allow you to make secure and secure transactions with complete anonymity.',
      img: <i class="fas fa-3x text-dark-orange text-orange fa-reply-all"></i>,
      sign: '',
    },
    {
      head: 'Secure (HTTPS) website',
      para:
        'With expertise in multiple blockchain platforms, we provide blockchain development services to create various supply chain solutions for all industries that will provide complete transparency and security of your products and business activities.',
      img: <i class="fas fa-3x text-dark-orange text-orange fa-lock"></i>,
      sign: '',
    },
    {
      head: 'Ecommerce SEO',
      para:
        'We provide highly-secured and advanced cryptocurrency platforms where you can get in touch with buyers and sellers without any risk. With these cryptocurrency platforms, you will be able to trade coins and get a commission for each trade.',
      img: (
        <i class="fab fa-3x text-dark-orange text-orange fa-searchengin"></i>
      ),
      sign: '',
    },
  ]
  var techArray = tech.map((section) => {
    return (
      <Card
        image={section.img}
        head={section.head}
        para={section.para}
        sign={section.sign}
      />
    )
  })

  const advantages = [
    {
      head: 'Free Search Engine Optimization',
      para:
        'Technosoft hepls you to brings in more customers through organic search and Creates a trustworthy web experience for customers plus Improves brand awareness giving you with the free first time SEO service.It benefits other marketing initiatives.',
      img: '',
      sign: '',
    },
    {
      head: 'High resolution photos',
      para:
        "HD's greater clarity means the picture on screen can be less blurred and less fuzzy. HD also brings other benefits such as smoother motion, richer and more natural colors, surround sound, and the ability to allow a variety of input devices to work together.",
      img: '',
      sign: '',
    },
    {
      head: 'Mobile-Friendly Website',
      para:
        'With a responsive website, content intuitively adapts to whatever device is accessing it Technosoft either its a table or a mobile with all laptop screens  is responsible you to provide with the most user-friendly experience.',
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
    tagLine: 'Ecommerce Website Development Service',
    para: 'Get an SEO- and Mobile-Friendly Site',
    btn: (
      <button type="button" class="btn btn-success">
        Let's Discuss Your Project
      </button>
    ),
    id: 'ecommerce',
  }
  const boldData = {
    head: "Let's make an awesome E-commerce site!",
    pic: '/ecom.png',
  }
  const topData = {
    head:
      'We try to boost your sales with our ecommerce website design and development service',
    p:
      'Ecommerce is a competitive market, which is why our ecommerce website design and development services provide a solid foundation for successs ',
  }
  const benefits = {
    head: 'A way different than traditional websites',
    para: (
      <div>
        <p className="text-justify">
          Unlike a standard company website that only highlights the corporate
          identity of a company, the design and development of an entire
          ecommerce website incorporates a database of products, product
          information, product search, order processing, payment systems, and
          much more. An ecommerce company requires all of this additional
          functionality to make sure customers can easily and conveniently
          browse and purchase at any time.
        </p>
      </div>
    ),
    img: (
      <img
        src="https://eposspace.com/wp-content/uploads/2020/12/Ecommerce-1.png"
        className="w-100"
      />
    ),
  }
  return (
    <div>
      <Header />
      <PostHeader postHeader={postHeader} />
      <div className="">
        <TopHead topData={topData} />
        <div className="container">
          <div className="row">{techArray}</div>
          <Difference benefits={benefits} />
        </div>

        <BoldArea boldData={boldData} />
        <div className="container">
          <EcomService />

          <div className="row"></div>
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

export default Ecommerce
