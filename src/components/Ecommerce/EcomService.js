import React from 'react'
import SolutionBox from '../BlockChain/SolutionBox'
const EcomService = () => {
  const data = [
    {
      head: 'Long-lasting designs',

      para:
        'With an outstanding ecommerce website design from our team, our solutions function as a reliable, long-lasting online store for any business.  They also look amazing and display properly on all devices using responsive design or mobile-friendly elements to make sure ecommerce companies are accessible at any time, even when users are on the go.  It is not all about appearance, though The ecommerce websites we build as a part of our ecommerce web design services are just as functional as they are beautiful.',
      img: '/design.png',
      class: 'w-75',
    },

    {
      head: 'Fully-functional websites ',

      para:
        'Our ecommerce web development services include a full-featured shopping cart, product catalog, and management system with extensive customization capabilities. They are also optimized to rank well on search engines, making them far more visible than the sites of competitors.',
      img: '/fWeb.png',
      class: 'img-fWeb-size',
    },
    {
      head: 'Customized  designs',

      para:
        'We specialize in designing and developing solutions on top of the Magento platform, but we can work with any ecommerce platform on the market today, whether you have an existing store or want to build a brand new one.We can also integrate with third-party, business-critical applications such as inventory management and CRM applications.',
      img: '/cDesign.png',
      class: 'custom-img on-hover',
    },
    {
      head: 'Continuous optimization',

      para:
        'Once your ecommerce store is live, we have the in-house talent and expertise to make it outrank and outperform your competition! We wil empower your business to rank well in search engine queries, even above other ecommerce companies in your niche. That is because, unlike other ecommerce agencies, we understand the need to not only develop a robust solution, but also the need to properly market that solution in order to drive conversions at the highest rate possible.',
      img: '/seo.png',
      class: 'w-100',
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
    <div className="mt-5">
      <h3 className="text-primary text-center text-underline">
        What's include in our E-commerce Service?
      </h3>
      <p className="mt-4">
        We offer several competitive advantages when it comes to our custom
        ecommerce website development services, — besides our impressive client
        recommendation score, which is 488% higher than the nationwide average —
        including:
      </p>
      <div className="row">{blockArray}</div>
    </div>
  )
}

export default EcomService
