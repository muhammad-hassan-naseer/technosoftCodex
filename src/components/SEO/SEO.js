import React, { useEffect } from 'react'
import Header from '../Header'
import PostHeader from '../MobileAppDevelopment/PostHeader'
import Card from '../LandingPage/Card'
import Footer from '../LandingPage/Footer'
import BusinessGrow from './BusinessGrow'
import BoldArea from '../BlockChain/BoldArea'
import Pricing from './Pricing'
import TopHead from '../BlockChain/TopHead'
import TimeLine from '../TimeLine/TimeLine.js'
import AdCard from '../LandingPage/AdCard'
import Box from '../BlockChain/SolutionBox'
const BlockChain = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const timeLineData = {
    firstbox: {
      headOne: 'Step 1',
      headTwo: 'More Traffic',
      para:
        'As you gain more visibility, you will start to see an increase in the number of website visitors.',
    },
    secondBox: {
      headOne: 'Step.2',
      headTwo: 'More Leads',
      para:
        'We can target the audience that is most likely to be interested in your products and services.',
    },
    thirdBox: {
      headOne: 'Step.3',
      headTwo: 'More Revenue',
      para:
        'The increase in targeted leads makes it easier to turn those leads into paying customers.',
    },
    fourthBox: {
      headOne: 'Step.4',
      headTwo: 'More Brand Awareness',
      para:
        'Your brand can become the one your customers think of over all the competition in the industry.',
    },
    fifthBox: {
      headOne: 'Step.5',
      headTwo: 'More Business Growth',
      para:
        'The new traffic, qualified leads, and brand awareness all contribute to new growth opportunities.',
    },
    sixthBox: {
      headOne: 'Step.6',
      headTwo: 'More Trust and Authority',
      para:
        'When you reach the top of the search results, your customers will see you as the industry authority.',
    },
  }
  const tech = [
    {
      head: 'Research',
      para:
        'When we start an SEO campaign, your dedicated SEO consultant starts by getting in-depth on your company, your website, your competitors and your industry. We put on our search hats and use the data to compile an SEO roadmap for your website.',
      img: (
        <i class="fab fa-searchengin text-dark-orange text-orange fa-3x"></i>
      ),
      sign: '',
    },
    {
      head: 'Optimize',
      para:
        'From IA to UX, we make hundreds of major and minor changes to your website to help Google better understand who you are. With a dedicated web development team, our SEO agency can also take care of your professional SEO, helping you increase the usability, speed, and performance of your website.',
      img: (
        <i class="fab fa-optin-monster text-dark-orange text-orange fa-3x"></i>
      ),
      sign: '',
    },
    {
      head: 'Content',
      para:
        "The content on your website is what users rely on to help educate them and guide them to the right purchase. Whether you are discussing your company's unique marketing space or providing informative content in a blog post, we will provide you with topic suggestions, a copy of the technology, and quality content to improve not only the quality of your website but also the growth of your company.",
      img: (
        <i class="fas fa-envelope-open-text text-dark-orange text-orange fa-3x"></i>
      ),
      sign: '',
    },
    {
      head: 'Keywords',
      para:
        'Our meticulous keyword research process is at the heart of our SEO services. The specific keywords we target help us define our audience and drive valuable traffic to your site. With relevant traffic heading to your website, your company can secure fresh leads, high-value sales, and more.',
      img: <i class="fab fa-korvue text-dark-orange text-orange  fa-3x"></i>,
      sign: '',
    },
    {
      head: 'Earn Media and Links',
      para:
        'Earned media and off-page SEO are crucial services for getting your site in front of your target audience. Our dedicated content marketing team will create new opportunities for website growth by helping your company build links (and relationships) with trusted experts in your industry.',
      img: (
        <i class="fas fa-people-arrows text-dark-orange text-orange fa-3x"></i>
      ),
      sign: '',
    },
    {
      head: 'Testing',
      para:
        'Getting relevant, qualified search traffic to your site is just the beginning of our SEO optimization services. We partner with you to make sure that your website is driving visitors through the purchasing funnel in a clear, concise way. We believe in testing everything and making continual improvements to your SEO marketing strategy.',
      img: <i class="fas fa-text-width text-dark-orange text-orange fa-3x"></i>,
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
      head: 'Best Search Engine Optimization',
      para:
        'From site auditing to rank tracking and from backlink analysis to keyword research, there is no much better tools that we use to.Technosoft provides you with industry-standard metrics and various page optimization suggestions.',
      img: '',
      sign: '',
    },
    {
      head: 'Try to Rank No 1',
      para:
        "By improving your website's user experience write great content optimized for SEO Get more backlinks and optimizing your images with optimizing everything for local search we provide consistent SEO to rank you no 1 on google",
      img: '',
      sign: '',
    },
    {
      head: 'Key Features',
      para:
        'Monitoring how Google perceives your website.Keeping track of what keywords visitors are using to reach you.Staying on top of any crawl, meta tag, or sitemap errors.We provide you with the top SEO features and tools.',
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
    tagLine: 'SEO Service from TechnosoftCodex',
    para: 'Turn Traffic Increases Into Revenue',
    btn: (
      <button type="button" class="btn btn-success">
        Let's Discuss Your Project
      </button>
    ),
    id: 'seo',
  }
  const boldData = {
    head: `Let's try to  Rank No.1 on Google`,
    pic: '/rankGog.png',
  }
  const topData = {
    head: 'SEO Service That Grow Traffic and Increase Revenue',
    p:
      "If you're looking for serious business growth, SEO, or search engine optimization is the strategy for you.",
  }
  const dataTwo = [
    {
      img: '/health.png',
      head: 'Site Health',
      para:
        'A lot of variables can impact your site’s overall health. Make sure algorithm changes, indexing errors, or manual actions aren’t causing problems.',
      class: 'seo-img',
    },
    {
      img: '/analysis.png',
      head: 'Competitive Analysis ',
      para:
        'A lot of companies are competing for your keywords. We’ll analyze their strengths and weaknesses to find new opportunities for your success..',
      class: 'seo-img',
    },
    {
      img: '/optimization.png',
      head: 'Page Optimization',
      para:
        'Make sure your website converts visitors to paying customers and that it’s fully optimized to achieve the best rankings.',
      class: 'seo-img',
    },
    {
      img: '/link.png',
      head: 'Link Building',
      para:
        'Links from high-quality sources drive relevant traffic to your site and help build authority in Google.',
      class: 'seo-img',
    },
    {
      img: '/month.png',
      head: 'Monthly Reporting',
      para:
        'Stay completely in the loop with a monthly reporting schedule that shows everything we’ve done and how it has impacted your online presence.',
      class: 'seo-img',
    },
    {
      img: '/marketing.png',
      head: 'Content Marketing',
      para:
        'Content is still king in the online world. This can include new on-page content, regular blogs, newsworthy press releases, or complete eBooks.',
      class: 'seo-img',
    },
  ]
  var customArray = dataTwo.map((section) => {
    return (
      <Box
        img={section.img}
        head={section.head}
        para={section.para}
        class={section.class}
      />
    )
  })
  return (
    <div>
      <Header />
      <PostHeader postHeader={postHeader} />
      <div className="">
        <TopHead topData={topData} />
        <div className="container">
          <div className="row">{techArray}</div>
        </div>
        <TimeLine timeLineData={timeLineData} />
        <BoldArea boldData={boldData} />
        <div className="container mt-5">
          <BusinessGrow />
          <h3 className="text-primary text-center mt-5 text-underline">
            What’s Included in Our Custom SEO Packages
          </h3>
          <div className="row">{customArray}</div>
        </div>
        <div className="container">
          <Pricing />
          <h3 className="text-center mt-5 text-underline text-primary">
            LeadSolution Edge
          </h3>
          <div className="row">{advantagesArray}</div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default BlockChain
