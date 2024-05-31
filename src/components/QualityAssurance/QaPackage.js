import React from 'react'
import Box from '../BlockChain/SolutionBox'
const SeoPackage = () => {
  const dataTwo = [
    {
      img: '/expertise.png',
      head: 'Expertise',
      para:
        'Our team members have diverse technology stack experience, and our customers come from diverse industries. Whatever the problem, we can solve it efficiently.',
      class: 'w-75',
    },
    {
      img: '/value (3).png',
      head: 'Value ',
      para:
        "Technosoft’s primary principle is bringing value to our customers. By ensuring your application's superior quality, Technosoft ensures its superior value in the market.",
      class: 'solution-box-img-thi',
    },
    {
      img: '/trans (2).png',
      head: 'Transparency',
      para:
        "We believe that strong business relationships are built on trust and reliability. That's why Technosoft offers fair, transparent pricing at every stage of your project.",
      class: 'solution-box-img-t',
    },
    {
      img: '/scalability.png',
      head: 'Scalability',
      para:
        "Technosoft's team of more than 250 expert engineers can scale any project. Save overhead, time, and stress with our QA services.",
      class: 'solution-box-img-th',
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
      <h3 className="text-primary text-center mt-5 text-underline">
        Why Technosoft's Quality Assurance?
      </h3>
      <div className="row">{customArray}</div>
    </>
  )
}

export default SeoPackage
