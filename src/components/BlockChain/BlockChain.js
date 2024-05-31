import React, { useEffect } from 'react'
import Header from '../Header'
import PostHeader from '../MobileAppDevelopment/PostHeader'
import Card from '../LandingPage/Card'
import Footer from '../LandingPage/Footer'
import Benefits from './Benefits'
import BoldArea from './BoldArea'
import Solutions from './Solutions'
import TopHead from './TopHead'
import AdCard from '../LandingPage/AdCard'

const BlockChain = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const tech = [
    {
      head: 'Blockchain System Development',
      para:
        'We are developing Blockchain systems that will provide reliability and transparency in your system. Our team of experienced Blockchain developers are equipped with advanced skills to deliver solutions to achieve your business goals. With our blockchain development services, you will be able to track every step of your business.',
      img: (
        <i class="fab fa-hive fa-3x text-dark-orange text-orange  text-center" />
      ),
      sign: '',
    },
    {
      head: 'Custom Apps Development',
      para:
        'Technosoft has an Ethereum (DApps) expert team that will develop D-Applications to help your business stay competitive. We provide reliable application development services and our team ensures that D-Apps is unbreakable, uninfected, and protects the firewall from all kinds of cybersecurity threats.',
      img: (
        <i class="fas fa-mobile  fa-3x text-dark-orange text-orange  text-center" />
      ),
      sign: '',
    },
    {
      head: 'Smart Contracts Development',
      para:
        'Smart contract services are more like a computer-based legal contract between two parties without the involvement of any third-party. Our experienced team has in-depth knowledge of blockchain technology, and we provide highly-secured smart contracts using technologies: Hyperledger, EOS &Tron, Ethereum.',
      img: (
        <i class="fas fa-hourglass-start fa-3x text-dark-orange text-orange  text-center"></i>
      ),
      sign: '',
    },
    {
      head: 'E-Wallet Development',
      para:
        'We design special e-wallets where you can manage all your digital assets. We provide reliable blockchain development services to build you a personal wallet where you can store your crypto coins. These wallets are quite useful as they allow you to make safe and secure transactions with complete anonymity.',
      img: (
        <i class="fab fa-google-wallet  fa-3x text-dark-orange text-orange  text-center"></i>
      ),
      sign: '',
    },
    {
      head: 'Blockchain Supply Chain ',
      para:
        'With multi-platform blockchain technology, we provide blockchain development services to create a variety of supply chain solutions across all industries that will provide complete transparency and security for your products and business operations.',
      img: (
        <i class="fas fa-unlink fa-3x text-dark-orange text-orange  text-center"></i>
      ),
      sign: '',
    },
    {
      head: 'Cryptocurrency Exchange Platform',
      para:
        'We provide highly-secured and advanced cryptocurrency platforms where you can get in touch with buyers and sellers without any risk. With these cryptocurrency platforms, you will be able to trade coins and get a commission for each trade.',
      img: (
        <i class="fas fa-yen-sign fa-3x text-dark-orange text-orange  text-center"></i>
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
      head: 'Immutability',
      para:
        '“Immutability” is undoubtedly one of the key features of blockchain technology that we provide.Consistency means something that cannot be changed or altered. This is one of the top blockchain features that helps ensure the technology stays the same - a permanent, unchanging network.',
      img: '',
      sign: '',
    },
    {
      head: 'Decentralized',
      para:
        'This is one of the key features of fully functional blockchain technology. Let me make it easy. Blockchain puts users in a specific position. Since the system does not require any official authority, we can access it directly from the web and store our assets there.',
      img: '',
      sign: '',
    },
    {
      head: 'Enhanced Security',
      para:
        'All the details in the blockchain are figuratively accelerated. In simple terms, information on a network hides the actual state of the data. In this process, any input data enters through a mathematical algorithm that produces a different type of value, but the length remains fixed.',
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
    tagLine: 'BLOCKCHAIN DEVELOPMENT',
    para:
      'Increase Traceability & Accountability With Our Enterprise-Level Blockchain Solutions',
    btn: (
      <button type="button" class="btn btn-success">
        Let's Discuss Your Project
      </button>
    ),
    id: 'blockchain',
  }
  const boldData = {
    head: "Let's make your most secure app dream come true!",
    pic: '/bitcoin.png',
  }
  const topData = {
    head: 'Top Rated Blockchain Development Company',
    p:
      'Blockchain has attracted the attention of many businesses, especially in the technological world, and why not? ',
  }
  const benefits = {
    head: 'Benefits of Blockchain Development Service',
    para: (
      <div>
        <p>
          Here are a few advantages that you can enjoy if you implement
          Blockchain technology into your business.
        </p>
        <ul>
          <li>Higher Transparency</li>
          <li>Immutability & Advanced Traceability</li>
          <li>Reduce Transactional Costs and Time</li>
          <li>Faster Transactions</li>
          <li>Boost Operational Efficiency</li>
        </ul>
      </div>
    ),
    img: (
      <img
        src="https://mly5n1ylek6q.i.optimole.com/YAOBLcw-W5_j_PeP/w:2000/h:1500/q:90/rt:fill/g:ce/https://mobylogix.com/wp-content/uploads/2020/10/%E2%80%94Pngtree%E2%80%94network-bitcoin-technology-blockchain-big_4034259-uai-2000x1500.png"
        className="block-img"
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
          <Benefits benefits={benefits} />
        </div>
        <BoldArea boldData={boldData} />

        <Solutions />
        <div className="container">
          <div className="row"></div>
        </div>
        <div className="container">
          <h3 className="text-center text-primary mt-5 text-underline">
          LeadSolution precedence
          </h3>
          <div className="row">{advantagesArray}</div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default BlockChain
