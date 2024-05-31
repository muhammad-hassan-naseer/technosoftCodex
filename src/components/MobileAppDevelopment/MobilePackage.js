import React from 'react'
import Box from '../BlockChain/SolutionBox'
const UIpackage = () => {
  const dataTwo = [
    {
      img: '/construction.png',
      head: 'Construction',
      para:
        'Centralize and manage the entire construction project’s lifecycle with a complete Enterprise Resource Planning software suite. Monitor budget and resource planning, equipment procurement, inventory management, and financial management, contractor management, and asset management - all in one unified system..',
      class: 'w-50',
    },
    {
      img: '/heart.png',

      head: 'mHealth',
      para:
        'Technosoft insight-driven approach to Healthcare 4.0 helps our clients achieve higher levels of automation and efficiency, innovate new products and services, modernize infrastructure, and deliver better outcomes at a sustainable cost. Access our expertise today!',
      class: 'w-50',
    },
    {
      img: '/ecom (2).png',

      head: 'Retail & eCommerce',
      para:
        'Create new opportunities for your business and for your customers with the help of specialized software. Transform the shopping experience with an engaging mobile app or improve business operations with a comprehensive enterprise software suite.',
      class: 'w-50',
    },

    {
      img: '/travel (2).png',

      head: 'Travel & Hospitality',
      para:
        "Meet your customers' and partners’ needs with our end-to-end technology solutions for hospitality. From impactful mobile applications to comprehensive custom-made systems, leading brands rely on Intellectsoft expertise and engineering experience.",
      class: 'w-50',
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
    <>
      <h3 className="text-primary text-center mt-5 pt-5 text-underline">
        Our Apps Covering Major Areas
      </h3>
      <p className="font-weight-bold text-center">
        We’ve gained vast experience in delivering innovative digital solutions
        for a wide range of clients across multiple industries.
      </p>

      <div className="row">{customArray}</div>
    </>
  )
}

export default UIpackage
