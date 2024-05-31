import React, { useEffect } from 'react'
import Header from '../Header'
import PostHeader from '../MobileAppDevelopment/PostHeader'
import Card from '../LandingPage/Card'
import Footer from '../LandingPage/Footer'
import BoldArea from '../BlockChain/BoldArea'
import TopHead from '../BlockChain/TopHead'
import AdCard from '../LandingPage/AdCard'
import Importance from '../QualityAssurance/Importance'
import SolutionBox from '../BlockChain/SolutionBox'
import PiComp from '../BlockChain/Benefits'

const Ecommerce = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const serviceData = {
    service: 'Tech Service',
    tagLine: 'Education',
    para:
      'In the Field of Education Our Technology providing students with easy-to-access information, accelerated learning, and fun opportunities to practice what they learn. It enables students to explore new subjects and deepen their understanding of difficult concepts, particularly in STEM',
    btn: (
      <button type="button" class="btn btn-success  btn-sm text-white">
        View Our Work
      </button>
    ),
    id: 'webApp',
  }

  const data = [
    {
      head: 'Scalable Web Software',

      para:
        'Our web applications are designed to scale with your organization. We create tech stacks suited for the rapidly changing digital ecosystem and combine them with development best practices and Agile Scrum methodology so we can keep improving your web app even after launch.',
      img: '/scal (3).png',
      class: 'solution-box-img on-hover',
    },

    {
      head: 'Always Secure',

      para:
        'Interconnectedness of web apps can be a double-edged sword so we scrutinize our web apps for security. We know your professional reputation (and ours) hinges on the reliability, and security, of the service you provide.',
      img: '/sec.png',
      class: 'fun-img-1 on-hover',
    },
    {
      head: 'Custom Web App Development',

      para:
        'We offer everything you need for web app development and ongoing support, including: custom development, performance optimization, cloud-based deployment, API development and integration, continuous quality assurance, and round-the-clock SaaS support.',
      img: '/custo.png',
      class: 'custom-img-2 on-hover',
    },
    {
      head: 'SEO-friendly ',

      para:
        'Once your web app is live, we have the in-house talent and expertise to make it outrank and outperform your competition! We wil empower your business to rank well in search engine queries, even above other web app companies in your niche.',
      img: '/seo.png',
      class: 'w-75',
    },
    {
      head: 'Latest Tech System',

      para:
        'We are using all latest technologies such as Blockchain, Artificial Intelligence, Edge Computing, etc for developing secure, responsive, attractive and creative web solutions for number of clients',
      img: '/lat.png',
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
  const tech = [
    {
      head: 'Experience Led & Outcome Focused',
      para:
        "We help brands understand the role digital and HTML5 can play in realizing strategic opportunities and solving real world business problems, always keeping the focus on the customer's experience and the results generated.",
      img: <i class="fa-3x text-dark-orange text-orange fas fa-poll-h"></i>,
      sign: '',
    },
    {
      head: 'Trusted Delivery Methods',
      para:
        'Using agile methodology, always keeping you in the loop. Our expert Salesforce Community Cloud development, integration, design and maintenance will fit your timeline and your budget.',
      img: <i class="fa-3x text-dark-orange text-orange fab fa-rust"></i>,
      sign: '',
    },

    {
      head: 'Expert Developers',
      para:
        'We use tech-based tools and frameworks like SproutCore, Ember.js, AngularJS and PhoneGap to speed up development and lower your project costs for our cross-platform solutions.&nbsp.',
      img: <i class="fa-3x text-dark-orange text-orange fas fa-users"></i>,
      sign: '',
    },
    {
      head: 'Secure (HTTPS) website',
      para:
        'With expertise in multiple blockchain platforms, we provide blockchain development services to create various supply chain solutions for all industries that will provide complete transparency and security of your products and business activities.',
      img: (
        <i class="fa-3x text-dark-orange text-orange fas fa-3x text-dark-orange text-orange fa-lock"></i>
      ),
      sign: '',
    },
    {
      head: 'Transparent and Communicative',
      para:
        'Complete project visibility from day one, working with you, and for you. Using email, phone, chat, Skype, and Google Hangout for clear, constant communication.',
      img: <i class="fa-3x text-dark-orange text-orange fas fa-satellite"></i>,
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
      head: 'Full-service Web Development',
      para:
        'From streamlined upgrades to improved performance, cloud-based deployment, API enhancement and integration, continuous quality assurance, and day-to-day SaaS support, we have a history of delivering award-winning applications that make life easier for businesses and consumers alike. without compromising on quality standards.',
      img: '',
      sign: '',
    },
    {
      head: 'Partnerships to Grow With',
      para:
        "We are serial monogamists and  passionate about developing long-term relationships with our customers. That's why all of our web application development projects find dedicated teams of developers who continue to work on the product throughout their lives, gaining a deeper understanding of your business objectives.",
      img: '',
      sign: '',
    },
    {
      head: 'Scalable, Secure Software',
      para:
        'Our web applications are designed to scale with your organization’s needs. That’s why we design tech stacks suited to a rapidly changing digital ecosystem and combine them with development best practices as well as an Agile Scrum methodology so we can keep improving your web app even after launch.',
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
    tagLine: 'Web App Development Service',
    para:
      'All Web app solutions built by LeadSolution Codex are secure, sustainable and responsible.',
    btn: (
      <button type="button" class="btn btn-success">
        Let's Discuss Your Project
      </button>
    ),
    id: 'webApp',
  }
  const boldData = {
    head: "Let's create beautifull, creative and precise web apps!",
    pic: '/web.png',
  }
  const topData = {
    head:
      'Providing the best and most innovative Web App Development service on the market',
    p:
      'We develop in such a way that they can be easily maintained and scaled as needed ',
  }
  const importanceData = {
    head: 'Why Customers Choose Us for Web App Development        ',
    list: [
      {
        key: 'Award winning and creative solutions.',
      },
      {
        key:
          'Collaborative, transparent and communicative client-focused approach.',
      },
      {
        key: ' Cross-platform and 100% mobile solutions.',
      },
      {
        key: 'Deep expertise in related techs CSS3 and JavaScript.',
      },
      {
        key: 'Proven track record of successful project delivery.',
      },
      {
        key: 'Rigorous quality assurance (QA) testing before “Go-Live.',
      },
      {
        key:
          'Shorter development times translating to lower costs for customers.',
      },
    ],
  }
  const benefits = {
    head: 'Inspiring possibility and innovations',
    para: (
      <div>
        <p className="text-justify m-auto">
          Our <strong>Developers</strong> have a history of doing their job,
          they have been<strong>networking with their fellow</strong>{' '}
          programmers and developers in different professional community
          platforms or forums. They are continuously furthering their skills and
          always remain in tandem with the current developments about coding and
          other skill sets
        </p>
      </div>
    ),
    img: (
      <img
        src={process.env.PUBLIC_URL + './innovations.png'}
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
          <PiComp benefits={benefits} />
        </div>

        <BoldArea boldData={boldData} />
        <div className="container">
          <Importance importanceData={importanceData} />

          <h3 className="mt-5 pt-5 text-center text-primary text-center text-underline">
            What we provide in custom Web App Development Service?
          </h3>
          <p className="mt-4 mb-5 text-center font-weight-bold">
            LeadSolution has extensive experience with creating high performing,
            feature-packed different tech-based web and mobile experiences
            including:
          </p>

          <div className="row">{blockArray}</div>
        </div>
        <div className="container"></div>
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

export default Ecommerce
