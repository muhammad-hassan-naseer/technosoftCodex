import React from 'react'
import Box from '../SEO/Box'
const UIpackage = () => {
  const dataTwo = [
    {
      img: '/uResearch (2).png',
      head: 'User Research',
      para:
        'For clients in the design and prospecting phase of a new product, we offer in-depth user research, mockups, user persona development, and thorough UI/UX testing to ensure your app is human-friendly from the start.',
      class: 'w-50',
    },
    {
      img: '/rank.png',

      head: 'UX Audit',
      para:
        'We offer UX auditing services for products that are already in the hands of users so you can see what’s working and what isn’t.',
      class: 'ui-img-t',
    },
    {
      img: '/iDesign.png',

      head: 'Interaction Design',
      para:
        'We combine the five dimensions of interaction design—words, visuals, spatial layouts, time, and object behavior—into one smooth experience to help you create the best possible user experience.',
      class: 'w-75',
    },
    {
      img: '/tdesign.png',

      head: 'Thoughtful Design',
      para:
        'Crafting the perfect user experience is nothing short of alchemy. Our team melds user needs, functionality, and aesthetics to create experiences that captivate your customers',
      class: 'w-50',
    },
    {
      img: '/focus.png',

      head: 'Detailed Focus',
      para:
        'Page flow, visual layout, and the psychological impact of copy all influence your customers’ experience. Our team focuses on each detail to craft the ideal user experience..',
      class: 'ui-img-thi',
    },
    {
      img: '/guide.png',

      head: 'Expert Guidance',
      para:
        'Our team specializes in understanding your user and creating an experience just for them. From initial designs to audits of existing apps, our team will make sure your app engages your audience and makes them want to stick around.',
      class: 'ui-img-th',
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
        What’s Include in Our Custom UI Packages
      </h3>
      <div className="row">{customArray}</div>
    </>
  )
}

export default UIpackage
